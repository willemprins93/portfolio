import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <nav className="nav-bar">
            <span>
              <NavLink
                activeStyle={{
                  borderBottom: "2px solid #4e9191",
                  color: "#4e9191",
                }}
                className="nav-item"
                exact
                to="/"
              >
                Home
              </NavLink>
            </span>
            <span>
              <NavLink
                activeStyle={{
                  borderBottom: "2px solid #4e9191",
                  color: "#4e9191",
                }}
                className="nav-item"
                exact
                to="/projects"
              >
                Projects
              </NavLink>
            </span>
            <span>
              <NavLink
                activeStyle={{
                  borderBottom: "2px solid #4e9191",
                  color: "#4e9191",
                }}
                className="nav-item"
                exact
                to="/about"
              >
                About
              </NavLink>
            </span>
            <span>
              <NavLink
                activeStyle={{
                  borderBottom: "2px solid #4e9191",
                  color: "#4e9191",
                }}
                className="nav-item"
                exact
                to="/contact"
              >
                Contact
              </NavLink>
            </span>
          </nav>
          <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
