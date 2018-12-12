import React from "react";
import { connect } from "react-redux";
import Paintings from "./Paintings";

const PaintingsContainer = props => {
  return <Paintings paintingList={props.paintingList} />;
};

const mapStateToProps = (state, ownProps) => {
  return {
    paintingList: state.paintingList
  };
};

export default connect(mapStateToProps)(PaintingsContainer);
