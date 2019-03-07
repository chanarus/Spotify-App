import React, { Component, Fragment } from "react";
import { Consumer } from "../../context";
import Track from "../track/Track";
import Spinner from "../Spinner";

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { trackList, heading } = value;
          if (trackList === undefined || trackList.length === 0) {
            return <Spinner />;
          } else {
            return (
              <Fragment>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {trackList.map(track => (
                    <Track key={track.id} track={track} />
                  ))}
                </div>
              </Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Tracks;
