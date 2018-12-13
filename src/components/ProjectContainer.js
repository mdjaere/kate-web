import React from "react";
import { connect } from "react-redux";
import Project from "./Project";

const ProjectContainer = props => {
  return <Project project={props.project} />;
};

const mapStateToProps = (state, ownProps) => {
  const project = state.projectList.items.find(
    item => item.fields.urlTitle == ownProps.match.params.id
  );
  return { project: project };
};

export default connect(mapStateToProps)(ProjectContainer);
