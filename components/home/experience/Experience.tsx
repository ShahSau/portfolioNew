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
    // description:
    //   "I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier.",
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
      "GatsbyJS"
    ],
  },
  {
    title: "Mentura Group Oy",
    position: "Software Developer",
    time: "February, 2022 - January, 2023",
    location: "Finland",
    // description:
    //   "Data Engineer for store front. Built data pipelines with Spark and Airflow. Saw Bezos one time. He said he liked my paintings. I said I liked his hair.",
    tech: [
      "JavaScript",
      "TypeScript",
      "React",
      "Express",
      "Node",
      "MongoDB",
      "Material UI",
      "Kafka",
      "Redis",
      "RxJS",
    ],
  },
  {
    title: "Integrify",
    position: "Junior Software Engineer",
    time: "April, 2020 - July, 2021",
    location: "Finland",
    // description:
    //   "Data Engineer for store front. Built data pipelines with Spark and Airflow. Saw Bezos one time. He said he liked my paintings. I said I liked his hair.",
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
