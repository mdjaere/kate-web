import React from "react";
import styled from "styled-components";
import bgImg from "../assets/7_background.jpg";

const Container = styled.div`
`

const ContactPanel = styled.div`
  position: static;
`;

const NewsPanel = styled.div`
  position: static;
`;

const Backdrop = styled.img`
  position: absolute;
  z-index:-1;
  width: 100%;
  heigth: auto;
`

const Contact = () => (
  <Container>

    <ContactPanel>
      <Backdrop src={bgImg} />
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
  </Container>
);

export default Contact;
