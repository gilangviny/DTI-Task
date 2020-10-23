/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import '../index.css';

const Home = () => {
  const [sureName, setSureName] = useState('Gilang Ramadhan');
  const listIcon = ['bx bxl-linkedin', 'bx bxl-github', 'bx bxl-behance'];

  function handleClickName() {
    setSureName('GILANG RAMADHAN');
  }

  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <h1 className="home__title">
          Hi,
          <br />
          I'am
          <span className="home__title-color"> Viny</span>
          <br />
          {sureName}
        </h1>
        <button className="button" type="button" onClick={handleClickName}>
          Click me
        </button>
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
