import React from "react";
import { motion } from "framer-motion";
import { IoLogoDocker } from "react-icons/io5";
import { LuGithub, LuYoutube, LuExternalLink } from "react-icons/lu";
import { ProjectLink } from "../../app/types/project";

interface ProjectLinksProps {
  links: ProjectLink[];
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ links }) => {
  const getLinkIcon = (type: string) => {
    switch (type) {
      case "github":
        return <LuGithub className="w-5 h-5" />;
      case "youtube":
        return <LuYoutube className="w-5 h-5" />;
      case "demo":
        return <LuExternalLink className="w-5 h-5" />;
      case "docker":
        return <IoLogoDocker className="w-5 h-5" />;
      default:
        return <LuExternalLink className="w-5 h-5" />;
    }
  };

  const getLinkLabel = (type: string) => {
    switch (type) {
      case "github":
        return "GitHub";
      case "youtube":
        return "YouTube";
      case "demo":
        return "Demo";
      default:
        return "Visit";
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-900">Project Links</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {links.map((link, index) =>
          link.url ? (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-colors duration-300 hover:shadow-md group"
            >
              <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                {getLinkIcon(link.type)}
              </span>
              <span className="font-medium">{getLinkLabel(link.type)}</span>
            </motion.a>
          ) : null
        )}
      </div>
    </div>
  );
};

export default ProjectLinks;
