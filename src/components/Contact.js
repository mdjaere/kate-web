import React from "react";
import bgImg from "../assets/7_background.jpg";

const Contact = () => (
  <div>
    <img src={bgImg} />
    <div style={{ position:'absolute', top:10, left: 10 }}>
      Contact: <br /><br />
      <strong>katewarner@gmail.com</strong>
    </div>
  </div>
);

export default Contact;
