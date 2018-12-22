import React from "react";
import { connect } from "react-redux";
import Project from "./Project";

const ProjectContainer = props => {
  return <Project {...props} />;
};

const mapStateToProps = (state, ownProps) => {
  let project;

  if (state.projectList) {
    project = state.projectList.find(item => {
      return (
        ownProps.match.params.id === item.fields.urlTitle ||
        ownProps.match.params.id === item.sys.id
      );
    });
  }


  return { project: project, screenWidth: state.screenWidth };
};

export default connect(mapStateToProps)(ProjectContainer);
