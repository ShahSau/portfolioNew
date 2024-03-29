'use client';

import React from 'react';
import SideBar from './components/nav/SideBar';
import Heading from './components/nav/Heading';
import Hero from './components/home/hero/Hero';
import About from './components/home/about/About';
import Experience from './components/home/experience/Experience';
import Projects from './components/home/projects/Projects';
import Contact from './components/home/contact/Contact';
import styles from './home.module.scss';


function Home() {
  return (
    <div className={styles.home}>
      <SideBar />
      <main>
        <Heading />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <div
          style={{
            height: '200px',
            background:
                'linear-gradient(180deg, var(--background), var(--background-dark))',
          }}
        />
      </main>
    </div>
  );
}

export default Home;
