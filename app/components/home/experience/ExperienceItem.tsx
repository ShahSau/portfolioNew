import React from 'react';
import Reveal from '../../utils/Reveal';
import styles from './experience.module.scss';

interface Props {
  title: string;
  position: string;
  time: string;
  location: string;
  // eslint-disable-next-line react/require-default-props
  description?: string;
  tech: string[];
  description2?: string;
  description3?: string;
}

function ExperienceItem({
  title,
  position,
  time,
  location,
  description,
  tech,
  description2="",
  description3="",
}: Props) {
  return (
    <div className={styles.experience}>
      <div className={styles.heading}>
        <Reveal>
          <span className={styles.title}>{title}</span>
        </Reveal>
        <Reveal>
          <span>{time}</span>
        </Reveal>
      </div>

      <div className={styles.heading}>
        <Reveal>
          <span className={styles.position}>{position}</span>
        </Reveal>
        <Reveal>
          <span>{location}</span>
        </Reveal>
      </div>
      <Reveal>
        <p className={styles.description}>{description}</p>
      </Reveal>
      {description2 && 
      <Reveal>
         <p className={styles.description}>{description2}</p>
      </Reveal>
      }
      {description3 && 
      <Reveal>
        <p className={styles.description}>{description3}</p>
      </Reveal>
      }
      <Reveal>
        <div className={styles.tech}>
          {tech.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

export default ExperienceItem;
