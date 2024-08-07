import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';
import styles from './headinglinks.module.scss';

function MyLinks() {
  return (
    <div className={styles.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link href="https://www.linkedin.com/in/shahriar-saurov/" target="_blank" rel="nofollow">
          <AiFillLinkedin size="2.8rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href="https://github.com/ShahSau" target="_blank" rel="nofollow">
          <AiFillGithub size="2.8rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="https://twitter.com/saurov_shahriar" target="_blank" rel="nofollow">
          <AiFillTwitterCircle size="2.8rem" />
        </Link>
      </motion.span>
    </div>
  );
}

export default MyLinks;
