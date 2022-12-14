import React from 'react';
import { Link } from 'react-router-dom';
import c from './Header.module.css';

const Header = () => {
  return (
    <div data-testid="header" className={c.header}>
      <Link data-testid="encyclopedia-link" to="/Encyclopedia" className={c.pagesName}>
        Encyclopedia
      </Link>
      <Link data-testid="about-link" to="/AboutUs" className={c.pagesName}>
        About me
      </Link>
    </div>
  );
};

export default Header;
