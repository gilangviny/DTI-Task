/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../index.css';

function Skills(props) {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle"> Profesional Skills </h2>
          <p className="skills__text">
            Dibawah ini adalah beberapa skills set yang saya miliki.
          </p>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-html5 skills__icon" />
              <span className="skills__name">HTML5</span>
            </div>
            <div className="skills__bar skills__html" />
            <div>
              <span className="skills__percentage">85%</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-css3 skills__icon" />
              <span className="skills__name">CSS3</span>
            </div>
            <div className="skills__bar skills__css" />
            <div>
              <span className="skills__percentage">70%</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-javascript skills__icon" />
              <span className="skills__name">JAVASCRIPT</span>
            </div>
            <div className="skills__bar skills__js" />
            <div>
              <span className="skills__percentage">55%</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxs-paint skills__icon" />
              <span className="skills__name">UX/UI</span>
            </div>
            <div className="skills__bar skills__ux" />
            <div>
              <span className="skills__percentage">70%</span>
            </div>
          </div>
        </div>

        <div>
          <img src="/work3.jpg" alt="" className="skills__img" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
