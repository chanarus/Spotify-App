import React from "react";
import { Link } from "react-router-dom";

const Track = props => {
  const { album, name, popularity, artists, id } = props.track;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{name}</h5>
          <p className="card-text">
            <strong>Artist(s)</strong>:{" "}
            {artists.map(artist => (
              <span key={artist.id}>{artist.name}, </span>
            ))}
            <br />
            <strong>
              <i className="fas fa-compact-disc" />
              Album
            </strong>
            : {album.name}
            <br />
            <strong>
              <i className="fas fa-star-half-alt" />
              Popularity
            </strong>
            : {popularity}
          </p>
          <Link to={`track/${id}`} className="btn btn-dark btn-block">
            <i className="fas fa-chevron-right" /> More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
