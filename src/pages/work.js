import React from 'react';
import '../index.css';

const Work = () => {
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Work</h2>

      <div className="work__container bd-grid">
        <div className="work__img">
          <img src="/work1.jpg" alt="" />
        </div>
        <div className="work__img">
          <img src="/work2.jpg" alt="" />
        </div>
        <div className="work__img">
          <img src="/work3.jpg" alt="" />
        </div>
        <div className="work__img">
          <img src="/work4.jpg" alt="" />
        </div>
        <div className="work__img">
          <img src="/work5.jpg" alt="" />
        </div>
        <div className="work__img">
          <img src="/work6.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};
export default Work;
