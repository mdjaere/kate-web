import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProjectItemContainer = styled.div`
  width: 300px;
  padding: 0px 0px 0px 0px;
  margin: 0px 5px 26px 5px;
  overflow-x: hidden;
`;

const ProjectHeader = styled.div``;

const ProjectDate = styled.div``;

const ProjectIntroAndLink = styled.div``;

const ProjectImage = styled.img`
  width: 300px;
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

const ProjectItem = props => {
  const { match, project } = props;
  const { fields } = project;
  const coverImage = project.fields.coverImage;
  return (
    <ProjectItemContainer>
      <ProjectHeader>
        <ProjectTitle>
          <Link to={`${match.url}/${fields.urlTitle}`}>{fields.title}</Link>
        </ProjectTitle>
      </ProjectHeader>
      {coverImage && <ProjectImage src={coverImage.fields.file.url} />}
      <ProjectIntroAndLink>
        <ProjectIntro> {fields.intro} </ProjectIntro>
        <ProjectLink>
          <Link to={`${match.url}/${fields.urlTitle}`}> Read More </Link>{" "}
        </ProjectLink>{" "}
      </ProjectIntroAndLink>
    </ProjectItemContainer>
  );
};

export default ProjectItem;
