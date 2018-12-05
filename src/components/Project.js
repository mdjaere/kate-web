import React from "react";
import styled from "styled-components";
import projectList from "./projectList";

const ProjectItemContainer = styled.div`
  margin: 0px 0px 26px 0px;
`;

const ProjectHeader = styled.div``;

const ProjectDate = styled.div`
  margin: 0px 0px 0px 0px;
`;

const ProjectIntroAndBody = styled.div`
  margin: 0px 0px 0px 0px;
`;

const ProjectImage = styled.img`
  width: 250px;
  height: auto;
  margin: 10px 10px 10px 10px;
`;

const ProjectTitle = styled.div``;

const ProjectIntro = styled.div`
  font-size: 0.7em;
  font-weight: bold;
  margin: 0px 0px 0px 0px;
`;

const ProjectBody = styled.div`
  font-size: 0.7em;
  margin: 0px 0px 0px 0px;
`;

const ProjectLink = styled.div`
  font-size: 0.7em;
  margin-top: 7px;
`;

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { project: null };
  }

  componentDidMount() {
    this.setState({
      project: projectList.find(
        item => item.url_title === this.props.match.params.id
      )
    });
  }

  render() {
    const project = this.state.project;
    console.log("MATCH", this.props.match);
    return (
      <div>
        {project ? (
          <ProjectItemContainer>
            <ProjectHeader>
              <ProjectTitle>{project.headline}</ProjectTitle>
            </ProjectHeader>
            {project.images.map(image => {
              return <ProjectImage key={image} src={"/" + image} />;
            })}
            <ProjectIntroAndBody>
              <ProjectIntro> {project.intro} </ProjectIntro> <br />
              <ProjectBody> {project.body} </ProjectBody>
            </ProjectIntroAndBody>
          </ProjectItemContainer>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default Project;
