import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="l" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "gameboy",
    imgSrc: "/project-imgs/gameboy.png",
    code: "https://github.com/ShahSau/gameboy",
    projectLink: "https://gameboy-ruddy.vercel.app/",
    tech: ["React", "NextJS", "RestApi", "ChakraUI"],
    description:
      "A website to get details of free to play games. Designed and built on my own.",
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
    title: "Alpha Core",
    imgSrc: "/project-imgs/alphacore.png",
    code: "https://github.com/ShahSau/alphaCore",
    projectLink: "https://alpha-core.vercel.app/",
    tech: [ "Zustand", "Prisma", "OpenAI",  "React", "TypeScript", "NextJS", "TailwindCSS"],
    description:
      "A SASS platform depecting the power of AI. This platform uses OpenAI's GPT-3 and other AI models to generate contents.",
    modalContent: (
      <>
        <p>
          The Alpha Core is a SASS platform for the next generation of AI features.
        </p>
        <p>
          The tech stack is based on top of React, TypeScript and NextJS, with TailwindCSS for styling.
          Prisma is used for data fetching and Zustand for state management.
        </p>
      </>
    ),
  },
  {
    title: "Primeproperties",
    imgSrc: "/project-imgs/primeproperties.png",
    code: "https://github.com/ShahSau/prime-properties",
    projectLink: "https://prime-properties.onrender.com",
    tech: ["Redux Thunk", "React", "NextJS", "ExpressJS", "NodeJS", "MongoDB", "JSON Web Token (JWT)", "Firebase"],
    description:
      "A MERN stack website for real estate. Designed and built on my own.",
    modalContent: (
      <>
        <p>
          Primeproperties is a real estate website.
        </p>
        <p>
          The tech stack is based on top of React, NextJS, ExpressJS, NodeJS, with Redux Thunk for state management.
          Firebase is used for authentication. MongoDB is used for database.
        </p>
      </>
    ),
  },
  {
    title: "Turbo",
    imgSrc: "/project-imgs/turbo.png",
    code: "https://github.com/ShahSau/turbo",
    projectLink: "https://turbo-flax.vercel.app",
    tech: [ "React", "NextJS", "ExpressJS", "NodeJS", "MongoDB", "JSON Web Token (JWT)", "Zustand", "Stripe", "Typescript", "Prisma", "Leaflet"],
    description:
      "Seamless User Experience and Comprehensive Business Solutions with NextAuth, Stripe Integration, and Multi-Language Support. ",
    modalContent: (
      <>
        <p>
          Elevate your platform's functionality with a feature-rich set designed to enhance user experience and empower businesses. Our solution integrates NextAuth for secure Google and GitHub logins, Stripe for seamless payments, and offers multi-currency and multi-language support. Whether you're renting cars, booking car repair services, or selling car equipment, our platform provides a unified and user-friendly experience.
        </p>
        <p>
          NextAuth with Google and GitHub Login: Secure and efficient authentication with NextAuth, supporting both Google and GitHub logins.
        </p>
        <p>
          Multi-Language Support: Switch between languages effortlessly with support for Finnish, Swedish, English, and German.
        </p>
        <p>
          Stripe Integration for Payments: Streamline transactions with Stripe integration, providing a seamless and secure payment experience for users.
        </p>
        <p>
          Multi-Currency Support: Cater to a global audience with support for multiple currencies.
        </p>
        <p>
          Car Rental Services: Offer a comprehensive car rental solution, allowing users to easily browse, select, and rent vehicles.
        </p>
        <p>
          Car Repair Shop Booking: Facilitate convenient booking of car repair services through your platform.
        </p>
        <p>
          Car Equipment Sales: Create an additional revenue stream by enabling users to purchase car equipment directly from your platform.
        </p>
        <p>
          All Reserved Cars: Access a centralized list of all reserved cars, allowing for efficient management and tracking of reservations.
        </p>
        <p>
          All Reserved Services: Keep track of all booked car repair services, providing a comprehensive overview for both users.
        </p>
        <p>
          All Bought Equipments: Maintain a record of all purchased car equipment.
        </p>
        <p>
          All Advertized Cars: Keep track of your advertized cars in one centralized location.
        </p>
        <p>
          All Offered Services: Stay organized by accessing a comprehensive overview of all your offered services.
        </p>
        <p>
          All Equipment for Sell: Keep a record of your sold car equipment with a detailed history.
        </p>
      </>
    ),
  },

];
