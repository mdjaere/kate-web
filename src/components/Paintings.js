import React from "react";
import paintingList from "./paintingList.js";
import {ImageBox, ImageItem, ArtworkContainer, ImageText} from "./Artwork"

const Paintings = props => {
  return (
    <ArtworkContainer>
      {paintingList.map(item => (
        <ImageBox key={item.src}>
          <ImageItem src={item.src} />
          {item.text && <ImageText>{item.text}</ImageText>}
        </ImageBox>
      ))}
    </ArtworkContainer>
  );
};

export default Paintings;
