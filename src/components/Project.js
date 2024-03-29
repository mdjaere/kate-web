import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import ReactMarkdown from "react-markdown";
// import projectList from "./projectList";

const ProjectItemContainer = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0px 0px 26px 0px;
`;

const BackLink = styled.div`
  font-size: 0.7em;
  margin: 20px 0px 20px 0px;
`;

const ProjectHeader = styled.div``;

const ProjectDate = styled.div`
  margin: 0px 0px 0px 0px;
`;

const ProjectIntroAndBody = styled.div`
  margin: 0px 0px 0px 0px;
`;

const ProjectImage = styled.img`
  width: 250px;
  height: auto;
  margin: 10px 10px 10px 10px;
  transition: all 0.1s ease;
  cursor: pointer;
  ${props =>
    props.inFocus &&
    css`
      height: auto;
      width: 100%;
    `}
`;

const ProjectTitle = styled.div``;

const ProjectIntro = styled.div`
  font-size: 0.7em;
  font-weight: bold;
  margin: 0px 0px 0px 0px;
`;

const ProjectBody = styled.div`
  font-size: 0.7em;
  margin: 0px 0px 0px 0px;
`;

const ProjectLink = styled.div`
  font-size: 0.7em;
  margin-top: 7px;
`;

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageInFocus: null
    };
  }

  setImageInFocus(newImage, e) {
    this.setState({
      imageInFocus: newImage !== this.state.imageInFocus ? newImage : null
    });
  }

  render() {
    const project = this.props.project;
    return project ? (
      <div>
        <ProjectItemContainer>
          <ProjectHeader>
            <ProjectTitle>{project.fields.title}</ProjectTitle>
          </ProjectHeader>
          {project.fields.images &&
            project.fields.images.map(image => {
              const url = image.fields.file.url;

              return (
                <ProjectImage
                  key={image.sys.id}
                  onClick={() => this.setImageInFocus(image.sys.id)}
                  inFocus={this.state.imageInFocus === image.sys.id}
                  src={"https:" + url}
                />
              );
            })}
          <ProjectIntroAndBody>
            <ProjectIntro> {project.fields.intro} </ProjectIntro> <br />
            <ProjectBody>
              <ReactMarkdown children={project.fields.body} />
            </ProjectBody>
          </ProjectIntroAndBody>
        </ProjectItemContainer>
        <BackLink>
          <Link to="/projects"> Back to all projects</Link>
        </BackLink>
      </div>
    ) : (
      <div>
        <div>Loading...</div>
        <BackLink>
          <Link to="/projects"> Back to all projects</Link>
        </BackLink>
      </div>
    )
      ;
  }
}

export default Project;
