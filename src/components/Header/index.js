import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <header className="header__main">
      <nav className="header__nav">
        <ul className='header__list'>
          <li><Link to="/" className="item__nav">Accueil</Link></li>
          <li><Link to="/register" className="item__nav">S'inscrire</Link></li>
          <li><Link to="/news" className="item__nav">Actualités</Link></li>
          <li><Link to="/contact" className="item__nav">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
