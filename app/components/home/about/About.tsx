/* eslint-disable max-len */
import { AiOutlineArrowRight } from 'react-icons/ai';
import React from 'react';
import MyLinks from '../../nav/components/MyLinks';
import Reveal from '../../utils/Reveal';
import SectionHeader from '../../utils/SectionHeader';
import styles from './about.module.scss';
import Stats from './Stats';

function About() {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          {/*
            */}
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Welcome to my digital realm! I&apos;m Shahriar, an accomplished FullStack Developer passionate about transforming complex challenges into elegant solutions. With a robust background in both frontend and backend development, I excel in crafting seamless, user-centric applications. Currently, I am engaged as a developer in the Electronics Manufacturing industry.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              My journey in the tech realm has equipped me with a versatile skill set, ranging from crafting pixel-perfect user interfaces to architecting resilient server-side systems. Whether it&apos;s building intuitive user experiences, optimizing database performance, or orchestrating seamless integrations, I embrace the challenge of creating cohesive and cutting-edge applications.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              My commitment to staying abreast of technological advancements drives me to continuously refine my skills. I firmly believe in the power of clean code, agile methodologies, and collaborative development practices. Let&apos;s connect and explore the myriad possibilities of transforming ideas into tangible, tech-driven realities.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I am open to new exciting opportunities that align with my passion for coding. If you believe you have an opening that resonates with my interests, let&apos;s connect 🔗.
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
}

export default About;
