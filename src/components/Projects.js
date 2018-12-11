import React from "react";
import styled from "styled-components";
import * as contentful from "contentful";
import ProjectItem from "./ProjectItem";
import projectList from "./projectList";

import makeCancelable from "./makeCancelable";

import jsonResponse from "../mockResponse/project_local";
const promisedOfflineContent = new Promise((resolve, reject) => {
  resolve(jsonResponse);
});

const ProjectsListContainer = styled.div`
  max-width: 960px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPosts: [],
      loaded: false
    };

    if (this.props.offlineMode) {
      this.cancelableContentFetching = makeCancelable(promisedOfflineContent);
    } else {
      this.client = contentful.createClient({
        space: "dlgxohln8q1h",
        accessToken:
          "207bd0790feb33520b6772a155fecdc0cc0f1399e3ae71d4a2962d236ec86c51"
      });
      this.cancelableContentFetching = makeCancelable(
        this.client.getEntries({
          content_type: "project"
        })
      );
    }
  }

  componentDidMount() {
    const mode = this.props.offlineMode ? "Offline mode" : "Online mode";
    console.log(`Mounting Projects. ${mode}`);
    // Fetching posts
    this.cancelableContentFetching.promise
      .then(response => {
        // console.log("PROJECT RESPONSE: ", JSON.stringify(response, null, 4))
        const allPosts = response.items.sort(this.sortPostsFunction);
        this.setState({
          allPosts: allPosts,
          loaded: true,
          postsLoaded: [allPosts[0]]
        });
        // this.props.setProjectList(allPosts)
      })
      .catch(error => console.error("Cannot fetch posts:", error));
  }

  render() {
    const posts = this.state.allPosts;
    return (
      <ProjectsListContainer>
        {this.state.loaded ? (
          posts.map(project => (
            <ProjectItem
              key={project.fields.urlTitle}
              project={project}
              match={this.props.match}
              setActiveProject={this.props.setActiveProject}
            />
          ))
        ) : (
          <div>...</div>
        )}
      </ProjectsListContainer>
    );
  }
}

export default Projects;
