import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Food Order Website",
    desc:
      "Built using React, Tailwind CSS, and Redux Toolkit. Features responsive design and state management for cart and filters.",
    url: "https://food-r-redux.vercel.app/",
  },
  {
    title: "Nexcent UI Clone",
    desc:
      "A modern business website layout built with React and styled using Flowbite.",
    url: "https://react-nexcent-zs.netlify.app/",
  },
  {
    title: "VirtualIR Landing Page",
    desc:
      "Professional landing page designed in React with Material UI components and responsive design.",
    url: "https://react-virtual-zs.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-14 md:px-16 bg-[#121212]" id="projects">
  
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid mb-14 gap-8 trans md:grid-cols-3 my-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-6 group  text-white rounded-xl text-left shadow-sm  hover:shadow-lg shadow-cyan-200 trans"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold  mb-2">{project.title}</h3>
              <p className=" text-white opacity-60 mb-4">
                {project.desc}
              </p>
              <a
                href={project.url}
                target="_blank"
                className="text-cyan-600 font-semibold hover:underline"
              >
                Live Demo
              </a>
            </motion.div>
          ))}
        </div>

        <span className="px-6 py-3 border-2 border-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-600 trans">
          <a href="https://app.netlify.com/teams/zshk599/sites">
            View More Projects ↗
          </a>
        </span>
      </div>
    </section>
  );
};

export default Projects;
