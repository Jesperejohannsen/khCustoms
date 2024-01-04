import { useState } from "react";
import NavigationMenu from "../navigationRoutes/NavigationMenu";
import "./header.css";
import logo from "../../assets/khCustomLogo.png";
import { Link } from "react-router-dom";



const Header: React.FC = () => {
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
      <div className={`logo ${isOpen ? "hidden" : ""}`}>
        <Link to="/">
          <img src={logo} alt="KH Customs" />
        </Link>
      </div>
      <nav className="navbar">
        <div
          className={`burger-menu ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      <NavigationMenu items={menuItems} isOpen={isOpen} toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
};

export default Header;
