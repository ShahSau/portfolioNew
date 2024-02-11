import React from 'react';
import SectionHeader from '../../utils/SectionHeader';
import ExperienceItem from './ExperienceItem';

const experience = [
  {
    title: 'Grundium Oy',
    position: 'Web Engineer',
    time: 'January, 2023 - Present',
    location: 'Finland',
    description:"Leading the initiative to develop cutting-edge device testing software tailored for evaluating both performance and usability metrics, we leverage a sophisticated tech stack, including React, Next.js, Express, Cypress, TypeScript, Zod, Jenkins, Recoil, and AWS, to deliver robust solutions poised to elevate standards in clean code and DRY methodologies.",
    description2:" Continuously enhance and refine the functionality of our current microscope user software, integrate new features while ensuring seamless maintenance. By employing Angular, RxJS, OpenLayers, Express, MongoDB, and Jest enable smooth control over portable microscopes.",
    description3:"Playing a pivotal role in the development of the forthcoming microscope user software, employing a state-of-the-art tech stack consisting of Next.js, Express, Node.js, Cypress, Jest, Recoil, and TypeScript. This involvement contributed significantly to shaping an advanced platform poised to revolutionize user experiences in portable microscopy.",
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
    time: 'October, 2021 - December, 2022',
    location: 'Finland',
    description:"Implemented software solutions aimed at optimizing network coverage and performance across TETRA, mobile, and LTE devices. Employing advanced techniques, I utilized Recoil for efficient state management and leveraged the power of RxJS to handle intricate data streams, ensuring seamless operation and enhanced performance across various platforms.",
    description2:"Meticulously crafted a resilient backend infrastructure, harnessing the capabilities of Node.js and Express.js to deliver robust functionalities. Elevating user experience, I employed React.js and Material UI to create responsive interfaces.",
    description3:"Integrated MongoDB, Redis and Kafka Streams for efficient data management and real-time data processing for in-depth network metric insights. Used OpenLayers to skillfully display these metrics on interactive maps. To ensure reliability, I implemented automated testing using Cypress and Jest, guaranteeing the seamless performance of the developed solutions while maintaining a high standard of quality.",
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
    position: 'Software Engineer',
    time: 'April, 2020 - September, 2021',
    location: 'Finland',
    description:"As a consultant full-stack software engineer, I collaborated on diverse client projects, ensuring applications were customer-centric and exceptional. Utilizing React, Express, Jest, Redux, TypeScript, Node.js, AWS, and Terraform, I enhanced the functionality and scalability of clients' products.",
    description2:"My focus was on crafting solutions that exceeded client expectations, delivering excellence in every aspect of development.",
    tech: [
      'JavaScript',
      'TypeScript',
      'React',
      'Express',
      'Node',
      'Redux',
      'Jest',
      'MongoDB',
      'Python',
      'Numpy',
      'Pandas',
      'Seaborn',
      'Scikit-learn',
    ],
  },
  {
    title: 'University of Helsinki ',
    position: 'Research Assistant',
    time: 'December, 2016 - December, 2019',
    location: 'Finland',
    description:"Conducted experiments utilizing Wide Angle X-ray Scattering (WAXS) and Small Angle X-ray Scattering (SAXS) techniques to analyze the structural properties of cellulose-based materials. Developed and implemented data analysis scripts and algorithms using Python and MATLAB to process X-ray scattering data and extract key structural parameters and trends.",
    description2:"Collaborated with senior researchers to design and optimized experimental setups for cellulose characterization, ensuring accurate and reliable data acquisition. Assisted in the preparation of research proposals, grant applications, and manuscripts for publication in peer-reviewed journals, contributing valuable insights and expertise in data analysis.",
    description3:"Maintained laboratory equipment and ensured compliance with safety protocols, facilitating the smooth and efficient operation of experimental setups. Presented research findings at national and international conferences, engaging with the scientific community and disseminating novel discoveries in the field of cellulose research.",
    tech: [
      'Python',
      'Materials Science',
      'X-ray Diffraction',
      'MATLAB',
      'Wide Angle X-ray Scattering (WAXS)',
      'Small Angle X-ray Scattering (SAXS',
      'cellulose',
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
