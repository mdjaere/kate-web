import React from "react";
import styled from "styled-components";
import bgImg from "../assets/7_background.jpg";

const ContactPanel = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const NewsPanel = styled.div`
  position: absolute;
  top: 60px;
  left: 10px;
`;

const Contact = () => (
  <div>
    <img src={bgImg} />
    <ContactPanel>
      Contact: <br />
      <br />
      <strong>katewarner@gmail.com</strong>
    </ContactPanel>
    <NewsPanel>
      <p>
        <a href="https://themothershipproject.wordpress.com">
          The Mothership Project Satellite Residency
        </a>{" "}
        <br />
        <a href="https://cowhousestudios.com/satellite-residency-kate-warner-james-o-haodha/"> 
        Cow House Studios, Wexford, Ireland</a> <br />
        October 2018
      </p>

    </NewsPanel>
  </div>
);

export default Contact;
