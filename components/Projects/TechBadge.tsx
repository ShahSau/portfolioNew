import React from "react";
import { motion } from "framer-motion";
import { Technology } from "../../app/types/project";

interface TechBadgeProps {
  tech: Technology;
  index: number;
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const TechBadge: React.FC<TechBadgeProps> = ({ tech, index }) => {
  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.05, y: -2 }}
      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
      style={{
        backgroundColor: `${tech.color}20`,
        color: tech.color,
        border: `1px solid ${tech.color}40`,
      }}
    >
      {tech.name}
    </motion.div>
  );
};

export default TechBadge;
