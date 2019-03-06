import React, { Component, Fragment } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import axios from "axios";
import "./App.css";

class App extends Component {
  componentDidMount() {
    axios
      .get(
        "https://api.spotify.com/v1/search?q=slipknot&type=track&market=US&limit=10&offset=5",
        {
          headers: {
            Authorization:
              "BQD0zxefgyjq0WI5NCXFmelmAujU1ZYAUGjaXNpmaa_XzasnxJt4Sbmhbk99oMFeNN7XQ5BniY32pGyhqzTEY4eJfd_SynoK9aH6ehI6iAw0vi8qnqUpCjLS9hvpCdHZDvJUbi9Zt5uq-yZRhNJYaXIvhzSB_ZCyA-54uYCr0zUoajGFz0VZ"
          }
        }
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  render() {
    return (
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
    );
  }
}

export default App;
