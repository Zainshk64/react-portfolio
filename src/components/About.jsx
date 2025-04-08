import React from "react";
import { Mail, Phone, User, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg"; 

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-[#27496D] text-white px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={profile} 
            alt="About Me"
            className="rounded-xl w-full max-w-sm mx-auto md:mx-0"
          />
        </motion.div>

        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm a Frontend Developer with a strong grip on React.js and Tailwind CSS. I enjoy building responsive, user-friendly interfaces. I also have hands-on experience with Redux Toolkit, Flowbite, Material-UI, and basic React Native. Always eager to learn and grow by taking on new challenges.
          </p>

          <div className="space-y-3 text-sm sm:text-base">
            <div className="flex items-center gap-3">
              <User className="text-blue-400" size={18} />
              <span className="font-semibold text-white w-20">Name:</span>
              <span className="text-gray-300">Zain Ejaz</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-blue-400" size={18} />
              <span className="font-semibold text-white w-20">Phone:</span>
              <span className="text-gray-300">+92-310-5312929</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-blue-400" size={18} />
              <span className="font-semibold text-white w-20">Email:</span>
              <span className="text-gray-300">zshk599@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="text-blue-400" size={18} />
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
