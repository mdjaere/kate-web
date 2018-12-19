import React from "react";
import { connect } from "react-redux";
import Project from "./Project";

const ProjectContainer = props => {
  return <Project project={props.project} />;
};

const mapStateToProps = (state, ownProps) => {
  const project = state.projectList
    ? state.projectList.find(
        item => item.fields.urlTitle == ownProps.match.params.id
      )
    : null;

  return { project: project, screenWidth: state.screenWidth };
};

export default connect(mapStateToProps)(ProjectContainer);
