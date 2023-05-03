import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import ReactMarkdown from "react-markdown";

const ArtworkItemContainer = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0px 0px 26px 0px;
`;

const BackLink = styled.div`
  font-size: 0.7em;
  margin: 20px 0px 20px 0px;
`;

const ArtworkHeader = styled.div``;

const ArtworkDate = styled.div`
  margin: 0px 0px 0px 0px;
`;

const ArtworkIntroAndBody = styled.div`
  margin: 0px 0px 0px 0px;
`;

const ArtworkImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  margin: 10px 0px 10px 0px;
`;

const ArtworkTitle = styled.div``;

const ArtworkIntro = styled.div`
  font-size: 0.7em;
  font-weight: bold;
  margin: 0px 0px 0px 0px;
`;

const ArtworkBody = styled.div`
  font-size: 0.7em;
  margin: 0px 0px 0px 0px;
`;

const ArtworkLink = styled.div`
  font-size: 0.7em;
  margin-top: 7px;
`;

class Artwork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageInFocus: null
    };
    window.scrollTo(0, 0);
  }

  render() {
    const artwork = this.props.artwork;
    return (
      <div>
        {artwork ? (
          <ArtworkItemContainer>
            <ArtworkHeader>
              <ArtworkTitle>
                {artwork.fields.title && <a>{artwork.fields.title}</a>}
              </ArtworkTitle>
            </ArtworkHeader>
            {artwork.fields.images &&
              artwork.fields.images.map(image => {
                let url = image.fields.file.url;
                if (!url.includes("//images.ctfassets.net")) {
                  url = "../" + url;
                }
                return (
                  <ArtworkImage
                    key={image.sys.id}
                    src={"https:" + url + "?w=" + this.props.screenWidth}
                  />
                );
              })}
            <ArtworkIntroAndBody>
              <ArtworkIntro>
                {" "}
                {artwork.fields.year && <a>{artwork.fields.year}</a>}
                {artwork.fields.medium2 && (
                  <a>, {artwork.fields.medium2.toLowerCase()}</a>
                )}
                {artwork.fields.dimensions && (
                  <a>, {artwork.fields.dimensions}</a>
                )}
                {artwork.fields.project && <a>, {artwork.fields.project}</a>}
              </ArtworkIntro>
              <ArtworkIntro> {artwork.fields.intro} </ArtworkIntro> <br />
              <ArtworkBody>
                <ReactMarkdown children={artwork.fields.body} />
              </ArtworkBody>
            </ArtworkIntroAndBody>
          </ArtworkItemContainer>
        ) : (
          <div>Loading...</div>
        )}
        <BackLink>
          <Link to="/work"> Back to all work</Link>
        </BackLink>
      </div>
    );
  }
}

export default Artwork;
