import React from 'react';
import StandardButton from '../../buttons/StandardButton';
import Reveal from '../../utils/Reveal';
import ParticlesContainer from './ParticlesContainer';
import styles from './hero.module.scss';

function Hero() {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <ParticlesContainer />
        <Reveal>
          <h1 className={styles.title}>
            Hey, I&apos;m Shahriar
            <span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a
            {' '}
            <span>Full Stack Developer</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            Innovative, task-driven experienced fullstack developer  with a passion for turning complex challenges into elegant solutions. With a robust background in both frontend and backend development, I thrive in crafting seamless, user-centric applications, troubleshooting simple/complex issues.
            <br />
            Let&apos;s connect!
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById('contact')?.scrollIntoView()}
          >
            Contact me
          </StandardButton>
        </Reveal>
      </div>

    </section>
  );
}

export default Hero;
