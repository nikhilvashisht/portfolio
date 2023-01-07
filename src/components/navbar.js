import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="flex h-14 justify-between sticky top-0 py-4">
      {/* nav logo */}
      <Link to="home" className="ml-5" duration={500} spy={true} smooth={true} offset={-100}>Nikhil Vashisht</Link>
      {/* nav tags */}
      <ul className="mr-5">
        <li className="inline px-6">
          <Link to="about" duration={500} spy={true} smooth={true} offset={-100}>About</Link>
        </li>
        <li className="inline px-6">
          <Link to="projects" duration={500} spy={true} smooth={true} offset={-100}>Projects</Link>
        </li>
        <li className="inline px-6">
          <Link to="contact" duration={500} spy={true} smooth={true} offset={0}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
