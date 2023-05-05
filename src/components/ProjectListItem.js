import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProjectListItemStyled = styled.div`
  width: 300px;
  padding: 0px 0px 0px 0px;
  margin: 0px 5px 26px 5px;
  overflow-x: hidden;
  a:link {
    text-decoration: none;
    color: #666;
  }
  a:active {
    text-decoration: none;
    color: #666;
  }
  a:visited {
    text-decoration: none;
    color: #666;
  }
  a:hover {
    text-decoration: underline;
    color: #666;
  }
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

const ProjectListItem = props => {
  const { project } = props;
  const { fields } = project;
  const coverImage = project.fields.coverImage;
  const projectLink = `/projects/${fields.urlTitle}`;
  return (
    <ProjectListItemStyled>
      <Link to={projectLink}>
        <ProjectHeader>
          <ProjectTitle>{fields.title}</ProjectTitle>
        </ProjectHeader>
        {coverImage && (
          <ProjectImage
            src={
              "https:" + coverImage.fields.file.url 
            }
          />
        )}
      </Link>
      <ProjectIntro> {fields.intro} </ProjectIntro>
      <Link to={projectLink}>
        <ProjectLink> Read More </ProjectLink>
      </Link>
    </ProjectListItemStyled>
  );
};

export default ProjectListItem;
