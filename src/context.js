import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_TRACK":
      return {
        ...state,
        trackList: action.payload,
        heading: "Search Results"
      };
    default:
      return state;
  }
};

/**
 * Obtains parameters from the hash of the URL
 * @return Object
 */
export const getHashParams = () => {
  let hashParams = {};
  let e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
};

export class Provider extends Component {
  constructor() {
    super();
    const params = getHashParams();
    this.state = {
      trackList: [],
      heading: "Top 10 Tracks",
      loggedIn: params.access_token ? true : false,
      dispatch: action => this.setState(state => reducer(state, action))
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.spotify.com/v1/search?q=metalica&type=track&market=US&limit=10&offset=0",
        {
          headers: {
            Authorization: `Bearer ${getHashParams().access_token}`
          }
        }
      )
      .then(res => {
        this.setState({
          trackList: res.data.tracks.items
        });
      })
      .catch(err => console.log(err));
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
