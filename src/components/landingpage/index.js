import React, { useState, useEffect } from "react";
import "./style.scss";

const LandingPage = () => {
  return (
    <div className="homepage">
      <div className="hero">
        <div className="hero-content">
          <h1>I'll be right back: The podcast</h1>
          <p>Something terrifying is about to happen!</p>
        </div>
      </div>

      <section>
        <div className="section-content">
          <h2>More about us!</h2>
          <p>We are Edith and Becki</p>
        </div>
      </section>

      <section>
        <div className="section-content">
          <h2>Something else</h2>
          <p>More content</p>
        </div>
      </section>

      <footer>
        <div className="footer-content">Get in touch with us at .....</div>
      </footer>
    </div>
  );
};

export default LandingPage;
