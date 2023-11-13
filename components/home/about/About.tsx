import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          {/* 
            */}
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Shahriar, if you haven&apos;t already gathered that by
              now. I&apos;m a physicists turned software engineer with a passion for building scalable robust web applications.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            I am experienced in JavaScript, Python, React, NextJs, Gatsby, Angular, Nodejs, Expressjs, Django, and MongoDB. 
            I am currently working as a developer in the Electronics Manufacturing industry. 
            Strong understanding of database design and API integration.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            I am committed to writing clean, efficient, 
            and maintainable code. Open to collaboration and always learning something new. 
            I have strong interpersonal skills and can handle pressure and meet deadlines.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m passively looking for new positions where I can merge my
              love for code. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect
              🔗
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
};
