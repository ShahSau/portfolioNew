import React from 'react';
import styles from './heading.module.scss';
import MyLinks from './components/MyLinks';
import OutlineButton from '../buttons/OutlineButton';

function Heading() {
  return (
    <header className={styles.heading}>
      <MyLinks />
      {/* for now just comment this out. add when you have a resume */}
      <OutlineButton onClick={() => window.open('/portfolio.pdf')}>
        My resume
      </OutlineButton>
    </header>
  );
}

export default Heading;
