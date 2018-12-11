import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
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
  transition: all 0.2s ease;
  cursor: pointer;
  ${props =>
    props.inFocus &&
    css`
      width: 80vw;
      height: auto;
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
      project: null,
      imageInFocus: null
    };
    this.setImageInFocus = this.setImageInFocus.bind(this);
    this.pixelRatioRaw = window.devicePixelRatio ? window.devicePixelRatio : 1;
    this.pixelRatio = Math.round(this.pixelRatioRaw * 100) / 100;
    this.screenWidth = window.screen.width;
    this.deviceSpecificImageWidth = this.pixelRatio * this.screenWidth;
  }

  componentDidMount() {
    this.setState({ project: this.props.project });
  }

  setImageInFocus(newImage, e) {
    this.setState(
      {
        imageInFocus: newImage !== this.state.imageInFocus ? newImage : null
      },
      () => console.log("New image in focus: ", this.state.imageInFocus)
    );
  }

  render() {
    const project = this.state.project;
    return (
      <div>
        {project ? (
          <ProjectItemContainer>
            <ProjectHeader>
              <ProjectTitle>{project.fields.title}</ProjectTitle>
            </ProjectHeader>
            {project.fields.images && project.fields.images.map(image => {
              const url = this.props.offlineMode
                ? `../${image.fields.file.url}`
                : image.fields.file.url;
              return (
                <ProjectImage
                  key={image.sys.id}
                  onClick={e => this.setImageInFocus(image.sys.id, e)}
                  inFocus={this.state.imageInFocus === image.sys.id}
                  src={"http:" + url + "?w=" + this.deviceSpecificImageWidth}
                />
              );
            })}
            <ProjectIntroAndBody>
              <ProjectIntro> {project.fields.intro} </ProjectIntro> <br />
              <ProjectBody> {project.fields.body} </ProjectBody>
            </ProjectIntroAndBody>
          </ProjectItemContainer>
        ) : (
          <div>Loading...</div>
        )}
        <BackLink>
          <Link to="/projects"> Back to all projects</Link>
        </BackLink>
      </div>
    );
  }
}

export default Project;
