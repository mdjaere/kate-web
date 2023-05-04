import React from "react";
import { connect } from "react-redux";
import Bio from "./Bio";

const BioContainer = props => {
  return <Bio {...props} />;
};

const mapStateToProps = (state, ownProps) => {
  const bioList = state.bioList ? state.bioList : null;

  return {
    bioList: bioList,
  };
};

export default connect(
  mapStateToProps
)(BioContainer);
