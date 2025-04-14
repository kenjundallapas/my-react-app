import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      className="my-12 p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg flex flex-col md:flex-row items-center gap-8" // Added flex布局
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="md:w-1/3">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 mx-auto">
          <img
            src="/images/myimg.png" 
            alt="Kenjun Dallapas"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="md:w-2/3 text-center md:text-left">
        <h2 className="text-3xl font-semibold text-blue-700">About Me</h2>
        <p className="text-lg mt-4 text-gray-600 leading-relaxed">
          I am Kenjun Dallapas, a passionate web developer with a focus on Frontend Development. I love learning new technologies and exploring designs.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutMe;
