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
  const posts = props.projectList;
  // console.log(posts)
  return (
    <ProjectsListContainer>
      {posts ? (
        posts.items.map(project => (
          <ProjectItem
            key={project.fields.urlTitle}
            project={project}
            match={props.match}
            setActiveProject={props.setActiveProject}
          />
        ))
      ) : (
        <div>...</div>
      )}
    </ProjectsListContainer>
  );
};

export default Projects;
