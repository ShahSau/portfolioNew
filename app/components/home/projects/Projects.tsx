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
    featured: true,
    type: 'FullStack',
    tech: ['React', 'TypeScript', 'NextJS', 'TailwindCSS','Zustand', 'Prisma', 'OpenAI', 'Axios', 'JSON', 'Zod', 'Stripe', 'Clerk', 'Replicate', 'ESlint'],
    description:
      "A SASS platform depecting the power of AI. This platform uses OpenAI's GPT-3 and other AI models to generate contents.",
    modalContent: (
      <>
        <p>
          Take your platform to new heights with our comprehensive suite of AI-powered features and seamless payment integration.
        </p>
        <ul>
          <li>
            Produce unique and personalized music compositions utilizing advanced AI algorithms tailored to diverse musical preferences.
          </li>
          <li>
            Automatically generate high-quality images and videos based on user inputs, simplifying content creation processes.
          </li>
          <li>
            Streamline database interactions and enhance user productivity by converting natural language queries into SQL queries.
          </li>
          <li>
            Enhance readability and coherence by summarizing lengthy text documents and correcting grammar errors.
          </li>
          <li>
            Accelerate development workflows by automatically generating code snippets based on specific requirements or programming tasks.
          </li>
          <li>
            Efficiently extract key insights from large textual documents or articles with concise summaries.
          </li>
          <li>
            Plan educational lessons and tailor interview questions to specific topics or subjects.
          </li>
          <li>
            Effortlessly create professional-grade logos, customized email templates, and digital portraits.
          </li>
          <li>
            Ensure reliability and security with convenient periodic payments for subscriptions through Stripe.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Culinary Bliss',
    imgSrc: '/project-imgs/CulinaryBliss.png',
    code: 'https://github.com/ShahSau/culinary-bliss',
    projectLink: 'https://culinary-bliss.onrender.com/swagger/index.html',
    featured: false,
    type: 'Backend',
    tech: ['Go lang','Gin', 'Swagger','JSON Web Token (JWT)', 'MongoDB', 'JSON'],
    description:'a robust and scalable backend system built using Go and the Gin framework, designed to support a comprehensive restaurant management platform. The system is structured to provide secure authentication, user management, and administrative functionalities, ensuring a seamless and efficient operation of a restaurant.',
    modalContent: (
      <>
        <p>
        Secure Authentication: Implemented JWT (JSON Web Token) for secure and stateless user authentication.
        </p>
        <p>
        Token Generation: Generate tokens for user sessions upon successful login.
        </p>
        <p>
          Token Verification: Verify tokens for protected routes to ensure only authenticated users can access certain endpoints.
          </p>
        <p>
        Reservation Booking: Users can book, view, and cancel reservations.
        </p>
        <p>
          Profile Management: Users can update their profiles, including personal details and preferences.
          </p>
        <p>
          User Registration and Login: Allow users to register and log in securely.
          </p>
        <p>
          Table Management: Manage table assignments, statuses, and seating arrangements to optimize dining space.
          </p>
        <p>
          Reservation Management: Handle customer reservations, including booking, updating, and canceling reservations.
          </p>
        <p>
          Menu Management: CRUD operations for managing the restaurant menu, including categories, items, prices, and availability.
          </p>
        <p>
          Restaurant Management: Manage restaurant details, including name, location, hours of operation, and more.
        </p>
        <p>
          Role Management: Assign and manage roles (e.g., admin, staff) to control access levels and permissions.
        </p>
        <p>
          User Management: Create, read, update, and delete (CRUD) operations for managing user accounts.
        </p>
        <p>
          Refresh Tokens: Support for refreshing tokens to maintain secure sessions.
        </p>

      </>
    ),
  },
  {
    title: 'Turbo',
    imgSrc: '/project-imgs/turbo.png',
    code: 'https://github.com/ShahSau/turbo',
    projectLink: 'https://turbo-flax.vercel.app',
    featured: true,
    type: 'FullStack',
    tech: ['Javascript', 'Sharp', 'React', 'Axios', 'NextJS', 'Typescript', 'ExpressJS', 'NodeJS', 'MongoDB', 'ESLint', 'Stripe', 'Cloudinary', 'Prisma', 'Leaflet', 'JSON', 'JSON Web Token (JWT)', 'Zustand', 'i18next'],
    description:
      'Seamless User Experience and Comprehensive Business Solutions with NextAuth, Stripe Integration, and Multi-Language Support. ',
    modalContent: (
      <>
        <p>
          Enhance your platform&apos;s functionality with a feature-rich set designed to elevate user experience and empower businesses. Our solution seamlessly integrates NextAuth for secure Google and GitHub logins, Stripe for smooth payments, and offers multi-currency and multi-language support. Whether you&apos;re renting cars, booking car repair services, or selling car equipment, our platform provides a unified and user-friendly experience.
        </p>
        <ul>
          <li>
            Experience secure and efficient authentication with NextAuth, supporting both Google and GitHub logins.
          </li>
          <li>
            Effortlessly switch between languages with support for Finnish, Swedish, English, and German.
          </li>
          <li>
            Streamline transactions with Stripe integration, ensuring a seamless and secure payment experience for users.
          </li>
          <li>
            Cater to a global audience with support for multiple currencies.
          </li>
          <li>
            Enjoy a comprehensive car rental solution, enabling users to easily browse, select, and rent vehicles.
          </li>
          <li>
            Facilitate convenient booking of car repair services through your platform.
          </li>
          <li>
            Unlock an additional revenue stream by enabling users to purchase car equipment directly from our platform.
          </li>
          <li>
            Access a centralized list of all reserved cars, allowing for efficient management and tracking of reservations.
          </li>
          <li>
            Stay informed about all booked car repair services, providing a comprehensive overview for both users.
          </li>
          <li>
            Maintain detailed records of all purchased car equipment.
          </li>
          <li>
            Efficiently manage and track your advertised cars from one centralized location.
          </li>
          <li>
            Stay organized with a comprehensive overview of all offered services.
          </li>
          <li>
            Keep detailed records of sold car equipment, ensuring a thorough history.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Job Hunt',
    imgSrc: '/project-imgs/jobhunt.png',
    code: 'https://github.com/ShahSau/jobhunt',
    projectLink: 'https://jobhunt-sfsp.vercel.app/',
    featured: true,
    type: 'FullStack',
    tech:['Javascript', 'Python', 'React', 'NextJS', 'TailwindCSS', 'Django', 'Django REST' , 'Axios', 'JSON', 'JSON Web Token', 'PostgreSQL', 'Cookie', 'Mapbox'],
    description:
      "A job portal is build on Next.js (production-ready react framework), Django REST framework (a powerful and flexible framework for building Web APIs) and postgres.",
    modalContent: (
      <>
        <p>
          Revolutionize your job recruitment and candidate management process with our state-of-the-art web app. With a focus on JWT and cookies for secure authentication, dynamic map functionality, real-time updates, and comprehensive job statistics, our solution offers an unparalleled experience for both employers and candidates.
        </p>
        <ul>
        <li>
          Secure your login process with JWT and Cookies.
        </li>
        <li>
        Curate your personalized job list with our Favorite Jobs feature. Easily save and revisit positions that pique your interest, facilitating prioritization and organization of your applications.
        </li>
        <li>
          Access a comprehensive history of all your applied jobs in one centralized location.
        </li>
        <li>
          Take full control of your job search by adding and deleting jobs as needed.
        </li>
        <li>
          Leverage an intuitive map interface to visualize job locations and gain insights into geographical distribution.
        </li>
        <li>
          Track the number of applicants for each job in real-time.
        </li>
        <li>
          Personalize your job search experience with the ability to change between dark and light mode.
        </li>
        <li>
          Access comprehensive statistics on various aspects of your job listings.
        </li>
        <li>
         Provide detailed information on each candidate who applied for the job.
        </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Primeproperties',
    imgSrc: '/project-imgs/primeproperties.png',
    code: 'https://github.com/ShahSau/prime-properties',
    projectLink: 'https://prime-properties.onrender.com',
    featured: true,
    type: 'FullStack',
    tech: ['Javascript', 'React', 'ExpressJS', 'NodeJS', 'TailwindCss', 'Firebase', 'Redux Thunk', 'JSON Web Token (JWT)', 'i18next', 'Framer motion', 'MongoDB', 'Swiper', 'JSON', 'EsLint', 'Cloudinary'],
    description:
      'Elevated User Experience and Robust Security: A Feature-Packed MERN app with Multilingual Support, JWT Authentication, and Role-Based Authorization ',
    modalContent: (
      <>
        <p>
          Elevated User Experience and Ensure Secure Authentication with Multi-Language Support, JWT, Firebase, and Advanced UI Animations.
        </p>
        <ul>
          <li>
          Seamlessly switch between English, German, and Finnish to provide users with a personalized and comfortable experience in their preferred language.
          </li>
          <li>
            Ensure robust security with JSON Web Token (JWT) authentication and Firebase, safeguarding user data and transactions through state-of-the-art encryption and secure access control.
          </li>
          <li>
            Streamline user onboarding with the convenience of Google Login, enhancing user adoption by simplifying the registration process and improving overall accessibility.
          </li>
          <li>
            Optimize the efficiency of your application with Redux, a powerful state management tool that centralizes and manages application state for smoother user interactions.
          </li>
          <li>
            Empower users to curate their personalized experience by creating and managing a favorites list.
          </li>
          <li>
            Implement a secure and granular access control system based on user roles, defining specific permissions for different user types and ensuring a tailored and secure user experience.
          </li>
          <li>
            Facilitate communication with landlords through an integrated email feature about property listings.
          </li>
          <li>
            Elevate the visual appeal of your platform with Framer Motion, a powerful motion design library.
          </li>
          <li>
            Enable users to seamlessly upload images through Cloudinary, a cloud-based image and video management solution, ensuring a smooth and efficient image upload process.
          </li>
        </ul>
      </>
    ),
  },
  // {
  //   title: 'chitChat Connect',
  //   imgSrc: '/project-imgs/primeproperties.png',
  //   code: 'https://github.com/ShahSau/prime-properties',
  //   projectLink: '',
  //  featured: true,
  //  type: 'Mobile',
  //   tech: ['Javascript', 'React Native', 'Django', 'Django REST', 'Zustand', 'Django Channels', 'webhook', 'expo', 'redis', 'SQLite', 'JSON Web Token (JWT)'],
  //   description:
  //     'A chatting app using react native and Django rest framework. This app is designed to connect people and chat with them.',
  //   modalContent: (
  //     <>
  //       <p>
  //         Crafting a Chat Application with Real-Time Messaging, Webhooks, and Secure Authentication.
  //       </p>
  //       <ul>
  //         <li>
  //           Harnessing the flexibility and versatility of JavaScript alongside the power of React Native to create captivating user interfaces.
  //         </li>
  //         <li>
  //           Employing Django, a high-level Python web framework, in tandem with its RESTful API framework to develop scalable and maintainable backend services.
  //         </li>
  //         <li>
  //           Simplifying state management in applications with Zustand, a lightweight and straightforward state management library offering efficiency and flexibility.
  //         </li>
  //         <li>
  //           Implementing Django Channels, a powerful and flexible tool for handling WebSockets and asynchronous communication, to enable real-time messaging and chat functionality.
  //         </li>
  //         <li>
  //           Enhancing the application with webhooks, enabling seamless integration of third-party services and real-time data updates.
  //         </li>
  //         <li>
  //           Leveraging Redis, an in-memory data structure store, to provide high-performance and scalable caching solutions.
  //         </li>
  //         <li>
  //           Utilizing SQLite, a lightweight and embedded relational database, for local data storage and management, ensuring a reliable solution for applications requiring offline capabilities.
  //         </li>
  //         <li>
  //           Securing user data and interactions with JSON Web Token (JWT) authentication, guaranteeing a safe and reliable user experience.
  //         </li>

  //       </ul>
        
  //     </>
  //   ),
  // },
  // {
  //   title: 'eStore',
  //   imgSrc: '/project-imgs/turbo.png',
  //   code: 'https://github.com/ShahSau/TechHive',
  //   projectLink: '',
  //   featured: true,
  //   type: 'FullStack',
  //   tech: ['Javascript', 'Angular', 'Axios', 'Typescript', 'ExpressJS', 'NodeJS', 'MongoDB', 'Stripe', 'Cloudinary', 'JSON', 'JSON Web Token (JWT)', 'RxJS', 'TailwindCSS', 'Angular Material'],
  //   description:
  //     'A full-stack e-commerce platform built with Angular, Express, and MongoDB.',
  //   modalContent: (
  //     <>
  //       <p>
  //         A Full-Stack E-Commerce Platform with Angular, Express, and MongoDB, Featuring Stripe Integration, Cloudinary Image Uploads, and JWT Authentication.
  //       </p>
  //     </>
  //   ),
  // },
  {
    title: 'Ethnic Elegance',
    imgSrc: '/project-imgs/ethnicelegance.png',
    code: 'https://github.com/ShahSau/EthnicElegance',
    projectLink: 'https://ethnicelegance.onrender.com/v1/ecommerce/swagger/index.html',
    featured: false,
    type: 'Backend',
    tech: ['Go lang','Gin', 'Swagger','JSON Web Token (JWT)', 'MongoDB', 'JSON'],
    description:
      'A robust and scalable backend system built using Go and the Gin framework, designed to support a comprehensive eCommerce platform. The system is structured to provide secure authentication, user management, and administrative functionalities',
    modalContent: (
      <>
        <p>
          Implements JWT (JSON Web Token) for secure user authentication and authorization.
        </p>
        <p>
          Generates tokens upon successful login, ensuring secure and stateless user sessions.
        </p>
        <p>
          Validates tokens for each request to ensure that only authenticated users can access protected routes.
        </p>
        <p>
          Allows new users to register with the platform by providing necessary details.
        </p>
        <p>
          Enables registered users to log in and receive a JWT for session management.
        </p>
        <p>
          Lets users view and update their profile information.
        </p>
        <p>
          Users can place new orders, view their order history, and track order statuses.
        </p>
        <p>
          Users can browse through the catalog of available products, view product details, and search for specific items.
        </p>
        <p>
          Admin-specific authentication to access the admin dashboard and perform administrative tasks.
        </p>
        <p>
          Admins can view all orders, update order statuses, and manage the order fulfillment process.
      </p>
      </>
    ),
  },
  {
    title: 'gameboy',
    imgSrc: '/project-imgs/gameboy.png',
    code: 'https://github.com/ShahSau/gameboy',
    projectLink: 'https://gameboy-ruddy.vercel.app/',
    featured: false,
    type: 'Frontend',
    tech: ['React', 'NextJS', 'RestApi', 'ChakraUI'],
    description:
      'Gameboy is a vibrant and engaging free-to-play gaming platform info webapp crafted using modern web technologies like JavaScript, Next.js, React, Framer Motion, and Chakra UI..',
    modalContent: (
      <>
        <p>
          Welcome to Gameboy, a dynamic and immersive free-to-play gaming platform info webapp built with cutting-edge technologies including JavaScript, Next.js, React, and Framer Motion. Our app is designed to deliver a seamless gaming experience, offering a diverse selection of games that are accessible anytime, anywhere.
        </p>

         <p>
           Leveraging the power of Next.js for server-side rendering and React for a responsive and interactive user interface, Gameboy ensures that users enjoy fast load times and smooth gameplay. Framer Motion adds an extra layer of engagement, with fluid animations and transitions that bring the gaming experience to life.
          </p>

         <p>
           Whether you're a casual gamer or a dedicated player, Gameboy provides an exciting and user-friendly environment where fun is just a click away. Join us and dive into a world of endless entertainment—no downloads, no hassle, just pure gaming pleasure!
         </p>

      </>
    ),
  },
  {
    title: 'SuperStore Dashboard',
    imgSrc: '/project-imgs/superstore_dashboard.png',
    code: 'https://github.com/ShahSau/superstore_dashboard',
    projectLink: 'https://superstore-dashboard.vercel.app/',
    featured: false,
    type: 'Frontend',
    tech: ['React', 'Typescript', 'TailwindCSS', 'ChakraUI', 'RechartJs', 'JSON', 'ESLint', 'Prettier', 'Vercel' ],
    description:
      'A dashboard to visualize the sales data of a superstore. This dashboard is designed to provide insights into the sales data of a superstore.',
    modalContent: (
      <>
        <p>
          High Performance & Scalability: Leveraging Vite's blazing-fast build toolchain and React's efficient rendering, the dashboard handles large datasets with ease, ensuring quick loading times and a smooth user experience.
        </p>
        <p>
          Interactive Data Visualization: Powered by Recharts, the dashboard provides a variety of customizable charts and graphs, allowing users to interact with their data dynamically. Whether it's line charts, bar graphs, pie charts, or more complex visualizations, the data is presented clearly and effectively.
        </p>
        <p>
          Type Safety & Reliability: With TypeScript, the dashboard ensures type safety across the application, reducing the risk of bugs and making the codebase more maintainable. This enhances the reliability and predictability of the dashboard, especially when dealing with complex data structures.
        </p>
        <p>
          Responsive & Modern UI: TailwindCSS ensures a clean, modern, and fully responsive user interface that adapts seamlessly to different screen sizes and devices. The dashboard’s design prioritizes usability and accessibility, offering a user-friendly experience for both novice and expert users.
        </p>
        <p>
        Modular & Extensible Architecture: The dashboard's architecture is modular, allowing easy integration of new features and custom components. This extensibility makes it adaptable to various use cases, from business intelligence to data science and beyond.
        </p>

      </>
    ),
  }
  

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




// 
// 
