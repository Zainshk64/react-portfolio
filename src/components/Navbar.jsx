import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  const navRef = useRef();
  
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 80) {
      navRef.current.classList.add("navbg");
    } else {
      navRef.current.classList.remove("navbg");
    }
  });
  return (
    <nav ref={navRef} className="w-full md:px-12 backdrop-blur-[30px] transition-all ease-linear fixed p-2 top-0 left-0  z-10 ">
      <div className="max-w-7xl mx-auto px-4 py-3 z-50 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">Zain.dev</h1>
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="!text-cyan-400"
              className="cursor-pointer text-lg text-white hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}

        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white" >
            {isOpen ? <X size={24} className="absolute z-80 top-5 right-5 " /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden navbg absolute top-0 w-full left-0 right-0 z-50 trans h-screen text-center justify-center items-center trans flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-xxl text-white hover:text-cyan-400"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
