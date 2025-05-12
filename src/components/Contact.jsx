import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-[#121212]">
           <div className="text-center mb-20 pt-5 ">
          <h2 className="text-3xl md:text-4xl text-cyan-400 font-semibold mb-2 uppercase ">Contact Me</h2>
          <h3 className="text-white" >Get <span className="bg-gradient-to-r from-cyan-400 to-gray-500 font-medium text-transparent bg-clip-text">In Touch</span></h3>
      </div>
      <div className="max-w-4xl mx-auto text-center">
      
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-left">
          <div className="flex items-center gap-3">
            <Mail className="text-[#5ADBF5]"/>
            <a href="mailto:zshk599@gmail.com" className="text-white hover:underline">
              zshk599@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Linkedin className="text-[#5ADBF5]" />
            <a
              href="https://www.linkedin.com/in/zain-ejaz-152a7a2ab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-[#5ADBF5]"/>
            <span className="text-white">Rawalipindi, Pakistan</span>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Contact;