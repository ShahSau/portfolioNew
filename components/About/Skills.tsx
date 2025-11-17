"use client";

import { motion } from "framer-motion";

import { skillCategories } from "@/data/portfolio";

import SkillCategory from "./SkillCategory";

interface AboutMeProps {
  t: any;
}

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
