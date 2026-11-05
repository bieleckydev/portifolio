import React, { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { useSectionReveal } from './hooks/useSectionReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function AppContent() {
  useSectionReveal();

  // High-performance IntersectionObserver Reveal Animations (zero layout thrashing)
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12,
    });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    // Also observe dynamically loaded elements
    const mutationObserver = new MutationObserver(() => {
      const unrevealed = document.querySelectorAll('.reveal:not(.active)');
      unrevealed.forEach((el) => observer.observe(el));
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div id="portfolio-app">
      <Navbar />

      <main id="main-portfolio-content">
        <Hero />

        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
