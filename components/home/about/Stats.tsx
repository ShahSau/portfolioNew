import styles from "./stats.module.scss";
import { AiFillCode } from "react-icons/ai";
import { HiComputerDesktop } from "react-icons/hi2";
import { Reveal } from "@/components/utils/Reveal";
import { BsFillDatabaseFill } from "react-icons/bs";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Languages</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavascriptScript</span>
            <span className="chip">Python</span>
            <span className="chip">C</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <HiComputerDesktop size="2.4rem" color="var(--brand)" />
            <span>Froentend & Testing</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">HTML5</span>
            <span className="chip">CSS3</span>
            <span className="chip">React</span>
            <span className="chip">Redux</span>
            <span className="chip">TypeScript</span>
            <span className="chip">Angular</span>
            <span className="chip">NextJS</span>
            <span className="chip">TailwindCSS</span>
            <span className="chip">Gatsby</span>
            <span className="chip">Jest</span>
            <span className="chip">Material UI</span>
            <span className="chip">Cypress</span>
            <span className="chip">React Native</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <BsFillDatabaseFill size="2.4rem" color="var(--brand)" />
            <span>Backend & Database</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Node</span>
            <span className="chip">Express</span>
            <span className="chip">Django</span>
            <span className="chip">Redis</span>
            <span className="chip">JWT</span>
            <span className="chip">GraphQL</span>
            <span className="chip">MongoDB</span>
            <span className="chip">PostGres</span>
            <span className="chip">FireBase</span>
            <span className="chip">Redis</span>
            <span className="chip">Prisma</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
