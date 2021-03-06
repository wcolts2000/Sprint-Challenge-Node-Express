import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const NavBox = styled.div`
  width: 100vw;
  position: fixed;
  background: white;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  padding: 2rem;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.6);
`;

const StyledLink = styled(Link)`
  font-weight: bolder;
  text-decoration: none;
  color: black;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const StyledNavLink = styled(NavLink)`
  margin-left: auto;
  text-decoration: none;
  color: black;
  cursor: pointer;

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
    <NavBox>
      <Nav>
        <StyledLink to="/">
          Getter<Span>Dun</Span>
        </StyledLink>
        <StyledNavLink to="/">Projects</StyledNavLink>
      </Nav>
    </NavBox>
  );
}

export default Navbar;
