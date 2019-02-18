import React from "react";
import { connect } from "react-redux";
import Artwork from "./Artwork";

const ArtworkContainer = props => {
  return <Artwork {...props} />;
};

const mapStateToProps = (state, ownProps) => {
  let artwork;

  if (state.artworkList) {
    artwork = state.artworkList.find(item => {
      return (
        ownProps.match.params.id === item.fields.urlTitle ||
        ownProps.match.params.id === item.sys.id
      );
    });
  }

  return { artwork, screenWidth: state.screenWidth };
};

export default connect(mapStateToProps)(ArtworkContainer);
