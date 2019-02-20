import React from "react";
import styled from "styled-components";
import ProjectListItem from "./ProjectListItem";

const ProjectListStyled = styled.div`
  max-width: 960px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const ProjectList = props => {
  return (
    <ProjectListStyled>
      {props.projectList ? (
        props.projectList.map(project => (
          <ProjectListItem
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
    </ProjectListStyled>
  );
};

export default ProjectList;
