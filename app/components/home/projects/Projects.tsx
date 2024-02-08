/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
import React from 'react';
import SectionHeader from '../../utils/SectionHeader';
import Project from './Project';
import styles from './projects.module.scss';

const projects = [
  
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
    title: 'Job Hunt',
    imgSrc: '/project-imgs/alphacore.png',
    code: 'https://github.com/ShahSau/jobhunt',
    projectLink: '',
    tech:['Javascript', 'Python', 'React', 'NextJS', 'TailwindCSS', 'Django', 'Django REST' , 'Axios', 'JSON', 'JSON Web Token', 'PostgreSQL', 'Cookie', 'Mapbox'],
    description:
      "A job portal is build on Next.js (production-ready react framework), Django REST framework (a powerful and flexible framework for building Web APIs) and postgres.",
    modalContent: (
      <>
        <p>
        Empower your job recruitment and candidate management process with our cutting-edge feature set, seamlessly integrated into your platform. With a focus on JWT and cookies for secure authentication, dynamic map functionality, real-time updates, and comprehensive job statistics, our solution offers an unparalleled experience for employers and candidates.
        </p>
        <ul>
        <li>Login process is secured by JWT and Cookies</li>
        <li>Curate your personalized job list with our Favorite Jobs feature. Save and revisit positions that catch your eye, making it easy to prioritize and organize your applications.</li>
        <li>Access a comprehensive history of all your applied jobs in one place.</li>
        <li>Take control of your job search by adding and deleting jobs as needed.</li>
        <li>Leverage an intuitive map interface to visualize job locations and gain insights into geographical distribution.</li>
        <li>Real-time tracking of the number of applicants for each job.</li>
        <li>Personalize your job search experience with the ability to change between dark and light mode.</li>
        <li>Access comprehensive statistics on various aspects of your job listings.</li>
        <li>Provide details of each candidates who applied for the job.</li>
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
    title: 'chitChat Connect',
    imgSrc: '/project-imgs/primeproperties.png',
    code: 'https://github.com/ShahSau/prime-properties',
    projectLink: '',
    tech: ['Javascript', 'React Native', 'Django', 'Django REST', 'Zustand', 'Django Channels', 'webhook', 'expo', 'redis', 'SQLite', 'JSON Web Token (JWT)'],
    description:
      'A chatting app using react native and Django rest framework. This app is designed to connect people and chat with them.',
    modalContent: (
      <>
        <p>
          A Chat Application with Real-Time Messaging, Webhooks, and Secure Authentication
        </p>
        <ul>
          <li>Leveraging the flexibility and versatility of JavaScript along with the power of React Native to build captivating user interfaces</li>
          <li>Utilizing Django, a high-level Python web framework, along with its RESTful API framework, for developing scalable and maintainable backend services.</li>
          <li>Simplifing state management in the applications with Zustand, a lightweight and straightforward state management library that offers efficiency and flexibility.</li>
          <li>Implementing Django Channels, a powerful and flexible tool for handling WebSockets and asynchronous communication, to enable real-time messaging and chat functionality.</li>
          <li>Enhancing the application with webhooks, allowing for seamless integration of third-party services and real-time data updates.</li>
          <li>Utilizing Redis, an in-memory data structure store, to provide a high-performance and scalable caching solution.</li>
          <li>Using SQLite, a lightweight and embedded relational database, for local data storage and management, providing a reliable solution for applications requiring offline capabilities</li>
          <li>Securing user data and interactions with JSON Web Token (JWT) authentication, ensuring a safe and reliable user experience.</li>

        </ul>
        
      </>
    ),
  },
  {
    title: 'eStore',
    imgSrc: '/project-imgs/turbo.png',
    code: 'https://github.com/ShahSau/TechHive',
    projectLink: '',
    tech: ['Javascript', 'Angular', 'Axios', 'Typescript', 'ExpressJS', 'NodeJS', 'MongoDB', 'Stripe', 'Cloudinary', 'JSON', 'JSON Web Token (JWT)', 'RxJS', 'TailwindCSS', 'Angular Material'],
    description:
      'A full-stack e-commerce platform built with Angular, Express, and MongoDB.',
    modalContent: (
      <>
        <p>
          A Full-Stack E-Commerce Platform with Angular, Express, and MongoDB, Featuring Stripe Integration, Cloudinary Image Uploads, and JWT Authentication.
        </p>
      </>
    ),
  },
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
