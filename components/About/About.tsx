"use client";

import { useLanguage } from "@/contexts/LanguageContext";

import { AboutMe } from "./AboutMe";
import { Skills } from "./Skills";

export const About = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800 transition-colors relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* AboutMe component */}
        <AboutMe t={t} />

        {/* Skills component */}
        <Skills t={t} />
      </div>
    </section>
  );
};
