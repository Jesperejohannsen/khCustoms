import React from 'react';
import { NavLink } from 'react-router-dom';

interface MenuItem {
  name: string;
  route: string;
}

interface MenuProps {
  items: MenuItem[];
  isOpen: boolean;
  toggleMenu: () => void;
}

const NavigationMenu: React.FC<MenuProps> = ({ items, isOpen, toggleMenu }) => (
  <nav>
 <ul className={`menu ${isOpen ? "open" : ""}`}>
    {items.map((item, index) => (
      <li key={index}>
        <NavLink 
          to={item.route} 
          activeClassName="active-link"
          onClick={toggleMenu} 
        >
          {item.name}
        </NavLink>
      </li>
    ))}
  </ul>
  </nav>
);

export default NavigationMenu;