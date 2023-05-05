import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const ContentContainer = styled.div`
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

const Contact = props => {
  const contactFields = props.contactList ?
    props.contactList.map(item => {
      const url = item.fields.image.fields.file.url
      return <React.Fragment key={item.sys.id}>
        <Backdrop src={"https:" + url} />
        <ReactMarkdown children={item.fields.text} />
      </React.Fragment>
    }) : null
  return <ContentContainer>
    {contactFields}
  </ContentContainer>

};

export default Contact;
