import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { useSectionReveal } from './hooks/useSectionReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CaseStudy from './components/CaseStudy';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
  useSectionReveal();

  return (
    <div id="portfolio-app">
      <Navbar />

      <main id="main-portfolio-content">
        <Hero />
        <CaseStudy />
        <Projects />
        <About />
        <Experience />
        <Contact />
      </main>

      <Footer />
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
