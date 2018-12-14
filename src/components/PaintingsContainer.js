import React from "react";
import { connect } from "react-redux";
import Paintings from "./Paintings";

const PaintingsContainer = props => {
  return <Paintings {...props} />;
};

const sortPostsFunction = (a, b) => {
  const aIndex = a.fields.displayOrder;
  const bIndex = b.fields.displayOrder;
  const sortValue = bIndex - aIndex;
  return sortValue;
};

const mapStateToProps = (state, ownProps) => {
  return {
    paintingList: state.paintingList
      ? state.paintingList.sort(sortPostsFunction)
      : null,
    screenWidth: state.screenWidth
  };
};

export default connect(mapStateToProps)(PaintingsContainer);
