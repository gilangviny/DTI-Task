/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../index.css';

const Home = () => {
  const listIcon = ['bx bxl-linkedin', 'bx bxl-github', 'bx bxl-behance'];
  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <h1 className="home__title">
          Hi,
          <br />
          I'am
          <span className="home__title-color">Viny</span>
          <br />
          Gilang Ramadhan
        </h1>
        <a href="#" className="button">
          Contact
        </a>
      </div>

      <div className="home__social">
        {listIcon.map((icon) => {
          return (
            <a href="" className="home__social-icon">
              <i className={`${icon}`} />
            </a>
          );
        })}
      </div>

      <div className="home__img">
        <img src="/Viny Assets.png" alt="" />
      </div>
    </section>
  );
};
export default Home;
