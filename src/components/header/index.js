import React from "react";
import "./style.scss";

const Header = () => {
  return (
    <header>
      <div className="headerContent">
        <div className="logoContainer">
          <a href="/">
            <img src="/scream.png" alt="Logo" />
          </a>
        </div>
        <div className="siteTitle">
          <a href="/">I'll be right back ...</a>
        </div>
        <nav className="headerLinks">
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/podcasts">Podcasts</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
