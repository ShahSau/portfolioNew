"use client";

import { useState } from "react";
import { ExternalLink, Github, X, Youtube, Box } from "lucide-react";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { projects } from "@/data/portfolio";
import { Project } from "@/types/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";

export const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState("featured");
  const { t, getProjectDescription } = useLanguage();

  const allTypes = projects.map((project) => project.type);
  const buttonType = Array.from(new Set(allTypes));

  const filteredProjects = projects.filter((project) => {
    if (filter === "featured") {
      return !!project.featured;
    }
    return project.type === filter;
  });

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-800 transition-colors"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.projects.title}{" "}
            <span className="gradient-text">{t.projects.projects}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-violet-500 mx-auto rounded-full mb-8"></div>

          <div className="flex justify-center flex-wrap gap-4">
            <button
              onClick={() => setFilter("featured")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === "featured"
                  ? "bg-gradient-to-r from-purple-600 to-violet-500 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {t.projects.featuredOnly}
            </button>

            {buttonType.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === type
                    ? "bg-gradient-to-r from-purple-600 to-violet-500 text-white shadow-lg"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group glass-effect rounded-2xl overflow-hidden card-hover cursor-pointer ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {getProjectDescription(project.id).description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-1 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {t.projects.viewProject}
                      </span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {t.projects.viewCode}
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-effect rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-transform"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
              {selectedProject.featured && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-violet-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Featured Project
                </div>
              )}
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                {selectedProject.title}
              </h3>
              <p className="text-lg text-purple-600 dark:text-purple-400 mb-6 font-medium">
                {getProjectDescription(selectedProject.id).description}
              </p>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {t.projects.about}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {getProjectDescription(selectedProject.id).longDescription}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {t.projects.technologiesUsed}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-500 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="font-medium">
                      {t.projects.viewProject}
                    </span>
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 transition-all"
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-medium">{t.projects.viewCode}</span>
                  </a>
                )}
                {selectedProject.youtubeLink && (
                  <a
                    href={selectedProject.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 transition-all"
                  >
                    <Youtube className="w-5 h-5" />
                    <span className="font-medium">YouTube</span>
                  </a>
                )}
                {selectedProject.dockerLink && (
                  <a
                    href={selectedProject.dockerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 transition-all"
                  >
                    <Box className="w-5 h-5" />
                    <span className="font-medium">Docker</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
