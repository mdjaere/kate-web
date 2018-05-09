import React from "react";
import paintingList from "./paintingList.js"

const Paintings = props => {
  return (
    <div className="imagesContainer">
      {paintingList.map(item => (
        <div className="imageBox" key={item.src}>
          <img className="painting" src={item.src} />
          <br />
          <span className="imageText"> {item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Paintings;
