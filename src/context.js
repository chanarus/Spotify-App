import React, { Component } from "react";
import data from "./data.json";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    trackList: [],
    heading: "Top 10 Tracks"
  };

  componentDidMount() {
    console.log(data.tracks.items);
    this.setState({
      trackList: data.tracks.items
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
