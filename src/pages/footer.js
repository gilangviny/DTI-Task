/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../index.css';

const Footer = () => {
  const listIcons = ['bx bxl-facebook', 'bx bxl-instagram', 'bx bxl-twitter'];
  return (
    <footer className="footer">
      <p className="footer__title">Vinny</p>
      <div className="footer__social">
        {listIcons.map((icon) => {
          return (
            <a href="#" className="footer__icon">
              <i className={`${icon}`} />
            </a>
          );
        })}
      </div>
      <p>&#169; 2020 copyright all right reserved</p>
    </footer>
  );
};

export default Footer;
