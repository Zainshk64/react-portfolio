import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "Tailwind CSS", "Bootstrap","JavaScript", "React-Js", "Next-Js"]
  },
  {
    category: "UI Libraries",
    items: ["Material UI", "Flowbite React", "Next Themes", "Shadcn-Ui", "Aceternity-Ui"]
  },
  {
    category: "Mobile ",
    items: ["React Native (Basic)"]
  },
];


const Skills = () => {
  return (
   <section id="skills" className="py-16 px-6 md:px-16 bg-[#121212] text-white">
  <div className="text-center mb-16 pt-5">
    <h2 className="text-3xl md:text-4xl text-cyan-400 font-semibold mb-2 uppercase">Skills</h2>
    <h3 className="text-white">
      What <span className="bg-gradient-to-r from-cyan-400 to-gray-500 font-medium text-transparent bg-clip-text">I Know</span>
    </h3>
  </div>

  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    {skills.map((skill, index) => (
      <motion.div
        key={index}
        className="p-6 bg-[#1e1e1e] hover:-translate-y-3 trans rounded-xl shadow-md border border-cyan-600"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold text-cyan-400 mb-4">{skill.category}</h3>
        <div className="flex flex-wrap gap-2">
          {skill.items.map((item, i) => (
            <span key={i} className="bg-cyan-700/30 text-sm px-3 py-1 rounded-full text-white border border-cyan-600">
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</section>

  );
};

export default Skills;
