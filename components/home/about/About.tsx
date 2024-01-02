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
              Welcome to my digital realm! I'm Shahriar, an accomplished Full Stack Developer with a passion for turning complex challenges into elegant solutions. With a robust background in both frontend and backend development, I thrive in crafting seamless, user-centric applications.
              I am currently working as a developer in the Electronics Manufacturing industry. 
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              My journey in the tech realm has equipped me with a versatile skill set, spanning from crafting pixel-perfect user interfaces to architecting resilient server-side systems. Whether it's building intuitive user experiences, optimizing database performance, or orchestrating seamless integrations, I relish the challenge of creating cohesive and cutting-edge applications.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            My commitment to staying on the pulse of technological advancements drives me to continuously refine my skills. I'm a firm believer in the power of clean code, agile methodologies, and collaborative development practices. Let's connect and explore the endless possibilities of transforming ideas into tangible, tech-driven realities.
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
