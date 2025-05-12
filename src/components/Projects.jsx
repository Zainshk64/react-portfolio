import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data";
import { Github } from 'lucide-react';



const Projects = () => {
  const [categ, setcateg] = useState('All');
  const tabs = ["All", "react-js", 'html-css', 'native'];

  const filterProj = projects.filter((item) => categ === "All"
    ? projects
    : categ === item.cat);

  return (
    <section className="py-16 px-8 md:px-16 bg-[#121212]" id="projects">
      <div className="text-center mb-20 pt-5 ">
        <h2 className="text-3xl md:text-4xl text-cyan-400 font-semibold mb-2 uppercase ">Projects</h2>
        <h3 className="text-white" >Some <span className="bg-gradient-to-r from-cyan-400 to-gray-500 font-medium text-transparent bg-clip-text">Cool Work</span></h3>
      </div>
      <div className="border-b flex flex-col justify-center items-center gap-3 sm:flex-row border-b-neutral-800 pb-5 text-center mb-8">
        {tabs.map((item, index) => (
          <button
            key={index}
            onClick={() => setcateg(item)}
            className={`px-4 py-2 cursor-pointer border-cyan-400 rounded-md mr-3 font-medium trans ${categ === item
              ? "bg-cyan-600 text-white"
              : "text-cyan-400 border-none  hover:bg-cyan-600 hover:text-white"
              }`}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid mb-14 gap-8 trans md:grid-cols-3 my-5">
          {filterProj.map((project, index) => (
            <motion.div
              key={index}
              className="p-4 group text-white rounded-xl border-2 border-cyan-800 text-left shadow hover:shadow-lg shadow-cyan-200 trans"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <img src={project.img} className="rounded-md" alt="" />
              </div>
              <div >

                <h3 className="text-xl mt-5 font-semibold  mb-2">{project.title}</h3>
                <p className=" text-white opacity-60 mb-4">
                  {project.desc}
                </p>
                {/* <p>Made with: {project.cat.toLocaleUpperCase()}</p> */}
                <div className="flex justify-between" >
                  <a
                    href={project.url}
                    target="_blank"
                    className="text-cyan-500 font-semibold hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.git}
                    target="_blank"
                    className="text-cyan-500 font-semibold hover:underline"
                  >
                    <Github />
                  </a>
                </div>
              </div>

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
