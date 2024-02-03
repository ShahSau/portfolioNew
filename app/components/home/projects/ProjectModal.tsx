/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AiFillGithub, AiOutlineExport } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import styles from './projectmodal.module.scss';

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  imgSrc: string;
  code: string;
  projectLink: string;
  tech: string[];
  modalContent: JSX.Element;
}

function ProjectModal({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}: Props) {
  useEffect(() => {
    const body = document.querySelector('body');

    if (isOpen) {
      body!.style.overflowY = 'hidden';
    } else {
      body!.style.overflowY = 'scroll';
    }
  }, [isOpen]);

  useEffect(() => {
    const close = (e: { keyCode: number; }) => {
      if (e.keyCode === 27) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  const content = (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={styles.modal} onClick={() => setIsOpen(false)}>
      <button className={styles.closeModalBtn}>
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}
      >
        <img
          className={styles.modalImage}
          src={imgSrc}
          alt={`${title} project.`}
        />
        <div className={styles.modalContent}>
          <h4>{title}</h4>
          <div className={styles.modalTech}>{tech.join(' - ')}</div>

          <div className={styles.suppliedContent}>{modalContent}</div>

          <div className={styles.modalFooter}>
            <p className={styles.linksText}>
              Project Links
              <span>.</span>
            </p>
            <div className={styles.links}>
              <Link target="_blank" rel="nofollow" href={code}>
                <AiFillGithub />
                {' '}
                source code
              </Link>
              {/* {projectLink !== '' && ( */}
              <Link target="_blank" rel="nofollow" href={projectLink}>
                <AiOutlineExport />
                {' '}
                live project
              </Link>
              
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return null;

  // @ts-ignore
  return content;
}

export default ProjectModal;
