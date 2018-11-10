import React from "react";
import styled from 'styled-components'

const ImageBox = styled.div`
  margin: 9px 20px 32px 0px;
`;

const Image = styled.img`
  height: auto;
  width: 100%;
`;

const ImageText = styled.div`
  font-size: 1em;
`;

const Painting = props => {
  const src = props.img.src;
  const text = props.img.text;
  return (
    <ImageBox>
      <Image src={src} />
      <br />
      <ImageText> {text}</ImageText>
    </ImageBox>
  );
};

export default Painting;
