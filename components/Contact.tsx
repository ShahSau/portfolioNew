"use client";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";

import SocialLink from "./Hero/SocialLink";
import TerminalContact from "./Terminal/TerminalContact";

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.contact.title}{" "}
            <span className="gradient-text">{t.contact.touch}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-violet-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="glass-effect rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t.contact.info}
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">
                      {t.contact.email}
                    </p>
                    <Link
                      href={`mailto:${personalInfo.email}`}
                      className="text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      {personalInfo.email}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">
                      Phone
                    </p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">
                      {t.about.location}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-4">
                  {t.hero.connect}
                </p>
                <div className="flex items-center space-x-4">
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
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <TerminalContact translation={t} />
          </div>
        </div>
      </div>
    </section>
  );
};
