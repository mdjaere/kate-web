import React from "react";
import paintingList from "./paintingList.js";

const style = {
  imagesContainer: {
    backgroundColor: "white"
  },
  imageBox: {
    margin: ["9px", "20px", "32px", "0px"]
  },
  painting: {
    height: "auto",
    width: "100%"
  },
  imageText: {
    fontSize: "1em"
  }
};

const Paintings = props => {
  return (
    <div style={style.imagesContainer}>
      {paintingList.map(item => (
        <div style={style.imageBox} key={item.src}>
          <img style={style.painting} src={item.src} />
          <br />
          <span style={style.imageText}> {item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Paintings;
