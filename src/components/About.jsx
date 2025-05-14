import React from "react";
import { Mail, Phone, User, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-16 px-8  bg-[#121212] text-black  sm:px-16">
      <div className="text-center mb-20 pt-5 ">
        <h2 className="text-3xl md:text-4xl text-cyan-400 font-semibold mb-2 uppercase ">About Me</h2>
        <h3 className="text-white" >Who <span className="bg-gradient-to-r from-cyan-400 to-gray-500 font-medium text-transparent bg-clip-text">Am I</span></h3>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 ">
        <motion.div
          className="max-w-xs rounded-xl shadow-2xl  shadow-cyan-500 sm:max-w-sm"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={profile}
            alt="About Me"
            className="rounded-xl w-full animate-pulse mx-auto md:mx-0"
          />
        </motion.div>

        <motion.div
          className="sm:w-1/2 w-full space-y-6 "
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 leading-relaxed">
            I'm a passionate Frontend Developer with a solid foundation in <span className="text-cyan-500">React-JS</span>  and <span className="text-cyan-500">Tailwind-Css</span>, specializing in crafting modern, responsive, and accessible web interfaces. I take pride in transforming ideas into seamless user experiences through clean and efficient code.
            My toolkit also includes hands-on experience with  <span className="text-cyan-500">Redux-Toolkit, Flowbite, Material-UI</span>, and a foundational understanding of <span className="text-cyan-500">React-Native</span> for mobile development.</p>

          <div className="space-y-3 text-sm sm:text-base">
            <div className="flex items-center gap-3">
              <User className="text-cyan-500" size={18} />
              <span className="font-semibold text-white w-20">Name:</span>
              <span className="text-gray-300">Zain Ejaz</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-cyan-500" size={18} />
              <span className="font-semibold text-white w-20">Phone:</span>
              <span className="text-gray-300">+92-310-5312929</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-cyan-500" size={18} />
              <span className="font-semibold text-white w-20">Email:</span>
              <span className="text-gray-300">zshk599@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="text-cyan-500" size={18} />
              <span className="font-semibold text-white w-20">D.O.B:</span>
              <span className="text-gray-300">March 28, 2003</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
