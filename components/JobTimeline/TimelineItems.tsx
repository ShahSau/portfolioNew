import { motion } from 'framer-motion'
import TimelineItem from './TimelineItem'


const jobExperiences = [
    {
    year: 'November, 2024 - Present',
    title: 'Full Stack Developer',
    company: 'qibb',
    description1:"Developing cutting-edge microservices to enhance the functionality of qibb, an innovative integration platform revolutionizing the media and broadcast industry. Designing and implementing scalable and performant APIs to seamlessly connect third-party services for media companies.",
    description2:"Collaborating in an agile team environment, translating user stories and requirements into efficient and high-quality software solutions. Delivering code across the full stack, leveraging tools like Angular, Node.js, and Go to build robust and user-friendly components.",
    description3:"Championing best practices in code quality to deliver maintainable and scalable software. Designing containerized solutions using Docker and Kubernetes, contributing to the company’s microservices architecture and deployment strategies on cloud platforms (AWS).",
    tech:['JavaScript',
      'TypeScript',
      'React',
      'Angular',
      'Node',
      'Nest',
      'AWS',
      'Docker',
      'Kubernetes',
      'Jest',
      'Go',
      'MongoDB', 
      'ArangoDB', 
      'PostgreSQL', 
      'Elasticsearch',
      'Redis',
      'Grafana',
      'RxJS',
    ],
    location:'Berlin, Germany',
    image:'/images/qibb.jpeg'
    },
  {
    year: 'January, 2023 - October, 2024',
    title: 'Web Engineer',
    company: 'Grundium Oy',
    description1: 'Leading the initiative to develop cutting-edge device testing software tailored for evaluating both performance and usability metrics, we leverage a sophisticated tech stack, including React, Next.js, Express, Cypress, TypeScript, Zod, Jenkins, Recoil, and AWS, to deliver robust solutions poised to elevate standards in clean code and DRY methodologies.',
    description2: 'Continuously enhance and refine the functionality of our current microscope user software, integrate new features while ensuring seamless maintenance. By employing Angular, RxJS, OpenLayers, Express, MongoDB, and Jest enable smooth control over portable microscopes.',
    description3:'Playing a pivotal role in the development of the forthcoming microscope user software, employing a state-of-the-art tech stack consisting of Next.js, Express, Node.js, Cypress, Jest, Recoil, and TypeScript. This involvement contributed significantly to shaping an advanced platform poised to revolutionize user experiences in portable microscopy.',
    tech:['JavaScript',
      'React',
      'TypeScript',
      'Next',
      'AWS',
      'Go',
      'Angular',
      'Express',
      'Node',
      'MongoDB',
      'Tailwind',
      'GraphQL',
      'RxJS',
      'Cypress',
      'Jest',
      'Recoil',
      'Docker',
      'OpenLayers'],
      location:'Tampere, Finland',
      image:'/images/grundium.png'
  },
  {
    year: 'October, 2021 - December, 2022',
    title: 'Full Stack Developer',
    company: 'Mentura Group Oy',
    description1:"Implemented software solutions aimed at optimizing network coverage and performance across TETRA, mobile, and LTE devices. Employing advanced techniques, I utilized Recoil for efficient state management and leveraged the power of RxJS to handle intricate data streams, ensuring seamless operation and enhanced performance across various platforms.",
    description2:"Meticulously crafted a resilient backend infrastructure, harnessing the capabilities of Node.js and Express.js to deliver robust functionalities. Elevating user experience, I employed React.js and Material UI to create responsive interfaces.",
    description3:"Integrated MongoDB, Redis and Kafka Streams for efficient data management and real-time data processing for in-depth network metric insights. Used OpenLayers to skillfully display these metrics on interactive maps. To ensure reliability, I implemented automated testing using Cypress and Jest, guaranteeing the seamless performance of the developed solutions while maintaining a high standard of quality.",
    tech:[
      'JavaScript',
      'TypeScript',
      'Python',
      'React',
      'Docker',
      'Express',
      'Node',
      'MongoDB',
      'Material UI',
      'OpenLayers',
      'Kafka',
      'Redis',
      'RxJS',
      'AWS',
      'Cypress',
    ],
    location:'Espoo, Finland',
    image:'/images/mentura.jpeg'
  },
  {
    year: 'April, 2020 - September, 2021',
    title: 'Software Engineer',
    company: 'Integrify',
    description1:"As a consultant full-stack software engineer, I collaborated on diverse client projects, ensuring applications were customer-centric and exceptional. Utilizing React, Express, Jest, Redux, TypeScript, Node.js, AWS, and Terraform, I enhanced the functionality and scalability of clients' products.",
    description2:"I played a key role in developing a cutting-edge web application for a leading telecommunications company, leveraging React, Express, Node.js, MongoDB, and AWS to deliver a high-performance solution. My contributions were instrumental in optimizing the application's performance and user experience.",
    description3:"My focus was on crafting solutions that exceeded client expectations, delivering excellence in every aspect of development.",
    tech:['JavaScript',
      'TypeScript',
      'React',
      'Express',
      'Node',
      'Redux',
      'AWS',
      'Jest',
      'MongoDB',
      'Material UI',
      'GraphQL',
      'Docker',
      'Python',
      'Numpy',
      'Pandas',
      'Seaborn',
      'Scikit-learn'],
      location:'Helsinki, Finland',
      image:'/images/integrify.jpeg'
  },
  {
    year: 'December, 2016 - December, 2019',
    company: 'University of Helsinki ',
    title: 'Research Assistant',
    description1:"Conducted experiments utilizing Wide Angle X-ray Scattering (WAXS) and Small Angle X-ray Scattering (SAXS) techniques to analyze the structural properties of cellulose-based materials. Developed and implemented data analysis scripts and algorithms using Python and MATLAB to process X-ray scattering data and extract key structural parameters and trends.",
    description2:"Collaborated with senior researchers to design and optimized experimental setups for cellulose characterization, ensuring accurate and reliable data acquisition. Assisted in the preparation of research proposals, grant applications, and manuscripts for publication in peer-reviewed journals, contributing valuable insights and expertise in data analysis.",
    description3:"Maintained laboratory equipment and ensured compliance with safety protocols, facilitating the smooth and efficient operation of experimental setups. Presented research findings at national and international conferences, engaging with the scientific community and disseminating novel discoveries in the field of cellulose research.",
    tech: [
      'Python',
      'Material Characterization',
      'X-ray Diffraction',
      'SEM Analysis',
      'Nanomaterials',
      'Polymers',
      'MATLAB',
      'Wide Angle X-ray Scattering (WAXS)',
      'Cellulose',
      'Small Angle X-ray Scattering (SAXS',
      'Image Processing',
      'Research',
      'Scientific Writing',
    ],
    location:'Helsinki, Finland',
    image:'/images/universityOfHelsinki.png'

  },
]

const TimelineItems=()=> {
  return (
    <div className="container mx-auto w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative wrap overflow-hidden p-4 md:p-10"
      >
        <div className="absolute left-8 h-[4735px] border-2 border-gray-800 border-opacity-20 sm:left-1/2 sm:-translate-x-1/2 opacity-0 md:opacity-100" />
        {jobExperiences.map((job, index) => (
          <TimelineItem key={index} {...job} index={index} />
        ))}
      </motion.div>
    </div>
  )
}

export default TimelineItems