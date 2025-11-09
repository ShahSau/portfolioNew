"use client";

import {
  Code2,
  Database,
  Wrench,
  Server,
  Laptop,
  Package,
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

interface SkillCategoryProps {
  title: string;
  icon: LucideIcon;
  iconColor: string;
  skills: string[];
  index: number;
}
interface AboutMeProps {
  t: any;
}
const SkillCategory = ({
  title,
  icon: Icon,
  iconColor,
  skills,
  index,
}: SkillCategoryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-purple-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 h-full shadow-sm dark:shadow-none glass-effect">
        <div className="flex items-center gap-3 mb-6">
          <Icon className={`w-7 h-7 ${iconColor}`} />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, skillIndex) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.1 + skillIndex * 0.03,
              }}
              className="tech-tag"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const skillCategories = [
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

export const Skills = ({ t }: AboutMeProps) => {
  return (
    <div className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h6 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {t.about.skills}
        </h6>

        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {t.about.skillsDescription}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={category.title}
            title={category.title}
            icon={category.icon}
            iconColor={category.iconColor}
            skills={category.skills}
            index={index}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20 text-center"
      >
        <p className="text-gray-500 dark:text-gray-500 italic">
          {t.about.skillsConclusion}
        </p>
      </motion.div>
    </div>
  );
};
