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
              Welcome to my digital realm! I&apos;m Shahriar, an experienced Full Stack Developer with a Master's degree in Materials Science from the University of Helsinki. I'm passionate about creating elegant and user-centric digital solutions that leverage cutting-edge technologies and best practices.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            Currently, I'm a Web Engineer at Grundium, where I develop device testing software for portable microscopes, using a sophisticated tech stack that includes React, Next.js, Express, Cypress, TypeScript, Zod, Jenkins, Recoil, and AWS. I also enhance and refine the functionality of our current microscope user software, employing Angular, RxJS, OpenLayers, Express, MongoDB, and Jest. Previously, I worked as a consultant software engineer at Mentura Group Oy and Integrify, implementing software solutions for optimizing network coverage and performance, and collaborating on diverse client projects. 
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            I have a versatile skill set, ranging from crafting pixel-perfect user interfaces to architecting resilient server-side systems. I excel in frontend and backend development, using frameworks and tools such as HTML5, CSS3, Javascript, Python, Django, PostgreSQL, GraphQL, RestAPI, Jest, Cypress, Docker, React Native, Linux, and C. I'm always eager to learn new skills and stay abreast of technological advancements. I believe in the power of clean code, agile methodologies, and collaborative development practices. 
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I am open to new exciting opportunities that align with my passion for coding. If you believe you have an opening that resonates with my interests, let&apos;s connect 🔗.
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              {/* <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div> */}
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
