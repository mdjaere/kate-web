import React from "react";
import { connect } from "react-redux";
import Projects from "./Projects";

const ProjectsContainer = props => {
  return <Projects {...props} />;
};

const mapStateToProps = (state, ownProps) => {
  return {
    projectList: state.projectList,
    screenWidth: state.screenWidth
  };
};

export default connect(mapStateToProps)(ProjectsContainer);
