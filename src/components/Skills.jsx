import { motion } from 'framer-motion';

const Skills = () => {
  const skills = ['React JS', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'Git'];
  return (
    <motion.section
      id="skills"
      className="my-12 p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold text-blue-700">Skills</h2>
      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="text-lg text-white bg-gradient-to-r from-blue-900 to-blue-800 p-5 rounded-lg shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-blue-800 hover:to-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Skills;
