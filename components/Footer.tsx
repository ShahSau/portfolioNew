"use client";

import { Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              {currentYear} &copy; {personalInfo.name}. {t.footer.rights}
            </p>
          </div>

          <div className="flex items-center space-x-1 text-gray-400">
            <span>{t.footer.builtWith}</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>{t.footer.in} Berlin</span>
          </div>

          <div></div>
        </div>
      </div>
    </footer>
  );
};
