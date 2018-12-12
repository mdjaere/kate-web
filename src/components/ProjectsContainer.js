import React from "react";
import { connect } from "react-redux";
import Projects from "./Projects";

const ProjectsContainer = props => {
  return <Projects projectList={props.projectList} match={props.match} />;
};

const mapStateToProps = (state, ownProps) => {
  return {
    projectList: state.projectList,
    match: ownProps.match
  };
};

export default connect(mapStateToProps)(ProjectsContainer);
