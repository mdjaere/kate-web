import React from "react";
import styled from "styled-components";

const ArtworkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageBox = styled.div``;

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

class Paintings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberToLoad: 1,
      deviceSpecificImageWidth: this.props.screenWidth
    };

    this.loadAnotherPost = this.loadAnotherPost.bind(this);
  }

  loadAnotherPost() {
    if (
      this.props.paintingList &&
      this.props.paintingList.length > this.state.numberToLoad
    ) {
      this.setState({ numberToLoad: this.state.numberToLoad + 1 });
    }
  }

  render() {
    return (
      <ArtworkContainer>
        {this.props.paintingList ? (
          this.props.paintingList.slice(0, this.state.numberToLoad).map(({ fields }, i) => (
            <ImageBox key={i}>
              {fields.images.map(({ fields }, i) => {
                return (
                  <ImageItemContainer key={i}>
                    <ImageItem
                      onLoad={this.loadAnotherPost}
                      src={
                        "http:" +
                        fields.file.url +
                        "?w=" +
                        this.state.deviceSpecificImageWidth
                      }
                    />
                  </ImageItemContainer>
                );
              })}
              {fields.title && (
                <ImageText>
                  {fields.title && <a>{fields.title}</a>}
                  {fields.year && <a>, {fields.year}</a>}
                  {fields.medium2 && <a>, {fields.medium2.toLowerCase()}</a>}
                  {fields.dimensions && <a>, {fields.dimensions}</a>}
                  {fields.project && <a>, {fields.project}</a>}
                </ImageText>
              )}
            </ImageBox>
          ))
        ) : (
          <div>...</div>
        )}
      </ArtworkContainer>
    );
  }
}

export default Paintings;
export { ArtworkContainer, ImageBox, ImageItemContainer, ImageItem, ImageText };
