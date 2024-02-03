/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
import React from 'react';
import SectionHeader from '../../utils/SectionHeader';
import Project from './Project';
import styles from './projects.module.scss';

const projects = [
  {
    title: 'gameboy',
    imgSrc: '/project-imgs/gameboy.png',
    code: 'https://github.com/ShahSau/gameboy',
    projectLink: 'https://gameboy-ruddy.vercel.app/',
    tech: ['React', 'NextJS', 'RestApi', 'ChakraUI'],
    description:
      'A website to get details of free to play games. Designed and built on my own.',
    modalContent: (
      <>
        <p>
          Gameboy is a website showcasing details of free to play games.
          This app is my baby, designed and built on my own.
        </p>
        <p>
          The tech stack is based on top of React and NextJS, with ChakraUI for styling.
          The data is provided by RapidAPI and is fetched using axios.
        </p>
        <p>
          The site is hosted on Vercel.
        </p>

      </>
    ),
  },
  {
    title: 'Alpha Core',
    imgSrc: '/project-imgs/alphacore.png',
    code: 'https://github.com/ShahSau/alphaCore',
    projectLink: 'https://alpha-core.vercel.app/',
    tech: ['React', 'TypeScript', 'NextJS', 'TailwindCSS','Zustand', 'Prisma', 'OpenAI', 'Axios', 'JSON', 'Zod', 'Stripe', 'Clerk', 'Replicate', 'ESlint'],
    description:
      "A SASS platform depecting the power of AI. This platform uses OpenAI's GPT-3 and other AI models to generate contents.",
    modalContent: (
      <>
        <p>
        Elevate your platform to new heights with our comprehensive suite of AI-powered features and seamless payment integration
        </p>
        <ul>
          <li>Generate unique and personalized music compositions using advanced AI algorithms, catering to diverse musical preferences.</li>
          <li>Automatically generate high-quality images and videos based on user inputs or predefined templates, simplifying content creation.</li>
          <li>Convert natural language queries into SQL queries, streamlining database interactions and enhancing user productivity.</li>
          <li>Summarize lengthy text documents and correct grammar errors to improve readability and coherence.</li>
          <li>Automatically generate code snippets based on specific requirements or programming tasks, accelerating development workflows.</li>
          <li>Generate concise summaries of large textual documents or articles, enabling users to extract key insights efficiently.</li>
          <li>Plan educational lessons and generate interview questions tailored to specific topics or subjects.</li>
          <li>Create professional-grade logos, customized email templates, and digital portraits effortlessly.</li>
          <li>Facilitate convenient periodic payments for subscriptions or services through Stripe, ensuring reliability and security.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Primeproperties',
    imgSrc: '/project-imgs/primeproperties.png',
    code: 'https://github.com/ShahSau/prime-properties',
    projectLink: 'https://prime-properties.onrender.com',
    tech: ['Javascript', 'React', 'ExpressJS', 'NodeJS', 'TailwindCss', 'Firebase', 'Redux Thunk', 'JSON Web Token (JWT)', 'i18next', 'Framer motion', 'MongoDB', 'Swiper', 'JSON', 'EsLint', 'Cloudinary'],
    description:
      'Elevated User Experience and Robust Security: A Feature-Packed MERN app with Multilingual Support, JWT Authentication, and Role-Based Authorization ',
    modalContent: (
      <>
        <p>
          Enhanced User Experience and Secure Authentication with Multi-Language Support, JWT, Firebase, and Advanced UI Animations
        </p>
        <ul>
          <li>
            Seamlessly switch between English, German, and Finnish to provide users with a personalized and comfortable experience in their preferred language.
          </li>
          <li>
            Ensure robust security with JSON Web Token (JWT) authentication and Firebase. Safeguard user data and transactions with state-of-the-art encryption and secure access control. and Firebase.
          </li>
          <li>
            Streamline user onboarding with the convenience of Google Login. Enhance user adoption by simplifying the registration process and improving overall accessibility.
          </li>
          <li>
            Optimize the efficiency of your application with Redux, a powerful state management tool. Centralize and manage application state for smoother user interactions.
          </li>
          <li>
            Allow users to curate their personalized experience by creating and managing a favorites list.
          </li>
          <li>
            Implement a secure and granular access control system based on user roles. Define specific permissions for different user types, ensuring a tailored and secure user experience.
          </li>
          <li>
            Emailing the landlord about the listing.
          </li>
          <li>
            Elevate the visual appeal of your platform with Framer Motion, a powerful motion design library.
          </li>
          <li>
            Enable users to seamlessly upload images through Firebase
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Turbo',
    imgSrc: '/project-imgs/turbo.png',
    code: 'https://github.com/ShahSau/turbo',
    projectLink: 'https://turbo-flax.vercel.app',
    tech: ['Javascript', 'Sharp', 'React', 'Axios', 'NextJS', 'Typescript', 'ExpressJS', 'NodeJS', 'MongoDB', 'ESLint', 'Stripe', 'Cloudinary', 'Prisma', 'Leaflet', 'JSON', 'JSON Web Token (JWT)', 'Zustand', 'i18next'],
    description:
      'Seamless User Experience and Comprehensive Business Solutions with NextAuth, Stripe Integration, and Multi-Language Support. ',
    modalContent: (
      <>
        <p>
          Elevate your platform&apos;s functionality with a feature-rich set designed to enhance user experience and empower businesses. Our solution integrates NextAuth for secure Google and GitHub logins, Stripe for seamless payments, and offers multi-currency and multi-language support. Whether you&apos;re renting cars, booking car repair services, or selling car equipment, our platform provides a unified and user-friendly experience.
        </p>
        <ul>
          <li>
            Secure and efficient authentication with NextAuth, supporting both Google and GitHub logins.
          </li>
          <li>
            Switch between languages effortlessly with support for Finnish, Swedish, English, and German.
          </li>
          <li>
            Streamline transactions with Stripe integration, providing a seamless and secure payment experience for users.
          </li>
          <li>
            Cater to a global audience with support for multiple currencies.
          </li>
          <li>
            Offer a comprehensive car rental solution, allowing users to easily browse, select, and rent vehicles.
          </li>
          <li>
            Facilitate convenient booking of car repair services through your platform.
          </li>
          <li>
            Create an additional revenue stream by enabling users to purchase car equipment directly from your platform.
          </li>
          <li>
            Access a centralized list of all reserved cars, allowing for efficient management and tracking of reservations.
          </li>
          <li>
            Keep track of all booked car repair services, providing a comprehensive overview for both users.
          </li>
          <li>
            Maintain a record of all purchased car equipment.
          </li>
          <li>
            Keep track of your advertized cars in one centralized location.
          </li>
          <li>
            Stay organized by accessing a comprehensive overview of all your offered services.
          </li>
          <li>
            Keep a record of your sold car equipment with a detailed history.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Dev Insta',
    imgSrc: '/project-imgs/devinsta.png',
    code: 'https://github.com/ShahSau/Dev-Insta',
    projectLink: '',
    tech: ['React', 'Redux', 'Node', 'Express', 'JWT', 'MongoDb', 'Axios', 'REST api', 'JSON'],
    description:
      'Elevate Your Developer Experience with a Cutting-Edge Social Network Platform',
    modalContent: (
      <>
        <p>
          Welcome to the next generation of developer networking. Our social network website is tailored specifically for developers, offering a seamless platform to connect, collaborate, and share insights. Whether you&apos;re looking to expand your professional network, showcase your projects, or engage with like-minded peers, our platform provides the perfect environment for fostering growth and innovation. Powered by the latest technologies including React, Redux, Node, Express, JWT, MongoDB, and Axios, our platform offers a robust and feature-rich experience for developers worldwide.
        </p>
        <ul>
          <li>
            Developers can easily create accounts, providing basic information and preferences to customize their experience.
          </li>
          <li>
            Seamlessly connect GitHub accounts to import repositories, showcase projects, and highlight contributions within the developer community.
          </li>
          <li>
            Share insights, updates, and project progress through posts, facilitating knowledge sharing and community engagement.
          </li>
          <li>
            Engage in meaningful discussions by commenting on posts, providing feedback, asking questions, and sharing insights with other developers.
          </li>
        </ul>
      </>
    ),
  },

];

function Projects() {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="l" />

      <div className={styles.projects}>
        {projects.map((project) => <Project key={project.title} {...project} />)}
      </div>
    </section>
  );
}

export default Projects;
