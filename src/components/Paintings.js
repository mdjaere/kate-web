import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const ArtworkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArtworkItem = styled.div``;

const ImageItemContainer = styled.div``;

const ImageItem = styled.img`
  cursor: default ;
  ${props =>
    props.orientation === "landscape" &&
    css`
      width: 100%;
      height: auto;
    `}
  ${props =>
    props.orientation === "portraite" &&
    css`
      width: auto;
      height: 80vh;
    `}
`;

const ImageText = styled.div`
  font-size: 0.7em;
  margin: 0px 0px 32px 0px;
`;

class Paintings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberToLoad: 1,
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
          this.props.paintingList
            .slice(0, this.state.numberToLoad)
            .map(({ fields, sys }, i) => (
              <ArtworkItem key={i}>
                {fields.images.map(({ fields }, i) => {
                  const { width, height } = fields.file.details.image;
                  const orientation =
                    width / height > 1 ? "landscape" : "portraite";
                  const paintingLink = `/paintings/${sys.id}`;
                  return (
                    <ImageItemContainer key={i}>
                      <Link to={paintingLink}>
                        <ImageItem
                          onLoad={this.loadAnotherPost}
                          orientation={orientation}
                          src={
                            "http:" +
                            fields.file.url +
                            "?w=" +
                            this.props.screenWidth
                          }
                        />
                      </Link>
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
              </ArtworkItem>
            ))
        ) : (
          <div>...</div>
        )}
      </ArtworkContainer>
    );
  }
}

export default Paintings;
export {
  ArtworkContainer,
  ArtworkItem,
  ImageItemContainer,
  ImageItem,
  ImageText
};
