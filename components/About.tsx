'use client';


import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { skills, personalInfo } from '@/data/portfolio';
import { Code2, Database, Cloud } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const { t } = useLanguage();

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryIcons = {
    Frontend: <Code2 className="w-6 h-6" />,
    Backend: <Database className="w-6 h-6" />,
    DevOps: <Cloud className="w-6 h-6" />,
  };

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800 transition-colors"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.about.title} <span className="gradient-text">{t.about.me}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-violet-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div
            className={`${
              isVisible ? 'animate-slide-in-left' : 'opacity-0'
            }`}
          >
            <div className="glass-effect rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t.about.myJourney}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {personalInfo.bio}
              </p>
              <div className="bg-gradient-to-r from-purple-50/50 to-violet-50/50 dark:from-purple-900/10 dark:to-violet-900/10 rounded-xl p-6 border border-purple-200/50 dark:border-purple-800/30">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {t.about.missionStatement}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {personalInfo.mission}
                </p>
              </div>
            </div>
          </div>

          <div
            className={`${
              isVisible ? 'animate-slide-in-right' : 'opacity-0'
            }`}
          >
            <div className="glass-effect rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t.about.quickFacts}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {t.about.location}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {t.about.experience}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      5+ years in web development
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Focus Areas
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Full-stack development, Cloud architecture, UI/UX
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Interests
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Open source, Performance optimization, Mentoring
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            isVisible ? 'animate-slide-up delay-300' : 'opacity-0'
          }`}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t.about.skills}
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div
                key={category}
                className="glass-effect rounded-2xl p-6 card-hover"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg text-white">
                    {categoryIcons[category as keyof typeof categoryIcons]}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category}
                  </h4>
                </div>
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-bar-fill"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
