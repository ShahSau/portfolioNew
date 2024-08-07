/* eslint-disable max-len */
import { AiOutlineArrowRight } from 'react-icons/ai';
import React from 'react';
import MyLinks from '../../nav/components/MyLinks';
import Reveal from '../../utils/Reveal';
import SectionHeader from '../../utils/SectionHeader';
import styles from './about.module.scss';
import Stats from './Stats';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionary';

const About = async({
  params,
}: {
  params: { lang: Locale }
})=> {
  const dictionary = await getDictionary(params.lang);
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title={dictionary.About.title} dir="l" />
      <div className={styles.about}>
        <div>
          {/*
            */}
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              {dictionary.About.text1}
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              {dictionary.About.text2}
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              {dictionary.About.text3} 
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              {dictionary.About.text4}
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
