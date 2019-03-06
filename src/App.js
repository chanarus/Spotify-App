import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import axios from "axios";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
