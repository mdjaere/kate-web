import React from "react";
import styled from "styled-components";
import ProjectItem from "./ProjectItem"
import projectList from "./projectList";

const ProjectsContainer = styled.div`
  max-width: 960px;
  width: 100%;
`;

class Projects extends React.Component {
  render(props) {
    return (
      <ProjectsContainer>
        {projectList.map(project => (
          <ProjectItem key={project.url_title} project={project} />
        ))}
      </ProjectsContainer>
    );
  }
}

export default Projects;
