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
`;

function ActionsCard({ action: { description, notes } }) {
  return (
    <Div>
      <H3>Actions:</H3>
      <p>Action Description: {description}</p>
      <p>Action Notes: {notes}</p>
    </Div>
  );
}

export default ActionsCard;
