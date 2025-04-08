import React from "react";
import { motion } from "framer-motion";
import { Code2, Paintbrush, Smartphone } from "lucide-react";

const skills = [
  {
    title: "Frontend Development",
    icon: <Code2 size={32} />,
    items: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Redux Toolkit"]
  },
  {
    title: "UI Libraries",
    icon: <Paintbrush size={32} />,
    items: ["Material UI", "Flowbite React"]
  },
  {
    title: "Mobile (Basic)",
    icon: <Smartphone size={32} />,
    items: ["React Native"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-12 md:px-16 bg-[#1A374D] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group p-6 rounded-2xl border-2 hover:text-black hover:bg-[#5ADBF5] trans border-cyan-600"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-4 group-hover:text-black text-blue-400">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 ">{skill.title}</h3>
              <ul className="text-gray-300">
                {skill.items.map((item, index) => (
                  <li key={index} className="mb-1  group-hover:text-black">• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
