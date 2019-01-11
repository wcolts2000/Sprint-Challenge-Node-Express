import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", padding: "10px" }}>
      <Link
        to="/"
        style={{
          fontWeight: "bold",
          textDecoration: "none",
          color: "black",
          cursor: "pointer"
        }}
      >
        Getter<span style={{ fontWeight: "lighter", opacity: 0.8 }}>Dun</span>
      </Link>
      <NavLink
        to="/"
        style={{
          marginLeft: "auto",
          textDecoration: "none",
          color: "black",
          cursor: "pointer"
        }}
      >
        Projects List
      </NavLink>
    </nav>
  );
}

export default Navbar;
