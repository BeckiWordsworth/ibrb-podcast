import React from "react";
import "./style.scss";
import Header from "../header/index";

const PodcastItem = ({
  image,
  episode,
  name,
  color,
  description,
  duration,
  url
}) => {
  return (
    <div className="episode-box" style={{ backgroundColor: `#${color}` }}>
      <div className="episode-image">
        <img src={image} alt="bild" />
      </div>
      <div className="container">
        <div className="episode-name">
          <span>{name}</span>
        </div>
        <div className="episode-number">
          <span>{episode}</span>
        </div>
        <div className="audio-control">
          <audio controls>
            <source src={url} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  );
};

export default PodcastItem;
