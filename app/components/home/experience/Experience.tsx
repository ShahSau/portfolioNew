import React from 'react';
import SectionHeader from '../../utils/SectionHeader';
import ExperienceItem from './ExperienceItem';

const experience = [
  {
    title: 'Grundium',
    position: 'Web Engineer',
    time: 'January, 2023 - Present',
    location: 'Finland',
    description:"Led the initiative in crafting cutting-edge device testing software tailored to evaluate both performance and usability metrics. Leveraging a sophisticated tech stack including React, Next.js, Express, Cypress, TypeScript, Zod, Jenkins, Recoil, and AWS, the robust solutions poised to elevate the standards of clean code and DRY methodologies.",
    description2:"Continuously enhancing and refining the functionality of the current microscope user software, our team diligently integrates new features while ensuring seamless maintenance. Employing Angular, RxJS, OpenLayers, Express, MongoDB, and Jest, fortifying the capabilities of this software, enabling smooth control over portable microscopes.",
    description3:"Played a pivotal role in the development of the forthcoming microscope user software, employing a cutting-edge tech stack consisting of Next.js, Express, Node.js, Cypress, Jest, Recoil, and TypeScript. This involvement contributed significantly to shaping an advanced platform poised to revolutionize user experiences in microscopy.",
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
      'Jest',
      'Recoil',
      'OpenLayers'
    ],
  },
  {
    title: 'Mentura Group Oy',
    position: 'Software Developer',
    time: 'October, 2021 - January, 2023',
    location: 'Finland',
    //description: "Implemented software solutions to optimize network coverage and performance for TETRA, mobile, and LTE devices. Utilized Recoil for efficient state management and RxJS for intricate data streams. Crafted resilient backend infrastructure with Node.js and Express.js. Elevated user experience with React.js and Material UI. Integrated MongoDB, Redis, and Kafka Streams for data management and real-time processing. Employed Cypress and Jest for automated testing, ensuring high-quality, seamless performance.",
    description:"Implemented software solutions aimed at optimizing network coverage and performance across TETRA, mobile, and LTE devices. Employing advanced techniques, I utilized Recoil for efficient state management and leveraged the power of RxJS to handle intricate data streams, ensuring seamless operation and enhanced performance across various platforms.",
    description2:"Meticulously crafted a resilient backend infrastructure, harnessing the capabilities of Node.js and Express.js to deliver robust functionalities. Elevating user experience, I employed React.js and Material UI to create responsive interfaces.",
    description3:"For efficient data management, MongoDB and Redis were seamlessly integrated, while Kafka Streams facilitated real-time data processing for in-depth network metric insights. OpenLayers skillfully displayed these metrics on interactive maps. To ensure reliability, I implemented automated testing using Cypress and Jest, guaranteeing the seamless performance of the developed solutions while maintaining a high standard of quality.",
    tech: [
      'JavaScript',
      'TypeScript',
      'Python',
      'React',
      'Express',
      'Node',
      'MongoDB',
      'Material UI',
      'OpenLayers',
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
    description:"As a consultant Full-stack developer, I collaborate on diverse client projects, ensuring applications are customer-centric and exceptional. Utilizing React, Express, Jest, Redux, TypeScript, Node.js, AWS, and Terraform, I enhance functionality and scalability. My focus remains on crafting solutions that exceed client expectations, delivering excellence in every aspect of development.",
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
