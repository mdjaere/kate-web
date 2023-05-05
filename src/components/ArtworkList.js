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
  cursor: default;
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

const ShowMore = styled.div`
  font-size: 0.7em;
  cursor: pointer;
`;

function ListOfArtworkItems(props) {
  const artworks = props.artworkList
    .slice(0, props.artworkToLoad)
    .map(({ fields, sys }, i) => {
      const linkId = fields.urlTitle || sys.id;
      return (
        <ArtworkItem key={i}>
          {fields.images.map(image => {
            const { width, height } = image.fields.file.details.image;
            const orientation = width / height > 1 ? "landscape" : "portraite";
            return (
              <ImageItemContainer key={image.sys.id}>
                <Link to={`/work/${linkId}`}>
                  <ImageItem
                    orientation={orientation}
                    width={width}
                    height={height}
                    title={`${fields.title} ${fields.year} (${fields.displayOrder
                      })`}
                    src={
                      "https:" +
                      image.fields.file.url +
                      "?w=" +
                      props.screenWidth
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
      );
    });
  return <React.Fragment>{artworks}</React.Fragment>;
}

class Artworklist extends React.Component {
  constructor(props) {
    super(props);
    this.loadAnotherPost = this.loadAnotherPost.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  loadAnotherPost(numberOfPostsToAdd = 1) {
    const totalNumber = this.props.artworkList.length;
    const numberToLoad = this.props.artworkToLoad;
    if (this.props.allArtworkLoaded) {
      return;
    } else if (this.props.artworkList && totalNumber > numberToLoad) {
      let newNumberToLoad = numberToLoad + numberOfPostsToAdd;
      if (newNumberToLoad >= totalNumber) {
        newNumberToLoad = totalNumber;
      }
      this.props.setArtworkToLoad(newNumberToLoad);
    } else {
      this.props.setAllArtworkLoaded(true);
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("mousewheel", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("mousewheel", this.handleScroll);
  }

  handleScroll() {
    if (
      document.documentElement.offsetHeight -
      (window.innerHeight + document.documentElement.scrollTop) <
      20
    ) {
      this.loadAnotherPost(3);
    }
  }

  render() {
    const allArtworkLoaded = this.props.allArtworkLoaded;

    if (this.props.artworkList) {
      return (
        <ArtworkContainer>
          <ListOfArtworkItems
            artworkList={this.props.artworkList}
            artworkToLoad={this.props.artworkToLoad}
            screenWidth={this.props.screenWidth}
          />
          {!allArtworkLoaded && (
            <ShowMore onClick={() => this.loadAnotherPost(3)}>Show more</ShowMore>
          )}
        </ArtworkContainer>
      );
    }
    return <ArtworkContainer>...</ArtworkContainer>;
  }
}

export default Artworklist;
export {
  ArtworkContainer,
  ArtworkItem,
  ImageItemContainer,
  ImageItem,
  ImageText
};
