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
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
          {actions.map(action => {
            return (
              <div key={action.id}>
                <p>{action.description}</p>
                <p>{action.notes}</p>
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
