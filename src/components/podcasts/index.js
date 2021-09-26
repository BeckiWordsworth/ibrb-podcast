import React, { useState, useEffect } from "react";
import "./style.scss";

const Podcasts = () => {
  return (
    <div className="homepage">
      <div className="hero">
        <div className="hero-content">
          <h1>I'll be right back Podcast</h1>
          <p>Something terifying!</p>
        </div>
      </div>

      <section>
        <div className="section-content">
          <h2>Something about our podcast</h2>
          <p>We are Edith and Becki</p>
        </div>
      </section>

      <section>
        <div className="section-content">
          <h2>Learn anywhere</h2>
          <p>
            Make your breaks and commutes more productive by learning through
            your phone aswell. Lessons are quick and can be played anywhere.
          </p>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          Learning Physics the fun way with DuoPhysics.
        </div>
      </footer>
    </div>
  );
};

export default Podcasts;
