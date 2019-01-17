import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  padding: 1.3rem 2rem;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.6);
`;

const StyledLink = styled(Link)`
  font-weight: bolder;
  text-decoration: none;
  color: black;
  cursor: pointer;
  padding: 0.5rem 1.2rem;
  border-radius: 3.5rem;
  background: transparent;
  border: 2px solid transparent(0, 0, 0, 0.2);

  &:hover {
    opacity: 0.8;
  }
`;

const StyledNavLink = styled(NavLink)`
  margin-left: auto;
  text-decoration: none;
  color: black;
  cursor: pointer;
  padding: 0.5rem 1.2rem;
  border-radius: 3.5rem;
  background: #fffff1;
  border: 2px solid rgba(0, 0, 0, 0.2);

  &:hover {
    opacity: 0.8;
  }
`;

const Span = styled.span`
  font-weight: lighter;
  opacity: 0.8;
`;

function Navbar() {
  return (
      <Nav>
        <StyledLink to="/">
          Getter<Span>Dun</Span>
        </StyledLink>
        <StyledNavLink to="/">Projects</StyledNavLink>
      </Nav>
  );
}

export default Navbar;
