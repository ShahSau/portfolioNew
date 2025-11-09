import { Project, Experience } from "../types/portfolio";
import {
  Code2,
  Database,
  Wrench,
  Server,
  Laptop,
  Package,
} from "lucide-react";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory",
    longDescription:
      "A comprehensive e-commerce platform built with React, Node.js, and PostgreSQL. Features include real-time inventory management, secure payment processing, and an admin dashboard.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    longDescription:
      "A modern task management application with team collaboration features, real-time notifications, and advanced filtering capabilities.",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "3",
    title: "AI Content Generator",
    description: "ML-powered content creation tool for marketers",
    longDescription:
      "An AI-powered platform that helps content creators and marketers generate high-quality content using advanced language models.",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "FastAPI", "OpenAI", "React", "Docker"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "4",
    title: "Real-Time Analytics Dashboard",
    description: "Business intelligence dashboard with live data visualization",
    longDescription:
      "A comprehensive analytics dashboard providing real-time insights into business metrics with interactive charts and custom reports.",
    image:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "WebSocket"],
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "5",
    title: "Social Media Scheduler",
    description: "Multi-platform content scheduling and analytics tool",
    longDescription:
      "Schedule and manage content across multiple social media platforms with analytics tracking and engagement metrics.",
    image:
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "AWS"],
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    id: "6",
    title: "Fitness Tracking App",
    description: "Mobile-first fitness and nutrition tracking application",
    longDescription:
      "Track workouts, nutrition, and progress with personalized recommendations and social features for motivation.",
    image:
      "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React Native", "Firebase", "TypeScript", "GraphQL"],
    githubUrl: "https://github.com",
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Qibb",
    position: "Full Stack Developer",
    period: "November 2024 - Present",
    location: "Berlin, Germany",
    description:
      "Developing cutting-edge microservices to enhance the functionality of qibb, an innovative integration platform revolutionizing the media and broadcast industry. Designing and implementing scalable and performant APIs to seamlessly connect third-party services for media companies.Collaborating in an agile team environment, translating user stories and requirements into efficient and high-quality software solutions. Delivering code across the full stack, leveraging tools like Angular, Node.js, and Go to build robust and user-friendly components. Championing best practices in code quality to deliver maintainable and scalable software. Designing containerized solutions using Docker and Kubernetes, contributing to the company’s microservices architecture and deployment strategies on cloud platforms (AWS).",
    logo: "/images/qibb.jpeg",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Angular",
      "Node",
      "Nest",
      "AWS",
      "Docker",
      "Kubernetes",
      "Jest",
      "Go",
      "MongoDB",
      "ArangoDB",
      "PostgreSQL",
      "Elasticsearch",
      "Redis",
      "Grafana",
      "RxJS",
    ],
  },
  {
    id: "2",
    company: "Grundium Oy",
    position: "Web Engineer",
    period: "January, 2023 - October, 2024",
    description:
      "Leading the initiative to develop cutting-edge device testing software tailored for evaluating both performance and usability metrics, we leverage a sophisticated tech stack, including React, Next.js, Express, Cypress, TypeScript, Zod, Jenkins, Recoil, and AWS, to deliver robust solutions poised to elevate standards in clean code and DRY methodologies. Continuously enhance and refine the functionality of our current microscope user software, integrate new features while ensuring seamless maintenance. By employing Angular, RxJS, OpenLayers, Express, MongoDB, and Jest enable smooth control over portable microscopes.Playing a pivotal role in the development of the forthcoming microscope user software, employing a state-of-the-art tech stack consisting of Next.js, Express, Node.js, Cypress, Jest, Recoil, and TypeScript. This involvement contributed significantly to shaping an advanced platform poised to revolutionize user experiences in portable microscopy.",
    technologies: [
      "JavaScript",
      "React",
      "TypeScript",
      "Next",
      "AWS",
      "Go",
      "Angular",
      "Express",
      "Node",
      "MongoDB",
      "Tailwind",
      "GraphQL",
      "RxJS",
      "Cypress",
      "Jest",
      "Recoil",
      "Docker",
      "OpenLayers",
      "Redis",
    ],
    location: "Tampere, Finland",
    logo: "/images/grundium.png",
  },
  {
    id: "3",
    company: "Mentura Group Oy",
    position: "Full Stack Developer",
    period: "October, 2021 - December, 2022",
    description:
      "Implemented software solutions aimed at optimizing network coverage and performance across TETRA, mobile, and LTE devices. Employing advanced techniques, I utilized Recoil for efficient state management and leveraged the power of RxJS to handle intricate data streams, ensuring seamless operation and enhanced performance across various platforms. Meticulously crafted a resilient backend infrastructure, harnessing the capabilities of Node.js and Express.js to deliver robust functionalities. Elevating user experience, I employed React.js and Material UI to create responsive interfaces.Integrated MongoDB, Redis and Kafka Streams for efficient data management and real-time data processing for in-depth network metric insights. Used OpenLayers to skillfully display these metrics on interactive maps. To ensure reliability, I implemented automated testing using Cypress and Jest, guaranteeing the seamless performance of the developed solutions while maintaining a high standard of quality.",
    logo: "/images/mentura.jpeg",
    location: "Espoo, Finland",
    technologies: [
      "JavaScript",
      "TypeScript",
      "Python",
      "React",
      "Docker",
      "Express",
      "Node",
      "MongoDB",
      "Material UI",
      "OpenLayers",
      "Kafka",
      "Redis",
      "RxJS",
      "AWS",
      "Cypress",
    ],
  },
  {
    id: "4",
    company: "Integrify Oy",
    position: "Software Engineer",
    period: "April, 2020 - September, 2021",
    description:
      'As a consultant full-stack software engineer, I collaborated on diverse client projects, ensuring applications were customer-centric and exceptional. Utilizing React, Express, Jest, Redux, TypeScript, Node.js, AWS, and Terraform, I enhanced the functionality and scalability of clients products. I played a key role in developing a cutting-edge web application for a leading telecommunications company, leveraging React, Express, Node.js, MongoDB, and AWS to deliver a high-performance solution. My contributions were instrumental in optimizing the application"s performance and user experience.My focus was on crafting solutions that exceeded client expectations, delivering excellence in every aspect of development.',
    logo: "/images/integrify.jpeg",
    location: "Helsinki, Finland",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Express",
      "Node",
      "Redux",
      "AWS",
      "Jest",
      "MongoDB",
      "Material UI",
      "GraphQL",
      "Docker",
      "Python",
      "Numpy",
      "Pandas",
      "Seaborn",
      "Scikit-learn",
    ],
  },
];


