import React from "react";
import { connect } from "react-redux";
import ProjectList from "./ProjectList";
import { useParams } from "react-router-dom"

const ProjectListContainer = props => {
  return <ProjectList {...props} />;
};

const mapStateToProps = (state, ownProps) => {
  return {
    projectList: state.projectList,
    screenWidth: state.screenWidth
  };
};

export default connect(mapStateToProps)(ProjectListContainer);
