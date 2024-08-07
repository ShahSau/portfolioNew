import React from 'react';
import styles from './heading.module.scss';
import MyLinks from './components/MyLinks';
import OutlineButton from '../buttons/OutlineButton';
import LocaleSwitcher from '../locale-switcher';

function Heading() {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <div className={styles.heading}>
      <LocaleSwitcher />
      <OutlineButton onClick={() => window.open('/portfolio.pdf')}>
        My resume
      </OutlineButton>
      </div>
    </header>
  );
}

export default Heading;
