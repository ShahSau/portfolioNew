import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

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
    projectLink: "",
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

];
