import  { useState } from "react";
import NavigationMenu from "../navigationRoutes/NavigationMenu";
import "./header.css";
import logo from "../../assets/khCustomLogo.png";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Om KHCustom", route: "/about" },
    { name: "Vores løsninger", route: "/services" },
    { name: "Toldregler", route: "/customRules" },
    { name: "Kontakt os", route: "/contact" },
  ];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
     <div className={`logo ${isOpen ? 'hidden' : ''}`}>
      <img src={logo} alt="KH Customs" />
    </div>
    <nav className="navbar">
      <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <NavigationMenu items={menuItems} isOpen={isOpen} />
    </nav>
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Søg her..." 
        value={searchValue} 
        onChange={handleSearchChange} 
      />
    </div>
  </header>
  );
};

export default Header;