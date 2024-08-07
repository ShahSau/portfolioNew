
import React from 'react';
import StandardButton from '../../buttons/StandardButton';
import Reveal from '../../utils/Reveal';
import ParticlesContainer from './ParticlesContainer';
import styles from './hero.module.scss';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionary';


const Hero = async({
  params,
}: {
  params: { lang: Locale }
})=> {
  const dictionary = await getDictionary(params.lang);
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <ParticlesContainer />
        <Reveal>
          <h1 className={styles.title}>
            {dictionary.Hero.title}
            <span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            {dictionary.Hero.subtitle1}
            {' '}
            <span>{dictionary.Hero.subtitle2}</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            {dictionary.Hero.about}
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById('contact')?.scrollIntoView()}
          >
            {dictionary.Hero.contact}
          </StandardButton>
        </Reveal>
      </div>

    </section>
  );
}

export default Hero;
