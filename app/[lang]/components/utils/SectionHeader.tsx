import React from 'react';
import styles from './header.module.scss';
import Reveal from './Reveal';

interface Props {
  title: string;
  // eslint-disable-next-line react/require-default-props
  dir?: 'l' | 'r';
}

function SectionHeader({ title, dir = 'r' }: Props) {
  return (
    <div
      className={styles.sectionHeader}
      style={{ flexDirection: dir === 'r' ? 'row' : 'row-reverse' }}
    >
      <div className={styles.line} />
      <h3>
        <Reveal>
          <span className={styles.title}>
            {title}
            <span>.</span>
          </span>
        </Reveal>
      </h3>
    </div>
  );
}

export default SectionHeader;
