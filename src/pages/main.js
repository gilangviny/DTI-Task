/* eslint-disable import/extensions */
import React from 'react';
import '../index.css';
import Home from './home.js';
import About from './about.js';
import Skills from './skills.js';
import Work from './work.js';
import Contact from './contact.js';

function Main() {
  const about = {
    title: 'About',
    subTitle: "I'am Viny gilang ramadhan",
    text:
      'saya adalah seorang mahasiswa semester 7 jurusan Informatika telkom university. Berasal dari kota kecil yang berada di provinsi Jawa tengah, terkenal dengan Candi Borobudur nya yang megah',
  };

  const skills = {
    title: 'Skills',
    subTitle: 'Profesional Skills',
    text: 'Dibawah ini adalah beberapa skills set yang saya miliki.',
  };

  return (
    <main className="l-main">
      <Home />
      <About about={about} />
      <Skills skills={skills} />
      <Work />
      <Contact />
    </main>
  );
}

export default Main;
