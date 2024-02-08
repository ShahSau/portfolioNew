import emailjs from 'emailjs-com';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import React, { useState } from 'react';
import Reveal from '../../utils/Reveal';
import styles from './contact.module.scss';

function Contact() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const sendEmail = (e: { preventDefault: () => void; target: any; }) => {
    e.preventDefault();
    if (e.target.name.value !== '' && e.target.email.value !== '' && e.target.subject.value !== '' && e.target.message.value !== '') {
      emailjs
        .sendForm(
          'service_dxkidye',
          'template_sndsd7q',
          e.target,
          'user_mWLTYsv6XyFsKZpPyXJBc',
        )
        .then(
          () => {
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 5000);
          },
          () => {
            setError(true);
            setErrorMsg('Sorry, something went wrong. Please try again');
            setTimeout(() => {
              setError(false);
              setErrorMsg('');
            }, 5000);
          },
        );
      e.target.reset();
    } else {
      setError(true);
      setErrorMsg('Please fill all the fields');
      setTimeout(
        () => {
          setError(false);
          setErrorMsg('');
        },
        5000,
      );
    }
  };
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact
            <span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Shoot me an email if you want to connect! You can also find me on
            {' '}
            <Link
              href="https://www.linkedin.com/in/shahriar-saurov/"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>
            {' '}
            or
            {' '}
            <Link href="https://twitter.com/saurov_shahriar" target="_blank" rel="nofollow">
              Twitter
            </Link>
            {' '}
            if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width="100%">
          <div className={styles.formFirst}>
            <form
              className={styles.formS}
              onSubmit={sendEmail}
            >
              <div className={styles.formInput}>
                <input type="text" placeholder="name" id="name" name="name" className={styles.inputS} />
                <input type="text" placeholder="email" id="email" name="email" className={styles.inputS} />
              </div>
              <input type="text" placeholder="subject" id="subject" name="subject" className={styles.inputS} />
              <textarea placeholder="message" className={styles.textArea} id="textarea" name="message" />
              <button className={styles.buttonS} type="submit">
                <span>
                  Let&apos;s talk
                </span>
                <BsArrowRight />
              </button>
            </form>
          </div>
        </Reveal>
        {success && (
        <div className={styles.success}>
          <p>Thnak you. I got your message and will get back to you soon.</p>
        </div>
        )}
        {error && (
        <div className={styles.error}>
          <p>{errorMsg}</p>
        </div>
        )}
      </div>

    </section>

  );
}

export default Contact;
