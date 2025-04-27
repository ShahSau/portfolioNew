import React from "react";
import { motion } from "framer-motion";
import TechBadge from "./TechBadge";
import { Technology } from "../../app/types/project";

interface TechStackProps {
  technologies: Technology[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-900">Built with</h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap gap-2"
      >
        {technologies.map((tech, index) => (
          <TechBadge key={index} tech={tech} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;
