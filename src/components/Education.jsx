import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.section
      id="education"
      className="my-12 p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold text-blue-700">Education</h2>
      <div className="mt-6 space-y-4">
        <div>
          <h3 className="text-xl font-medium text-gray-800">Currently enrolled in BSIT - Web Technologies</h3>
          <p className="text-lg text-gray-600">University of the Cordilleras, 2023-Present</p>
          <p className="text-lg text-gray-600">Relevant coursework: Web Development</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
