import React from "react";
import { connect } from "react-redux";
import Painting from "./Painting";

const PaintingContainer = props => {
  return <Painting {...props} />;
};

const mapStateToProps = (state, ownProps) => {
  let painting;

  if (state.paintingList) {
    painting = state.paintingList.find(item => {
      return (
        ownProps.match.params.id === item.fields.urlTitle ||
        ownProps.match.params.id === item.sys.id
      );
    });
  }

  return { painting: painting, screenWidth: state.screenWidth };
};

export default connect(mapStateToProps)(PaintingContainer);