export const personalInfo = {
  name: "Shahriar",
  title: "Full Stack Developer",
  location: "Germany",
  email: "shahriarksaurov@gmail.com",
  phone: "+49 1782189734",
  bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. I love turning complex problems into simple, beautiful solutions.",
  mission:
    "My mission is to create digital experiences that make a difference, combining technical excellence with user-centric design.",
  github: "https://github.com/ShahSau",
  linkedin: "https://linkedin.com/in/shahriar-saurov",
  twitter: "https://twitter.com/shah_sau",
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const skillCategories = [
  {
    title: "Languages",
    icon: Laptop,
    iconColor: "text-blue-400",
    skills: ["Python", "JavaScript", "TypeScript", "Go", "C"],
  },
  {
    title: "Frontend",
    icon: Code2,
    iconColor: "text-cyan-400",
    skills: [
      "React",
      "Next.js",
      "Redux",
      "Angular",
      "RxJS",
      "Tailwind CSS",
      "Material UI",
      "Sass",
      "Framer Motion",
      "OpenLayers",
      "Zustand",
      "Zod",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    iconColor: "text-green-400",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Django",
      "Django REST",
      "FastAPI",
      "Go Fiber",
      "Gin",
      "REST API",
      "GraphQL",
      "tRPC",
      "JWT",
    ],
  },
  {
    title: "Database",
    icon: Database,
    iconColor: "text-purple-400",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "MySQL",
      "Prisma",
      "Socket.io",
      "Redis",
      "Apache Kafka",
      "Supabase",
    ],
  },
  {
    title: "DevOps & Testing",
    icon: Wrench,
    iconColor: "text-orange-400",
    skills: [
      "AWS",
      "Azure",
      "Vercel",
      "Firebase",
      "Cypress",
      "Jest",
      "Playwright",
      "Vitest",
      "Nginx",
      "GitHub Actions",
      "GitLab CI",
      "Kubernetes",
      "Docker",
    ],
  },
  {
    title: "Others",
    icon: Package,
    iconColor: "text-pink-400",
    skills: [
      "Linux",
      "Webpack",
      "Git",
      "Grafana",
      "React Native",
      "Apollo GraphQL",
    ],
  },
];