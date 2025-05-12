import React from 'react'


const Footer = () => {
    return (
        <footer className="bg-[#121212] border-t border-t-neutral-600   py-5">
        <div className="text-center text-white ">
          © {new Date().getFullYear()} Zain Ejaz. All rights reserved.
        </div>
      </footer>
    );
}
export default Footer;


