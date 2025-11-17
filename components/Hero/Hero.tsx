"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";

import BeamWelcome from "../BeamWelcome";

import SocialLink from "./SocialLink";
import ScrollIndicator from "./ScrollIndicator";

export const Hero = () => {
  const { t } = useLanguage();
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-400/10 rounded-full blur-3xl animate-float delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="animate-fade-in">
            <BeamWelcome text={t.hero.welcome} />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="block text-gray-900 dark:text-white mb-2">
              {t.hero.hi}{" "}
              <span className="gradient-text">{personalInfo.name}</span>
            </span>
          </h1>

          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-8 animate-slide-up delay-200">
            {personalInfo.title}
          </p>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 animate-slide-up delay-300">
            {t.hero.bio}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up delay-400">
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {t.hero.getInTouch}
            </Link>
            <Link
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {t.hero.viewProjects}
            </Link>
          </div>

          {/*Social Links*/}
          <div className="flex justify-center space-x-6 animate-fade-in delay-500">
            <SocialLink
              link={personalInfo.github}
              Icon={Github}
              arialabel="GitHub"
            />
            <SocialLink
              link={personalInfo.linkedin}
              Icon={Linkedin}
              arialabel="LinkedIn"
            />
            <SocialLink
              link={personalInfo.twitter}
              Icon={Twitter}
              arialabel="Twitter"
            />
            <SocialLink
              link={`mailto:${personalInfo.email}`}
              Icon={Mail}
              arialabel="Email"
            />
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};
