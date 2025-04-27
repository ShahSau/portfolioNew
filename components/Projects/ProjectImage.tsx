import React from "react";
import { motion } from "framer-motion";

interface ProjectImageProps {
  imageUrl: string;
  title: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ imageUrl, title }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100 aspect-video w-full"
    >
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        src={imageUrl}
        alt={`${title} project screenshot`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
      />
    </motion.div>
  );
};

export default ProjectImage;
