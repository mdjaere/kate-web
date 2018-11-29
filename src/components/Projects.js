import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import projectList from "./projectList";

const ProjectsContainer = styled.div`
  display: flex;
  max-width: 960px;
  flex-direction: column;
  align-items: center;

`;

const ProjectItem = styled.div`
  display: flex;
  justify-content: space-evenly
`;

const ProjectHeader = styled.div`
flex-basis: 25em
`

const ProjectDate = styled.div`
  margin: 0px 0px 0px 0px;
`;

const ProjectBlurbAndLink = styled.div`
  margin: 0px 0px 0px 0px;
`;

const ProjectImage = styled.img`
  max-width: 100%;
  max-height: 50vh;
  margin: 0px 20px 0px 20px;
`;

const ProjectTitle = styled.div`
  text-decoration: underline;
`;

const ProjectBlurb = styled.div`
  text-indent: 30px;
  font-size: 0.7em;
  margin: 0px 0px 0px 0px;
`;

const ProjectLink = styled.div`
  font-size: 0.7em;
  margin-top: 10px;
`;

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <ProjectsContainer>
        {projectList.map(project => (
          <ProjectItem key={project.title}>
            <ProjectHeader>
              {/* <ProjectDate>{project.date} </ProjectDate> */}
              <ProjectTitle>
                <Link to={"/"}>{project.title}</Link>
              </ProjectTitle>
            </ProjectHeader>
            <ProjectImage src={project.images[0]} />
            <ProjectBlurbAndLink>
              <ProjectBlurb> {project.blurb} </ProjectBlurb>
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
