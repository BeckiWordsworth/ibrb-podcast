import React, { useState, useEffect } from "react";
import "./style.scss";
import PodcastItem from "./../podcastItem/index";
import loadingImage from "../../img/scream.jpeg";

const episodesJson = require("./../../episode.json");

const Podcasts = () => {
  const [filteredText, setFilteredText] = useState("");
  const [loading, setLoading] = useState(false);
  const [podcasts, setPodcasts] = useState([]);
  const [podcastsToShow, setPodcastsToShow] = useState([]);

  useEffect(() => {
    setLoading(true);
    setPodcasts(episodesJson.episodes);
  }, []);

  useEffect(
    podcastsToShow => {
      let newPodcastsToShow = [];

      if (filteredText.length > 0) {
        newPodcastsToShow = podcasts.filter(podcast => {
          return podcast.name
            .toUpperCase()
            .includes(filteredText.toUpperCase());
        });
      } else {
        newPodcastsToShow = podcasts;
      }

      if (podcastsToShow !== newPodcastsToShow) {
        setPodcastsToShow(newPodcastsToShow);
      }
    },
    [podcasts, filteredText]
  );

  const onFilterTextChange = evt => {
    setFilteredText(evt.target.value);
  };

  if (podcastsToShow.length > 0) {
    const episodes = podcastsToShow.map(item => (
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
    ));

    return (
      <div className="episode-list">
        <div className="filter-bar">
          <span>Results: </span>
          <input
            type="text"
            id="episode-filter"
            placeholder="Search..."
            onChange={onFilterTextChange}
          />
        </div>

        <section id="station-items">{episodes}</section>
      </div>
    );
  } else {
    return (
      <div>
        <img className="loadingImage" alt="Loading..." src={loadingImage} />
      </div>
    );
  }
};

//   return (
//     <div className="episode-list">
//       <div className="filter-bar">
//         <span>Filter Results: </span>
//         <input
//           type="text"
//           id="episode-filter"
//           placeholder="Search..."
//           onChange={onFilterTextChange}
//         />
//       </div>
//       <div className="filter-bar">
//       </div>
//       <div>
// <section id="station-items">{episodes}</section>

//  </div>
//     </div>
//   );
// };

export default Podcasts;
