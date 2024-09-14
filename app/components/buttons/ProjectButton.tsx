import React, { MouseEventHandler } from 'react';
import styles from './projectbutton.module.scss';

interface Props {
  children: string | JSX.Element;
  // eslint-disable-next-line react/require-default-props
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function ProjectButton({ children, onClick }: Props) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button onClick={onClick} className={styles.projectButton}>
      {children}
    </button>
  );
}

export default ProjectButton;
