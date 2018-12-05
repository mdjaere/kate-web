import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProjectItemContainer = styled.div`
  margin: 0px 0px 26px 0px;
`;

const ProjectHeader = styled.div``;

const ProjectDate = styled.div`
  margin: 0px 0px 0px 0px;
`;

const ProjectIntroAndLink = styled.div`
  margin: 0px 0px 0px 0px;
`;

const ProjectImage = styled.img`
  width: 250px;
  height: auto;
  margin: 10px 0px 10px 0px;
`;

const ProjectTitle = styled.div``;

const ProjectIntro = styled.div`
  font-size: 0.7em;
  margin: 0px 0px 0px 0px;
`;

const ProjectLink = styled.div`
  font-size: 0.7em;
  margin-top: 7px;
`;

const ProjectItem = (props) => {
  const { match, project } = props;
  console.log(match)
  return (
    <ProjectItemContainer>
      <ProjectHeader>
        <ProjectTitle>
          <Link to={"/"}>{project.headline}</Link>
        </ProjectTitle>
      </ProjectHeader>
      <ProjectImage src={project.images[0]} />
      <ProjectIntroAndLink>
        <ProjectIntro> {project.intro} </ProjectIntro>
        <ProjectLink>
          <Link to={`${match.url}/${project.url_title}`}> Read More </Link>{" "}
        </ProjectLink>{" "}
      </ProjectIntroAndLink>
    </ProjectItemContainer>
  );
};

export default ProjectItem;
