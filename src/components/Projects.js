import React from "react";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import projectList from "./projectList";


const ProjectsListContainer = styled.div`
  max-width: 960px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

class Projects extends React.Component {
  render() {
    return (
      <ProjectsListContainer>
        {projectList.map((project, i) => (
          <ProjectItem key={i} project={project} match={this.props.match}/>
        ))}
      </ProjectsListContainer>
    );
  }
}

export default Projects;
