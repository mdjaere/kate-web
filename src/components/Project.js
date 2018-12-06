import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import projectList from "./projectList";

const ProjectItemContainer = styled.div`
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
  transition: all 0.2s linear;
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
  }

  componentDidMount() {
    this.setState({
      project: projectList.find(
        item => item.urlTitle === this.props.match.params.id
      )
    });
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
    console.log("MATCH", this.props.match);
    return (
      <div>
        {project ? (
          <ProjectItemContainer>
            <ProjectHeader>
              <ProjectTitle>{project.headline}</ProjectTitle>
            </ProjectHeader>
            {project.images.map(image => {
              const inFocus = this.state.imageInFocus === image;
              const img = inFocus ? (
                <ProjectImage
                  style={{ 
                    width: "80vw",
                    height: "auto",
                  }}
                  key={image}
                  onClick={e => this.setImageInFocus(image, e)}
                  inFocus
                  src={"/" + image}
                />
              ) : (
                <ProjectImage
                  key={image}
                  onClick={e => this.setImageInFocus(image, e)}
                  inFocus
                  src={"/" + image}
                />
              );
              return img;
            })}
            <ProjectIntroAndBody>
              <ProjectIntro> {project.intro} </ProjectIntro> <br />
              <ProjectBody> {project.body} </ProjectBody>
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
