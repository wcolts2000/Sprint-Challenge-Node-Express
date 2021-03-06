import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import ActionsCard from "./ActionsCard";
import { URL } from "./constants.js";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const H1 = styled.h1`
  text-decoration: ${props => (props.completed ? "line-through" : "none")};
`;

class SingleProject extends Component {
  state = { project: [] };

  componentDidMount = () => {
    this.fetchProject();
  };

  // componentDidUpdate = (prevProps, prevState) => {
  //   if(prevState.)
  // }

  fetchProject = () => {
    const id = this.props.match.params.projectId;
    axios
      .get(`${URL}projects/${id}`)
      .then(({ data }) => this.setState({ project: [data] }))
      .catch(err => console.log(err));
  };

  deleteAction = id => {
    axios
      .delete(`${URL}actions/${id}`)
      .then(({ data }) => {
        this.fetchProject();
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.project.length) {
      const { name, completed, description, actions } = this.state.project[0];
      return (
        <Div>
          <H1 completed={completed}>Project Name: {name}</H1>
          <p>Projects Description: {description}</p>
          {actions.map((action, _, arr) => (
            <ActionsCard
              key={action.id}
              numberLeft={arr.length}
              action={action}
              deleteAction={this.deleteAction}
            />
          ))}
        </Div>
      );
    } else {
      return <div>Loading Project...</div>;
    }
  }
}

export default withRouter(SingleProject);
