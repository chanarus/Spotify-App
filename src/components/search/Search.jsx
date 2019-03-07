import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";
import { getHashParams } from "../../context";

class Search extends Component {
  state = {
    searchText: "",
    resultCount: 10,
    track: true,
    album: false,
    artist: false,
    playlist: false
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  search = (dispatch, event) => {
    const {
      track,
      album,
      artist,
      playlist,
      searchText,
      resultCount
    } = this.state;
    event.preventDefault();
    let type = "";
    if (track) type += "track,";
    if (album) type += "album,";
    if (artist) type += "artist,";
    if (playlist) type += "playlist,";

    type = type.slice(0, -1);

    axios
      .get(
        `https://api.spotify.com/v1/search?q=${searchText}&type=${type}&market=US&limit=${resultCount}&offset=0`,
        {
          headers: {
            Authorization: `Bearer ${getHashParams().access_token}`
          }
        }
      )
      .then(res => {
        dispatch({
          type: "SEARCH_TRACK",
          payload: res.data.tracks.items
        });

        this.setState({
          searchText: ""
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music" />
                Search
              </h1>
              <form onSubmit={this.search.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    required
                    type="text"
                    className="form-control from-control-lg mb-4"
                    placeholder="Search..."
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.handleChange}
                  />
                  <div className="form-row">
                    <div className="col-9 sm-6">
                      <label className="checkbox-inline pr-4">
                        <input
                          type="checkbox"
                          name="track"
                          checked={this.state.track}
                          onChange={this.handleChange}
                        />
                        Track
                      </label>
                      <label className="checkbox-inline pr-4">
                        <input
                          type="checkbox"
                          name="album"
                          checked={this.state.album}
                          onChange={this.handleChange}
                        />
                        Album
                      </label>
                      <label className="checkbox-inline pr-4">
                        <input
                          type="checkbox"
                          name="artist"
                          checked={this.state.artist}
                          onChange={this.handleChange}
                        />
                        Artist
                      </label>
                      <label className="checkbox-inline pr-4">
                        <input
                          type="checkbox"
                          name="playlist"
                          checked={this.state.playlist}
                          onChange={this.handleChange}
                        />
                        Playlist
                      </label>
                    </div>
                    <div className="col-3 sm-6">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Result Count"
                        name="resultCount"
                        value={this.state.resultCount}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>

                <button
                  className="btn btn-primary btn-lg btn-block mb-5"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
