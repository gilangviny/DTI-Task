/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Header = () => {
  const ListMenu = ['home', 'about', 'skills', 'work', 'contact'];
  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav__logo">
            Vinny
          </a>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            {ListMenu.map((name) => {
              return (
                <Link to={`/${name}`} key={name}>
                  <li className="nav__item">
                    <a href={`#${name}`} className="nav__link active">
                      {name}
                    </a>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu" />
        </div>
      </nav>
    </header>
  );
};
export default Header;
