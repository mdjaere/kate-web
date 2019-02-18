import React from "react";
import { connect } from "react-redux";
import ArtworkList from "./ArtworkList";
import { setAllArtworkLoaded } from "../store/actions";

const ArtworkListContainer = props => {
  return <ArtworkList {...props} />;
};

const mapStateToProps = (state, ownProps) => {
  const artworkList = state.artworkList
    ? state.artworkList
    : null;

  return {
    artworkList: artworkList,
    screenWidth: state.screenWidth,
    allArtworkLoaded: state.allArtworkLoaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAllArtworkLoaded: (isLoaded = true) =>
      dispatch(setAllArtworkLoaded(isLoaded))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtworkListContainer);
