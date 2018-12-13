import React from "react";
import { connect } from "react-redux";
import Projects from "./Projects";
// import { setActiveProject } from "../store/actions";

const ProjectsContainer = props => {
  return (
    <Projects
      projectList={props.projectList}
      match={props.match}
      setActiveProject={props.setActiveProject}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    projectList: state.projectList,
    match: ownProps.match
  };
};

// const mapDispatchToProps = {
//   setActiveProject: setActiveProject
// };

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(ProjectsContainer);
