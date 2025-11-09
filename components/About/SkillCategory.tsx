"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface SkillCategoryProps {
  title: string;
  icon: LucideIcon;
  iconColor: string;
  skills: string[];
  index: number;
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

export default SkillCategory;
