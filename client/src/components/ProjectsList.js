import React from "react";
import { withRouter } from "react-router-dom";

function ProjectsList({
  project: { name, description, completed, id },
  history
}) {
  return (
    <div
      onClick={() => history.push(`/projects/${id}`)}
      style={{
        cursor: "pointer",
        border: "1px solid black",
        padding: "10px",
        marginBottom: "20px"
      }}
    >
      <h2 style={{ paddingBottom: "10px", borderBottom: "1px dashed black" }}>
        {name}
      </h2>
      <p style={{ textDecoration: completed ? "line-through" : "none" }}>
        {description}
      </p>
    </div>
  );
}

export default withRouter(ProjectsList);
