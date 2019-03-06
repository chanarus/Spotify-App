import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    trackList: [],
    heading: "Top 10 Tracks"
  };
  render() {
    return <Context value={this.state}>{this.props.children}</Context>;
  }
}

export const Consumer = Context.Consumer;
