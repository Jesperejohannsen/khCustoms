import  { useState } from "react";
import NavigationMenu from "../navigationRoutes/NavigationMenu";
import "./header.css";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const menuItems = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Contact", route: "/contact" },
    { name: "Products", route: "/products" },
    { name: "Services", route: "/services" },
    // Add more items here
  ];

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="header">
      <div className="logo">KH Customs</div>
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
