import React from "react";
import * as contentful from "contentful";
import styled from "styled-components";
import makeCancelable from "./makeCancelable";

// const ArtworkContainer = styled.div`
//   position: relative:
//   top: -20px
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

const ArtworkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageBox = styled.div`
`;

const ImageItemContainer = styled.div``;

const ImageItem = styled.img`
  max-width: 100%;
  max-height: 80vh;
`;

const ImageText = styled.div`
  width: 100%;
  font-size: 0.6em;
  margin: 0px 0px 32px 0px;
`;

class Artwork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loaded: false
    };

    this.pixelRatioRaw = window.devicePixelRatio ? window.devicePixelRatio : 1;
    this.pixelRatio = Math.round(this.pixelRatioRaw * 100) / 100;
    this.screenWidth = window.screen.width;
    this.deviceSpecificImageWidth = this.pixelRatio * this.screenWidth;
    this.client = contentful.createClient({
      space: "dlgxohln8q1h",
      accessToken:
        "207bd0790feb33520b6772a155fecdc0cc0f1399e3ae71d4a2962d236ec86c51"
    });
    this.cancelableArtFetching = makeCancelable(
      this.client.getEntries({
        content_type: "artwork"
      })
    );
  }

  sortPostsFunction(a, b) {
    const aIndex = a.fields.displayOrder;
    const bIndex = b.fields.displayOrder;
    const sortValue = bIndex - aIndex;
    return sortValue;
  }

  componentDidMount() {
    // Fetching posts
    console.log("Mounting Artwork");
    this.cancelableArtFetching.promise
      .then(response => {
        this.setState({
          posts: response.items.sort(this.sortPostsFunction),
          loaded: true
        });
      })
      .catch(error => console.error("Cannot fetch posts:", error));
  }

  componentWillUnmount() {
    console.log("Unmounting Artwork");
    this.cancelableArtFetching.cancel();
  }

  render() {
    const posts = this.state.posts;
    return (
      <ArtworkContainer>
        {this.state.loaded &&
          posts.map(({ fields }, i) => (
            <ImageBox key={i}>
              {fields.images.map(({ fields }, i) => {
                return (
                  <ImageItemContainer key={i}>
                    <ImageItem
                      src={
                        "http:" +
                        fields.file.url +
                        "?w=" +
                        this.deviceSpecificImageWidth
                      }
                    />
                  </ImageItemContainer>
                );
              })}
              {fields.title && <ImageText>
                {fields.title && <a>{fields.title}</a>}
                {fields.year && <a>, {fields.year}</a>}
                {fields.medium2 && <a>, {fields.medium2.toLowerCase()}</a>}
                {fields.dimensions && <a>, {fields.dimensions}</a>}
                {fields.project && <a>, {fields.project}</a>}
              </ImageText>}
            </ImageBox>
          ))}
      </ArtworkContainer>
    );
  }
}

export default Artwork 
export {ArtworkContainer, ImageBox, ImageItemContainer, ImageItem, ImageText}
