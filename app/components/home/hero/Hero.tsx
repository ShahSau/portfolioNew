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
            Building Solutions for a Digital Future by bridging the Gap
            Between Frontend Magic and Backend Wizardry.
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
