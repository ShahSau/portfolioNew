"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { experiences } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export const Experience = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const { t, getExperienceDescription } = useLanguage();

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.experience.title}{" "}
            <span className="gradient-text">{t.experience.experience}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-violet-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-violet-500 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative ${
                  isVisible
                    ? index % 2 === 0
                      ? "animate-slide-in-left"
                      : "animate-slide-in-right"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center">
                  <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg transform -translate-x-1/2"></div>

                  {index % 2 === 0 ? (
                    <>
                      <div className="w-full md:w-1/2 md:pr-8">
                        <div className="glass-effect rounded-2xl p-6 card-hover">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                {exp.position}
                              </h3>
                              <div className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 mb-2">
                                <Briefcase className="w-4 h-4" />
                                <span className="font-semibold">
                                  {exp.company}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm">{exp.period}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">{exp.location}</span>
                              </div>
                            </div>
                            <Image
                              src={exp.logo}
                              alt={exp.company}
                              width={50}
                              height={50}
                              className="rounded-full"
                            />
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-4">
                            {getExperienceDescription(exp.id)}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span key={tech} className="tech-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block w-1/2"></div>
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block w-1/2"></div>
                      <div className="w-full md:w-1/2 md:pl-8">
                        <div className="glass-effect rounded-2xl p-6 card-hover">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                {exp.position}
                              </h3>
                              <div className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 mb-2">
                                <Briefcase className="w-4 h-4" />
                                <span className="font-semibold">
                                  {exp.company}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm">{exp.period}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">{exp.location}</span>
                              </div>
                            </div>
                            <Image
                              src={exp.logo}
                              alt={exp.company}
                              width={50}
                              height={50}
                              className="rounded-full"
                            />
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-4">
                            {getExperienceDescription(exp.id)}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span key={tech} className="tech-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
