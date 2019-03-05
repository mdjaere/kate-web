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

class Paintings extends React.Component {
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
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
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
    return (
      <ArtworkContainer>
        {this.props.artworkList ? (
          this.props.artworkList
            .slice(0, this.props.artworkToLoad)
            .map(({ fields, sys }, i) => {
              const linkId = fields.urlTitle || sys.id;
              return (
                <ArtworkItem key={i}>
                  {fields.images.map(image => {
                    const { width, height } = image.fields.file.details.image;
                    const orientation =
                      width / height > 1 ? "landscape" : "portraite";
                    return (
                      <ImageItemContainer key={image.sys.id}>
                        <Link to={`/work/${linkId}`}>
                          <ImageItem
                            orientation={orientation}
                            title={`${fields.title} ${fields.year} (${fields.displayOrder})`}
                            src={
                              "https:" +
                              image.fields.file.url +
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
                      {fields.medium2 && (
                        <a>, {fields.medium2.toLowerCase()}</a>
                      )}
                      {fields.dimensions && <a>, {fields.dimensions}</a>}
                      {fields.project && <a>, {fields.project}</a>}
                    </ImageText>
                  )}
                </ArtworkItem>
                {!this.props.allArtworkLoaded && 
                    <div onClick={()=>this.loadAnotherPost(3)}>Load more</div>
                }
              );
            })
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
