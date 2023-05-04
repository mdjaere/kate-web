import React from "react";
import { connect } from "react-redux";
import Contact from "./Contact";

const ContactContainer = props => {
  return <Contact {...props} />;
};

const mapStateToProps = (state, ownProps) => {
  const contactList = state.contactList ? state.contactList : null;

  return {
    contactList: contactList,
    screenWidth: state.screenWidth
  };
};

export default connect(
  mapStateToProps
)(ContactContainer);
