import React from 'react';
import { motion } from 'framer-motion';
import projectDescriptions from '../projectDescriptions';
import firstPortfolio from '../images/Portfolio.jpg';
import audioEditing from '../images/Audio.jpg';
import videoEditing from '../images/Video.jpg';
import frontendProject from '../images/Frontend.png';

const Projects = () => {
  return (
    <motion.section id="projects" className="my-12">
      <h2 className="text-3xl font-semibold text-blue-700 mb-8 text-center dark:text-blue-400">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="project-card dark:bg-gray-800 dark:shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">First Portfolio</h3>
          <p className="text-gray-600 mt-2 dark:text-gray-300">{projectDescriptions['First Portfolio']}</p>
          <div className="mt-4">
            <img
              src={firstPortfolio}
              alt="First Portfolio"
              className="w-full rounded-md"
            />
          </div>
        </div>
        <div className="project-card dark:bg-gray-800 dark:shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Audio Editing</h3>
          <p className="text-gray-600 mt-2 dark:text-gray-300">{projectDescriptions['Audio Editing']}</p>
           <div className="mt-4">
            <img
              src={audioEditing}
              alt="Audio Editing"
              className="w-full rounded-md"
            />
          </div>
        </div>
        <div className="project-card dark:bg-gray-800 dark:shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Video Editing</h3>
          <p className="text-gray-600 mt-2 dark:text-gray-300">{projectDescriptions['Video Editing']}</p>
          <div className="mt-4">
            <img
              src={videoEditing}
              alt="Video Editing"
              className="w-full rounded-md"
            />
          </div>
        </div>
        <div className="project-card dark:bg-gray-800 dark:shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Frontend Project</h3>
          <p className="text-gray-600 mt-2 dark:text-gray-300">{projectDescriptions['Frontend Project']}</p>
          <div className="mt-4">
            <img
              src={frontendProject}
              alt="Frontend Project"
              className="w-full rounded-md"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
