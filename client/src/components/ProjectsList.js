import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  cursor: pointer;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 20px;
`;

const H2 = styled.h2`
  padding-bottom: 10px;
  border-bottom: 1px dashed black;
`;

const P = styled.p`
  text-decoration: ${props => (props.completed ? "line-through" : "none")};
`;

function ProjectsList({
  project: { name, description, completed, id },
  history
}) {
  return (
    <Div onClick={() => history.push(`/projects/${id}`)}>
      <H2>{name}</H2>
      <P completed={completed}>{description}</P>
    </Div>
  );
}

export default withRouter(ProjectsList);
