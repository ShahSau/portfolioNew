import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="r" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Grundium",
    position: "Web Engineer",
    time: "January, 2023 - Present",
    location: "Finland",
    // description: "",
    tech: [
      "JavaScript",
      "React",
      "TypeScript",
      "Next",
      "Angular",
      "Express",
      "Node",
      "MongoDB",
      "JAMstack",
      "Tailwind",
      "GraphQL",
      "RxJS",
      "GatsbyJS",
      "Cypress
    ],
  },
  {
    title: "Mentura Group Oy",
    position: "Software Developer",
    time: "October, 2021 - January, 2023",
    location: "Finland",
    // description: "",
    tech: [
      "JavaScript",
      "TypeScript",
      "React",
      "Express",
      "Python"
      "Node",
      "MongoDB",
      "Material UI",
      "Kafka",
      "Redis",
      "RxJS",
      "Cypress"
    ],
  },
  {
    title: "Integrify",
    position: "Junior Software Engineer",
    time: "April, 2020 - July, 2021",
    location: "Finland",
    // description:""
    tech: [
      "JavaScript",
      "React",
      "Express",
      "Node",
      "MongoDB",
      "Python",
      "Numpy",
      "Pandas",
      "Seaborn",
      "Scikit-learn",
    ],
  },
];
