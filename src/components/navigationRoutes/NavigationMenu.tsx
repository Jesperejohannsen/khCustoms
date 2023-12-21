import React from 'react';
import { Link } from 'react-router-dom';


interface MenuItem {
  name: string;
  route: string;
}

interface MenuProps {
  items: MenuItem[];
  isOpen: boolean;
}

const NavigationMenu: React.FC<MenuProps> = ({ items, isOpen }) => (
  <nav>
    <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
      {items.map((item, index) => (
        <li key={index}>
          <Link to={item.route}>{item.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavigationMenu;