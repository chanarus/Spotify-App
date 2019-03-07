import React, { Component } from "react";
import { Consumer } from "../../context";

class Search extends Component {
  state = {
    searchText: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  search = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music" />
                Search
              </h1>
              <form onSubmit={this.search}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control from-control-lg"
                    placeholder="Search..."
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onChange}
                  />
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
