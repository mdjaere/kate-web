import React from "react";
import * as contentful from "contentful";
import styled from "styled-components";

const ArtworkContainer = styled.div`
  background-color: white;
`;

const ImageBox = styled.div`
  margin: 9px 20px 32px 0px;
`;

const ImageItem = styled.img`
  height: auto;
  width: 100%;
`;

const ImageText = styled.span`
  font-size: 1em;
`;

class Artwork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };

    this.pixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
    this.screenWidth = window.screen.width;
    this.deviceSpecificImageWidth = this.pixelRatio * this.screenWidth;

    this.client = contentful.createClient({
      space: "dlgxohln8q1h",
      accessToken:
        "207bd0790feb33520b6772a155fecdc0cc0f1399e3ae71d4a2962d236ec86c51"
    })
  }

  componentDidMount() {
    this.client
      .getEntries({
        content_type: "artwork"
      })
      .then(response => {
        this.setState({
          posts: response.items
        });
      })
      .catch(error => console.error("Cannot fetch posts:", error));
  }

  render() {
    const posts = this.state.posts;
    return (
      <ArtworkContainer>
        {posts.map(({ fields }, i) => (
          <ImageBox key={i}>
            {fields.images.map(({ fields }, i) => (
              <div key={i}>
                <ImageItem
                  src={
                    "http:" +
                    fields.file.url +
                    "?w=" +
                    this.deviceSpecificImageWidth
                  }
                />
              </div>
            ))}
            <ImageText>
              {fields.title && <a>{fields.title}</a>}
              {fields.year && <a>, {fields.year}</a>}
              {fields.medium && <a>, {fields.medium.toLowerCase()}</a>}
              {fields.dimensions && <a>, {fields.dimensions}</a>}
            </ImageText>
            {console.log(fields)}
          </ImageBox>
        ))}
      </ArtworkContainer>
    );
  }
}

export default Artwork;
