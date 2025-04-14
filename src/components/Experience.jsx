import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="my-12 p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold text-blue-700">Experience</h2>
      <div className="mt-6 space-y-4">
        <div>
          <h3 className="text-xl font-medium text-gray-800">Projects</h3>
          <p className="text-lg text-gray-600">S.Y. 2023-Present</p>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-1">
            <li>Built a responsive portfolio using React JS and Tailwind CSS to showcase my skills and education..</li>
            <li>Created multiple portfolios using VS Code and Wix</li>
            <li>Created simple apps using VS code</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
