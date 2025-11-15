'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language, TranslationKeys, experienceTranslations, projectTranslations } from '@/i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
  getExperienceDescription: (id: string) => string;
  getProjectDescription: (id: string) => { description: string; longDescription: string };
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      if (saved) {
        setLanguageState(saved as Language);
      }
    }
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language, mounted]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const getExperienceDescription = (id: string): string => {
    const exp = experienceTranslations[language].experiences.find((e) => e.id === id);
    return exp?.description || '';
  };

  const getProjectDescription = (id: string): { description: string; longDescription: string } => {
    const proj = projectTranslations[language].projects.find((p) => p.id === id);
    return proj || { description: '', longDescription: '' };
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language] as TranslationKeys,
    getExperienceDescription,
    getProjectDescription,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
