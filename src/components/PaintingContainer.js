import React from "react";
import { connect } from "react-redux";
import Painting from "./Painting";

const PaintingContainer = props => {
  return <Painting painting={props.painting} />;
};

const mapStateToProps = (state, ownProps) => {

  const painting = state.paintingList
    ? state.paintingList.find(
        item => item.sys.id == ownProps.match.params.id
      )
    : null;

  return { painting: painting, screenWidth: state.screenWidth };

};

export default connect(mapStateToProps)(PaintingContainer);
