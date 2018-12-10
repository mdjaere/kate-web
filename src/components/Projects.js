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
      loaded: false,
      offlineMode: false
    };

    this.pixelRatioRaw = window.devicePixelRatio ? window.devicePixelRatio : 1;
    this.pixelRatio = Math.round(this.pixelRatioRaw * 100) / 100;
    this.screenWidth = window.screen.width;
    this.deviceSpecificImageWidth = this.pixelRatio * this.screenWidth;

    if (this.state.offlineMode) {
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
      })
      .catch(error => console.error("Cannot fetch posts:", error));
  }

  render() {
    return (
      <ProjectsListContainer>
        {projectList.map((project, i) => (
          <ProjectItem key={i} project={project} match={this.props.match} />
        ))}
      </ProjectsListContainer>
    );
  }
}

export default Projects;
