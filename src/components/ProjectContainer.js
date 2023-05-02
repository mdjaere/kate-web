import React from "react";
import { connect } from "react-redux";
import Project from "./Project";
import { useParams } from "react-router-dom";

const ProjectContainer = props => {
  let { id } = useParams()

  let project = props.projectList.find(item => {
    return (
      id === item.fields.urlTitle ||
      id === item.sys.id
    );
  });

  return <Project {...props} project={project} />;
};

const mapStateToProps = (state, ownProps) => {
  return {
    projectList: state.projectList || [],
    screenWidth: state.screenWidth
  };
};

export default connect(mapStateToProps)(ProjectContainer);
