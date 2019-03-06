import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    trackList: [],
    heading: "Top 10 Tracks"
  };

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
    return <Context value={this.state}>{this.props.children}</Context>;
  }
}

export const Consumer = Context.Consumer;
