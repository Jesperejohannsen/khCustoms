import React, { useState } from "react";
import NavigationMenu from './NavigationMen';
import "./Header.css";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const menuItems = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
    // Add more items here
  ];

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav className="navbar">
      <NavigationMenu items={menuItems} />
      </nav>
      <div className="search-bar">
        <button onClick={handleSearchClick}>🔍</button>
        {isSearchOpen && <input type="text" placeholder="Search..." />}
      </div>
    </header>
  );
};

export default Header;