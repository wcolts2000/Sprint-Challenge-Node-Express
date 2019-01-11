import React, { Component } from "react";
import axios from "axios";
import ProjectsList from "./ProjectsList";

const URL = "http://localhost:8081/api/";

export default class HomeView extends Component {
  state = { projects: [] };

  componentDidMount = () => {
    axios
      .get(`${URL}projects`)
      .then(({ data }) => this.setState({ projects: data }))
      .catch(err => console.log(err));
  };

  render() {
    const { projects } = this.state;
    if (projects.length) {
      return (
        <div
          style={{
            padding: "20px",
            width: "100%",
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >
          {projects.map(project => (
            <ProjectsList key={project.id} project={project} />
          ))}
        </div>
      );
    } else return <div>Loading Projects...</div>;
  }
}
