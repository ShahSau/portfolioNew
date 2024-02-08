import React from 'react';
import SectionHeader from '../../utils/SectionHeader';
import ExperienceItem from './ExperienceItem';

const experience = [
  {
    title: 'Grundium',
    position: 'Web Engineer',
    time: 'January, 2023 - Present',
    location: 'Finland',
    description: "Pioneered advanced device testing software, tailored for performance and usability metrics. Employing React, Next.js, Express, Cypress, TypeScript, Zod, Jenkins, Recoil, and AWS, it elevates clean code standards. Enhancing microscope user software with Angular, RxJS, OpenLayers, Express, MongoDB, and Jest, empowering smooth control. Spearheaded the development of upcoming microscope software with Next.js, Express, Node.js, Cypress, Jest, Recoil, and TypeScript, revolutionizing microscopy experiences.",
    tech: [
      'JavaScript',
      'React',
      'TypeScript',
      'Next',
      'Angular',
      'Express',
      'Node',
      'MongoDB',
      'JAMstack',
      'Tailwind',
      'GraphQL',
      'RxJS',
      'GatsbyJS',
      'Cypress',
    ],
  },
  {
    title: 'Mentura Group Oy',
    position: 'Software Developer',
    time: 'October, 2021 - January, 2023',
    location: 'Finland',
    description: "Implemented software solutions to optimize network coverage and performance for TETRA, mobile, and LTE devices. Utilized Recoil for efficient state management and RxJS for intricate data streams. Crafted resilient backend infrastructure with Node.js and Express.js. Elevated user experience with React.js and Material UI. Integrated MongoDB, Redis, and Kafka Streams for data management and real-time processing. Employed Cypress and Jest for automated testing, ensuring high-quality, seamless performance.",
    tech: [
      'JavaScript',
      'TypeScript',
      'React',
      'Express',
      'Python',
      'Node',
      'MongoDB',
      'Material UI',
      'Kafka',
      'Redis',
      'RxJS',
      'Cypress',
    ],
  },
  {
    title: 'Integrify',
    position: 'Junior Software Engineer',
    time: 'April, 2020 - September, 2021',
    location: 'Finland',
    description:"As a consultant Full-stack developer, I collaborate on diverse client projects, ensuring applications are customer-centric and exceptional. Utilizing React, Express, Jest, Redux, TypeScript, Node.js, AWS, and Terraform, I enhance functionality and scalability. My focus remains on crafting solutions that exceed client expectations, delivering excellence in every aspect of development."
    tech: [
      'JavaScript',
      'React',
      'Express',
      'Node',
      'MongoDB',
      'Python',
      'Numpy',
      'Pandas',
      'Seaborn',
      'Scikit-learn',
    ],
  },
];

function Experience() {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="r" />
      {experience.map((item) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
}

export default Experience;
