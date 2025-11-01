'use client';

import { useDarkMode } from '@/hooks/useDarkMode';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { BackToTop } from '@/components/BackToTop';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function Home() {
  const { isDark, toggle } = useDarkMode();

  return (
    <LanguageProvider>
      <div className={`${isDark ? 'dark' : ''}`}>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <ScrollProgress />
          <Navigation isDark={isDark} toggleDark={toggle} />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
          <BackToTop />
        </div>
      </div>
    </LanguageProvider>
  );
}
