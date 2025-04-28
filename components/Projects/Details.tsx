import React, { useEffect, FC } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectImage from "./ProjectImage";
import ProjectLinks from "./ProjectLinks";
import TechStack from "./TechStack";
import { IProject } from "../../app/types/project";

interface DetailsProps {
  project: IProject;
}

const Details: FC<DetailsProps> = ({ project }) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const titleY = useTransform(scrollY, [0, 300], [0, 100]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div className="relative h-screen w-full overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-black/50"
          style={{ opacity }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity, y: titleY }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center px-4">
            {project.title}
          </h1>
        </motion.div>
      </motion.div>

      <div className="bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-16 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative">
            <div className="relative order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="prose prose-lg text-gray-600"
              >
                <>{project.description}</>
              </motion.div>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 hidden md:block" />
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <ProjectLinks links={project.links} />
                <TechStack technologies={project.technologies} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
