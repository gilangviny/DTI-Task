/* eslint-disable no-use-before-define */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from 'react';
import '../index.css';

const Home = () => {
  const listIcon = ['bx bxl-linkedin', 'bx bxl-github', 'bx bxl-behance'];
  const [sureName, setSureName] = useState('Gilang Ramadhan');

  function handleClickName() {
    setSureName('GILANG RAMADHAN');
  }

  const themes = {
    light: {
      background: '#6a097d',
      foreground: '#f1d4d4',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };
  const ThemeContext = React.createContext(themes.light);

  function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
      <button
        style={{ background: theme.background, color: theme.foreground }}
        className="button"
        type="button"
        onClick={handleClickName}
      >
        Style by Context, Click to Change
      </button>
    );
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
        <ThemeContext.Provider value={themes.light}>
          <ThemedButton />
        </ThemeContext.Provider>
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
