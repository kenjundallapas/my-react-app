import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <header className="bg-blue-600 text-white py-4 flex justify-between items-center px-6 dark:bg-blue-800">
        <h1 className="text-xl font-bold">Ken's Portfolio</h1>
        <button
          onClick={toggleDarkMode}
          className="px-3 py-1 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200"
        >
          {isDarkMode ? 'Light' : 'Dark'}
        </button>
      </header>

      <main className="min-h-screen">
        <section id="home" className="py-16 md:py-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4"
          >
            Kenjun Dallapas
          </motion.h2>
          <motion.p  
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Frontend Developer
          </motion.p>
          <button 
            onClick={scrollToProjects}
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-300 shadow-lg"
          >
            View Latest Projects
          </button>
        </section>
        <AboutMe />
        <section ref={projectsRef}>
          <Projects />
        </section>
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>

      <footer className="bg-gray-800 text-white text-center py-4 mt-8 dark:bg-gray-900">
        &copy; {new Date().getFullYear()} Kenjun Dallapas. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
