import React, { useState, useEffect } from "react";
import "./style.scss";
import PodcastItem from "./../podcastItem/index";

const episodesJson = require("./../../episode.json");

const Podcasts = () => {
  return (
    <div className="episode-list">
      <div className="filter-bar">
        <span>Filter Results: </span>
        <input
          type="text"
          id="episode-filter"
          placeholder="Search..."
          // onChange={onFilterTextChange}
        />
      </div>
      <div className="filter-bar">
        {episodesJson.episodes.map(item => {
          return (
            <PodcastItem
              key={item.id}
              name={item.name}
              episode={item.episode}
              image={item.image}
              duration={item.duration}
              description={item.description}
              size={item.size}
              color={item.color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Podcasts;
