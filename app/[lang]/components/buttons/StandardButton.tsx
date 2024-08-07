import React, { MouseEventHandler } from 'react';
import styles from './standardbutton.module.scss';

interface Props {
  children: string | JSX.Element;
  // eslint-disable-next-line react/require-default-props
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function StandardButton({ children, onClick }: Props) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button onClick={onClick} className={styles.standardButton}>
      {children}
    </button>
  );
}

export default StandardButton;
