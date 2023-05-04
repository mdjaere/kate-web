import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const Biotext = styled.div`
  font-size: 0.7em;
`;

const Bio = (props) => {
  const bioFields = props.bioList ?
    props.bioList.map(item => (
      <React.Fragment key={item.sys.id}>
        <ReactMarkdown children={item.fields.text} />
      </React.Fragment>
    )) : null
  return <Biotext>{bioFields}</Biotext>;
}

export default Bio;