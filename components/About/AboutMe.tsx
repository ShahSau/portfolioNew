"use client";

import {
  personalInfo,
  fadeIn,
  slideInLeft,
  slideInRight,
} from "@/data/portfolio";
import { MapPin, Briefcase, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";

interface AboutMeProps {
  t: any;
}

export const AboutMe = ({ t }: AboutMeProps) => {
  const quickFactsData = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: t.about.location,
      value: personalInfo.location,
      gradient: "from-purple-600 to-violet-600",
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: t.about.experience,
      value: "5+ years of professional experience",
      gradient: "from-violet-600 to-purple-600",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: t.about.focusArea,
      value:
        "Full-stack development, Cloud architecture, Microservices, Security",
      gradient: "from-purple-600 to-violet-600",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: t.about.interests,
      value: "Performance optimization, Mentoring, Clean code practices",
      gradient: "from-violet-600 to-purple-600",
    },
  ];

  return (
    <>
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {t.about.title}{" "}
          <span className="gradient-text bg-gradient-to-r from-purple-600 via-violet-500 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            {t.about.me}
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-violet-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        <motion.div
          className="lg:col-span-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInLeft}
        >
          <div className="glass-effect rounded-2xl p-8 h-full relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-600 to-violet-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              {t.about.myJourney}
              <span className="ml-3 text-3xl font-bold gradient-text">5+</span>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                years
              </span>
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
              {t.about.aboutMyJourney}
            </p>

            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-600 to-violet-500 rounded-full"></div>
              <div className="pl-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg flex items-center">
                  <span className="text-2xl mr-2">💡</span>
                  {t.about.missionStatement}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 italic text-lg leading-relaxed">
                  &quot;{t.about.missionStatementDescription}&quot;
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInRight}
        >
          <div className="glass-effect rounded-2xl p-8 h-full">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t.about.quickFacts}
            </h3>
            <div className="space-y-4">
              {quickFactsData.map((fact, index) => (
                <div
                  key={fact.title}
                  className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-gray-50/50 to-transparent dark:from-gray-700/30 dark:to-transparent hover:from-purple-50 hover:to-violet-50 dark:hover:from-purple-900/20 dark:hover:to-violet-900/20 transition-all duration-300">
                    <div
                      className={`p-2 bg-gradient-to-br ${fact.gradient} rounded-lg text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {fact.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">
                        {fact.title}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {fact.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
