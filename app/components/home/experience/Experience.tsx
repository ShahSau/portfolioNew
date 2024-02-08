import React from 'react';
import SectionHeader from '../../utils/SectionHeader';
import ExperienceItem from './ExperienceItem';

const experience = [
  {
    title: 'Grundium',
    position: 'Web Engineer',
    time: 'January, 2023 - Present',
    location: 'Finland',
    description: "Led the initiative in crafting cutting-edge device testing software tailored to evaluate both performance and usability metrics. Leveraging a sophisticated tech stack including React, Next.js, Express, Cypress, TypeScript, Zod, Jenkins, Recoil, and AWS, the robust solutions poised to elevate the standards of clean code and DRY methodologies. Continuously enhancing and refining the functionality of the current microscope user software, our team diligently integrates new features while ensuring seamless maintenance. Employing Angular, RxJS, OpenLayers, Express, MongoDB, and Jest, fortifying the capabilities of this software, enabling smooth control over portable microscopes. Played a pivotal role in the development of the forthcoming microscope user software, employing a cutting-edge tech stack consisting of Next.js, Express, Node.js, Cypress, Jest, Recoil, and TypeScript. This involvement contributed significantly to shaping an advanced platform poised to revolutionize user experiences in microscopy.",
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
