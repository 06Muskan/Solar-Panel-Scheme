// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/apply">Apply</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
