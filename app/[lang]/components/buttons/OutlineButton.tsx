import React, { MouseEventHandler } from 'react';
import styles from './outlinebutton.module.scss';

interface Props {
  children: string | JSX.Element;
  // eslint-disable-next-line react/require-default-props
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function OutlineButton({ children, onClick }: Props) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button onClick={onClick} className={styles.outlineButton}>
      {children}
    </button>
  );
}

export default OutlineButton;
