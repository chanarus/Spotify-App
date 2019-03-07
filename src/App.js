import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider, Consumer } from "./context";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import TrackInfo from "./components/trackInfo/TrackInfo";
import Login from "./components/login/Login";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Fragment>
            <Navbar />
            <Consumer>
              {value => {
                if (value.loggedIn) {
                  return (
                    <div className="container">
                      <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/track/:id" component={TrackInfo} />
                      </Switch>
                    </div>
                  );
                } else {
                  return <Login />;
                }
              }}
            </Consumer>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
