import React from "react";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";

const ProjectsListContainer = styled.div`
  max-width: 960px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Projects = props => {
  return (
    <ProjectsListContainer>
      {props.projectList ? (
        props.projectList.map(project => (
          <ProjectItem
            key={project.fields.urlTitle}
            project={project}
            match={props.match}
            setActiveProject={props.setActiveProject}
            screenWidth={props.screenWidth}
          />
        ))
      ) : (
        <div>...</div>
      )}
    </ProjectsListContainer>
  );
};

export default Projects;
