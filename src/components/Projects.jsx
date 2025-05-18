import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data";
import { Github, Globe } from 'lucide-react';
// import netlifyicon from '../assets/netlifyico.png'
import netlifyicon from '../assets/netlifyico.webp'

import pic1 from '../assets/app/1.jpg'
import pic2 from '../assets/app/2.jpg'
import pic3 from '../assets/app/3.jpg'
import pic4 from '../assets/app/4.jpg'
import pic5 from '../assets/app/5.jpg'
import pic6 from '../assets/app/6.jpg'
import pic7 from '../assets/app/7.jpg'
import pic8 from '../assets/app/8.jpg'




const Images = [
  pic1,
  pic2,
  pic3,
  pic5,
  pic4,
  pic6,
  pic7,
  pic8

]



const Projects = () => {
  const [categ, setcateg] = useState('All');
  const tabs = ["All", 'html-css', "react-js", 'react-native', 'next-js'];

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
              className="p-4 group flex flex-col justify-between text-white rounded-xl border border-cyan-900 text-left shadow hover:shadow-lg shadow-cyan-200 trans"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <img src={project.img} className="rounded-md h-40" alt="" />
              </div>
              <div className="mb-6">
                <h3 className="text-xl mt-5 font-semibold  mb-2">{project.title}</h3>
                <div className="flex space-x-2 mb-4">
                  {Object.values(project.toolicon).map((icon, i) => (
                    <img key={i} src={icon} alt={`tool-${i}`} className={`h-8 w-8 `} />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between" >
                <a
                  href={project.url}
                  target="_blank"
                  className="text-cyan-500 inline-flex items-center gap-1 font-semibold hover:underline"
                >
                  <Globe size={20}/>Live Demo
                </a>
                <a
                  href={project.git}
                  target="_blank"
                  className="text-cyan-500 font-semibold hover:underline"
                >
                  {
                    project.mode === 'net' ? <img src={netlifyicon} className="invert" width={30} alt="" /> : <Github />
                  }

                </a>
              </div>

            </motion.div>
          ))}

        </div>
        {
          categ === "react-native" &&
          <div className="grid pb-10 scale-90 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5" >
            {Images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                className="object-cover h-full rounded-lg shadow-md"
              />
            ))}

          </div>
        }

        <span className="px-6 py-3 border-2 border-cyan-600 text-white rounded-full font-semibold hover:bg-cyan-600 trans">
          <a href="https://app.netlify.com/teams/zshk599/sites">
            View More Projects ↗
          </a>
        </span>
      </div>
    </section>
  );
};

export default Projects;
