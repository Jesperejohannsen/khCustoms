import React from 'react';
import { NavLink } from 'react-router-dom';

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
          <NavLink to={item.route}>{item.name}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavigationMenu;