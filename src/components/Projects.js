import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import projectList from "./projectList";

const ProjectsContainer = styled.div`
  max-width: 960px;
  width: 100%;
`;

const ProjectItem = styled.div`
  margin: 0px 0px 26px 0px;
`;

const ProjectHeader = styled.div``;

const ProjectDate = styled.div`
  margin: 0px 0px 0px 0px;
`;

const ProjectBlurbAndLink = styled.div`
  margin: 0px 0px 0px 0px;
`;

const ProjectImage = styled.img`
  width: 250px;
  height: auto;
  margin: 12px 0px 5px 0px;
`;

const ProjectTitle = styled.div`
  // text-decoration: underline;
  width: ;
`;

const ProjectBlurb = styled.div`
  // text-indent: 30px;
  font-size: 0.7em;
  margin: 0px 0px 0px 0px;
`;

const ProjectLink = styled.div`
  font-size: 0.7em;
  margin-top: 5px;
`;

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <ProjectsContainer>
        {projectList.map(project => (
          <ProjectItem key={project.headline}>
            <ProjectHeader>
              <ProjectTitle>
                <Link to={"/"}>{project.headline}</Link>
              </ProjectTitle>
            </ProjectHeader>
            <ProjectImage src={project.images[0]} />
            <ProjectBlurbAndLink>
              <ProjectBlurb> {project.intro} </ProjectBlurb>
              <ProjectLink>
                <Link to={"/"}> Read More </Link>{" "}
              </ProjectLink>{" "}
            </ProjectBlurbAndLink>
          </ProjectItem>
        ))}
      </ProjectsContainer>
    );
  }
}

export default Projects;
