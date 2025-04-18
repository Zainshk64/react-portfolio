import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Github, Linkedin } from "lucide-react";
import profile from "../assets/profile.jpg";
import { useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: ["Frontend Developer"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 50,
  });

  return (
    <section id="home" className="py-24  bg-[#142850] text-white pt-28 sm:pt-24 px-12 md:px-16">
      <div className="max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 text-center mb-4 md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-1">
            Hello, It’s Me <span className="text-cyan-400">Zain Ejaz</span>
          </h1>
          <h3 className="text-xl sm:text-2xl mb-6">
            And I'm a <span className="text-cyan-400">{typeEffect}| </span>
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Passionate React developer with experience in Tailwind CSS, Redux Toolkit, and React Native basics. Creating clean, responsive, and interactive UI experiences.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mb-6">
            <a href="https://www.facebook.com/zainsheikh64?mibextid=ZbWKwL" className="text-2xl hover:text-cyan-400"><Facebook /></a>
            <a href="https://github.com/Zainshk64" className="text-2xl hover:text-cyan-400"><Github /></a>
            <a href="https://www.linkedin.com/in/zain-shk-152a7a2ab/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-400"><Linkedin /></a>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
               href="/Zain_Ejaz_Frontend_Developer_Resume.pdf"
              target='_blank'
              className="px-6 py-3 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-600 transition"
            >
              View Resume
            </a>
            <a
              href="https://wa.me/+9203105312929?text=Hello,%20I%20would%20like%20to%20contact%20you!"
              className="px-6 py-3 border-2 border-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-600 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        {/* <motion.div
          className="w-60 h-60 sm:w-72 sm:h-72 mb-4 rounded-xl overflow-hidden border-4 border-cyan-500 shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={profile} alt="Profile" className="w-full h-full object-cover" />
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
