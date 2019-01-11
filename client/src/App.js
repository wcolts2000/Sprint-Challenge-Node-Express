import React, { Component } from "react";
import { Route } from "react-router-dom";
import SingleProject from "./components/SingleProject.js";
import ProjectsList from "./components/ProjectsList.js";
import HomeView from "./components/HomeView.js";
import Nav from "./components/Navbar.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" component={HomeView} />
        <Route exact path="/projects" component={ProjectsList} />
        <Route path="/projects/:projectId" component={SingleProject} />
      </div>
    );
  }
}

export default App;
