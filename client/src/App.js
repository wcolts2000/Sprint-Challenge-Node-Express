import React, { Component } from "react";
import { Route } from "react-router-dom";
import SingleProject from "./components/SingleProject.js";
import ProjectsList from "./components/ProjectsList.js";
import HomeView from "./components/HomeView.js";
import Nav from "./components/Navbar.js";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    font-size: 62.5%;
    width: 100vw;
  }
`;

const Div = styled.div`
  font-size: 1.2rem;
  /* width: 100%; */
`;

const Spacer = styled.div`
  width: 100%;
  height: 90px;
`;

class App extends Component {
  render() {
    return (
      <>
        <Div>
          <Nav />
          <GlobalStyle />
          <Spacer />
          <Route exact path="/" component={HomeView} />
          <Route exact path="/projects" component={ProjectsList} />
          <Route path="/projects/:projectId" component={SingleProject} />
        </Div>
      </>
    );
  }
}

export default App;
