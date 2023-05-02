import React from "react";
import { connect } from "react-redux";
import Artwork from "./Artwork";
import { useParams } from "react-router-dom";

const ArtworkContainer = props => {
  const { id } = useParams()

  let artwork = props.artworkList.find(item => {
    return (
      id === item.fields.urlTitle ||
      id === item.sys.id
    );
  });

  return <Artwork {...props} artwork={artwork} />;
};

const mapStateToProps = (state, ownProps) => {
  return {
    artworkList: state.artworkList || [],
    screenWidth: state.screenWidth
  };
};

export default connect(mapStateToProps)(ArtworkContainer);
