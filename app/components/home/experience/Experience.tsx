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
    // description: "",
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
    // description:""
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
