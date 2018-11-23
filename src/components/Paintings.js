import React from "react";
import paintingList from "./paintingList.js";

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
  font-size: 0.5em;
`;

const Paintings = props => {
  return (
    <ArtworkContainer>
      {paintingList.map(item => (
        <ImageBox key={item.src}>
          <ImageItem src={item.src} />
          <br />
          <ImageText>{item.text}</ImageText>
        </ImageBox>
      ))}
    </ArtworkContainer>
  );
};

export default Paintings;
