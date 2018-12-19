import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import * as Markdown from "react-markdown";

const PaintingItemContainer = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0px 0px 26px 0px;
`;

const BackLink = styled.div`
  font-size: 0.7em;
  margin: 20px 0px 20px 0px;
`;

const PaintingHeader = styled.div``;

const PaintingDate = styled.div`
  margin: 0px 0px 0px 0px;
`;

const PaintingIntroAndBody = styled.div`
  margin: 0px 0px 0px 0px;
`;

const PaintingImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  margin: 10px 0px 10px 0px;
`;

const PaintingTitle = styled.div``;

const PaintingIntro = styled.div`
  font-size: 0.7em;
  font-weight: bold;
  margin: 0px 0px 0px 0px;
`;

const PaintingBody = styled.div`
  font-size: 0.7em;
  margin: 0px 0px 0px 0px;
`;

const PaintingLink = styled.div`
  font-size: 0.7em;
  margin-top: 7px;
`;

class Painting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageInFocus: null
    };
  }

  render() {
    const painting = this.props.painting;
    return (
      <div>
        {painting ? (
          <PaintingItemContainer>
            <PaintingHeader>
              <PaintingTitle>
                {painting.fields.title && <a>{painting.fields.title}</a>}
              </PaintingTitle>
            </PaintingHeader>
            {painting.fields.images &&
              painting.fields.images.map(image => {
                let url = image.fields.file.url;
                if (!url.includes("//images.ctfassets.net")) {
                  url = "../" + url;
                }
                return (
                  <PaintingImage
                    key={image.sys.id}
                    src={"http:" + url + "?w=" + this.props.screenWidth}
                  />
                );
              })}
            <PaintingIntroAndBody>
              <PaintingIntro>
                {" "}
                {painting.fields.year && <a>{painting.fields.year}</a>}
                {painting.fields.medium2 && (
                  <a>, {painting.fields.medium2.toLowerCase()}</a>
                )}
                {painting.fields.dimensions && (
                  <a>, {painting.fields.dimensions}</a>
                )}
                {painting.fields.project && <a>, {painting.fields.project}</a>}
              </PaintingIntro>
              <PaintingIntro> {painting.fields.intro} </PaintingIntro> <br />
              <PaintingBody>
                <Markdown source={painting.fields.body} />
              </PaintingBody>
            </PaintingIntroAndBody>
          </PaintingItemContainer>
        ) : (
          <div>Loading...</div>
        )}
        <BackLink>
          <Link to="/paintings"> Back to all paintings</Link>
        </BackLink>
      </div>
    );
  }
}

export default Painting;
