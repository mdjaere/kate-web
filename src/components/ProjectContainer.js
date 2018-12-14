import React from "react";
import { connect } from "react-redux";
import Project from "./Project";

const ProjectContainer = props => {
  return <Project project={props.project} />;
};

const mapStateToProps = (state, ownProps) => {
  if (state.projectList) {
    const project = state.projectList.find(
      item => item.fields.urlTitle == ownProps.match.params.id
    );
    return { project: project };
  } else {
    return {project: null};
  }
};

export default connect(mapStateToProps)(ProjectContainer);
