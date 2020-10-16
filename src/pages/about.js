/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../index.css';

function About() {
  return (
    <section className="about section " id="about">
      <h2 className="section-title">About</h2>
      <div className="about__container bd-grid">
        <div className="about__img">
          <img src="/PAS_FOTO.jpg" alt="" />
        </div>

        <div>
          <h2 className="about__subtitle">Viny Gilang Ramadhan</h2>
          <p className="about__text">
            saya adalah seorang mahasiswa semester 7 jurusan Informatika telkom
            university. Berasal dari kota kecil yang berada di provinsi Jawa
            tengah, terkenal dengan Candi Borobudur nya yang megah
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
