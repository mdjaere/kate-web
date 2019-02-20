import React from "react";
import { connect } from "react-redux";
import ArtworkList from "./ArtworkList";
import { setAllArtworkLoaded, setArtworkToLoad } from "../store/actions";

const ArtworkListContainer = props => {
  return <ArtworkList {...props} />;
};

const mapStateToProps = (state, ownProps) => {
  const artworkList = state.artworkList ? state.artworkList : null;

  return {
    artworkList: artworkList,
    screenWidth: state.screenWidth,
    allArtworkLoaded: state.allArtworkLoaded,
    artworkToLoad: state.artworkToLoad
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAllArtworkLoaded: (isLoaded = true) =>
      dispatch(setAllArtworkLoaded(isLoaded)),
    setArtworkToLoad: number => dispatch(setArtworkToLoad(number))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtworkListContainer);
