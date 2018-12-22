import React from "react";
import { connect } from "react-redux";
import Paintings from "./Paintings";
import { setAllPaintingsLoaded } from "../store/actions";

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
  const paintingList = state.paintingList
    ? state.paintingList.sort(sortPostsFunction)
    : null;

  return {
    paintingList: paintingList,
    screenWidth: state.screenWidth,
    allPaintingsLoaded: state.allPaintingsLoaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAllPaintingsLoaded: (isLoaded = true) =>
      dispatch(setAllPaintingsLoaded(isLoaded))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaintingsContainer);
