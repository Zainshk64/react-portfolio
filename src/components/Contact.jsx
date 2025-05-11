import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-[#1a374dd7]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl text-white font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <p className="text-gray-200  opacity-60 mb-8">
          Feel free to reach out via email or connect with me on LinkedIn!
        </p>

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