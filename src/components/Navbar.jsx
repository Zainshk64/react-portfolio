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
    <nav ref={navRef} className="w-full md:px-12 backdrop-blur-[10px] transition-all ease-linear fixed p-2 top-0 left-0 z-50 bg- ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-400">Zain.dev</h1>
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-white hover:text-blue-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white" >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 p-3 w-full pb-4 items-center trans flex flex-col gap-4  dark:bg-gray-900">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-white hover:text-blue-500"
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
