import React from "react";
import { Link } from "react-router-dom";
import "./Track.css";

const Track = props => {
  const { album, name, popularity, artists, id } = props.track;
  const imgSrc = props.track.album.images[1].url;
  console.log(props.track.album.images[1].url);
  return (
    <div className="col-md-4 col-lg-3 track">
      <div className="track-content">
        <div className="album-art">
          <img src={imgSrc} alt="album-art" />
        </div>
        <div className="track-info">
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
            <Link to={`track/${id}`} className="btn btn-outline-success btn-sm">
              <i className="fas fa-chevron-right" /> More Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
