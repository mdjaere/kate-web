import React from "react";
import styled from "styled-components";
import bgImg from "../assets/7_background.jpg";

const Container = styled.div`
  font-size: 0.7em;
`;

const ContactPanel = styled.div``;

const TextPanel = styled.div`
`;

const NewsPanel = styled.div``;

const Backdrop = styled.img`
  z-index: -1;
  width: 100%;
  heigth: auto;
`;

const Contact = () => (
  <Container>
    <Backdrop src={bgImg} />
    <TextPanel>
      <ContactPanel>
        <p>
          Contact <br />
          katewarner@gmail.com
        </p>
      </ContactPanel>
      <NewsPanel>
        <p>
          Latest projects <br />
          October 2018
          <br />
          <a href="https://themothershipproject.wordpress.com">
            The Mothership Project Satellite Residency
          </a>{" "}
          <br />
          <a href="https://cowhousestudios.com/satellite-residency-kate-warner-james-o-haodha/">
            Cow House Studios, Wexford, Ireland
          </a>{" "}
        </p>
      </NewsPanel>
    </TextPanel>
  </Container>
);

export default Contact;
