import React from "react";
import styled from "styled-components";

const Div = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 20px;
`;

const H3 = styled.h3`
  border-bottom: 1px dashed black;
  padding-bottom: 10px;
  position: relative;
`;

const Span = styled.span`
  position: absolute;
  top: 0;
  cursor: pointer;
  right: 10px;
  color: darkred;
  font-weight: bolder;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.5);
    color: red;
  }
`;

function ActionsCard({
  action: { description, notes, id },
  deleteAction,
  numberLeft
}) {
  return (
    <Div>
      <H3>
        Actions Left: {numberLeft}{" "}
        <Span onClick={() => deleteAction(id)}>X</Span>
      </H3>
      <p>Action Description: {description}</p>
      <p>Action Notes: {notes}</p>
    </Div>
  );
}

export default ActionsCard;
