import React, { Component } from "react";
import axios from "axios";
import ProjectsList from "./ProjectsList";
import styled from "styled-components";
import { URL } from "./constants.js";

const StyledDiv = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;

  &:hover {
    opacity: 0.8;
  }
`;

const ListCard = styled.div`
  background: #fffff0;
  transform-origin: top;
  width: 100%;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

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
        <StyledDiv>
          {projects.map(project => (
            <ListCard key={project.id}>
              <ProjectsList project={project} />
            </ListCard>
          ))}
        </StyledDiv>
      );
    } else return <div>Loading Projects...</div>;
  }
}
