import React from "react";
import { withRouter } from "react-router-dom";

function ProjectsList({
  project: { name, description, completed, id },
  history
}) {
  return (
    <div
      onClick={() => history.push(`/projects/${id}`)}
      style={{ cursor: "pointer" }}
    >
      <p>{name}</p>
      <p style={{ textDecoration: completed ? "line-through" : "none" }}>
        {description}
      </p>
    </div>
  );
}

export default withRouter(ProjectsList);
