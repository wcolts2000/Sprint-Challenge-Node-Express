import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

const URL = "http://localhost:8081/api/";

class SingleProject extends Component {
  state = { project: [] };

  componentDidMount = () => {
    const id = this.props.match.params.projectId;
    axios
      .get(`${URL}projects/${id}`)
      .then(({ data }) => this.setState({ project: [data] }))
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.project.length) {
      const {
        name,
        id,
        completed,
        description,
        actions
      } = this.state.project[0];
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >
          <h1>Project Name: {name}</h1>
          <p>Projects Description: {description}</p>
          {actions.map(action => {
            return (
              <div
                key={action.id}
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  marginBottom: "20px"
                }}
              >
                <h3>Actions:</h3>
                <p>Action Description: {action.description}</p>
                <p>Action Notes: {action.notes}</p>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div>Loading Project...</div>;
    }
  }
}

export default withRouter(SingleProject);
