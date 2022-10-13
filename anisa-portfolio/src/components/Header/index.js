import React from "react";
import "./style.css";

const Header = ({ top }) => {
  return (
    <header style={top} className="App-header">
      <a className="logo" href="#" target="_blank" rel="noopener noreferrer">
        Anisa Talks Tech
      </a>
      <ul>
        <li>
          <a href="#" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="/css">Css Library</a>
        </li>
        <li>
          <a href="#">Work</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
