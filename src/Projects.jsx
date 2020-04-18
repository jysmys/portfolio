import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";

class Projects extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    axios.get("./src/data/project.json").then((response) => {
      this.setState({
        projects: response.data,
      });
    });
  }

  render() {
    const projects = this.state.projects;
    let projectsList;

    if (projects.length > 0) {
      projectsList = projects.map((project) => {
        return (
          <div id={"project-" + project.id} key={project.id}>
            <ProjectCard project={project} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container">
        {/* <div className="ui stackable two column grid"> */}
        {/* <div className="column">
            <UndrawDashBoard primaryColor="#12283a" height="200px" />
          </div> */}

        <h2 className="ui header" id="projects-header">
          My Projects
        </h2>

        {/* <div className="column">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              quod ab doloremque eaque. Consequatur temporibus, quos enim, eaque
              nemo ad iusto sequi modi totam qui veniam? Ab asperiores inventore
              distinctio.
            </p>
          </div> */}
        {/* </div> */}
        {/* <div className="ui stackable four column grid">{projectsList}</div> */}
        <div className="projectlist">{projectsList}</div>
      </div>
    );
  }
}
export default Projects;
