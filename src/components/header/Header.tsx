import { useState } from "react";
import NavigationMenu from "../navigationRoutes/NavigationMenu";
import SearchBar from "../../components/searchbar/Searchbar"; // import SearchBar
import "./header.css";
import logo from "../../assets/khCustomLogo.png";

interface HeaderProps {
  homeSectionParagraphs: string[];
}

const Header: React.FC<HeaderProps> = ({ homeSectionParagraphs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: "Om KHCustom", route: "/omKhCustoms" },
    { name: "Vores løsninger", route: "/løsninger" },
    { name: "Toldregler", route: "/toldregler" },
    { name: "Kontakt os", route: "/kontakt" },
  ];

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
      <SearchBar paragraphs={homeSectionParagraphs} />
    </header>
  );
};

export default Header;