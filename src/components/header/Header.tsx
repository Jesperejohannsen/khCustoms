import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#">Option 1</a>
            <ul className="dropdown">
              <li><a href="#">Sub-option 1</a></li>
              <li><a href="#">Sub-option 2</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Option 2</a>
            <ul className="dropdown">
              <li><a href="#">Sub-option 1</a></li>
              <li><a href="#">Sub-option 2</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Option 3</a>
            <ul className="dropdown">
              <li><a href="#">Sub-option 1</a></li>
              <li><a href="#">Sub-option 2</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Option 4</a>
            <ul className="dropdown">
              <li><a href="#">Sub-option 1</a></li>
              <li><a href="#">Sub-option 2</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Option 5</a>
            <ul className="dropdown">
              <li><a href="#">Sub-option 1</a></li>
              <li><a href="#">Sub-option 2</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="search-bar">
        <button onClick={handleSearchClick}>🔍</button>
        {isSearchOpen && <input type="text" placeholder="Search..." />}
      </div>
    </header>
  );
};

export default Header;