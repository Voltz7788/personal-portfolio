import React from "react";

export default function Navbar() {
  return (
    <nav className="flex text-white px-10 py-5 fixed w-full bg-bradBlue z-20">
      <p className="text-2xl text-cyan-500">Y</p>
      <div className="ml-auto flex gap-14 font-extralight">
        <a href="#home">
          <span className="text-cyan-500">01.</span> Home
        </a>
        <a href="#about">
          <span className="text-cyan-500">02.</span> About
        </a>
        <a href="#work">
          <span className="text-cyan-500">03.</span> Work
        </a>
        <a href="#contact">
          <span className="text-cyan-500">04.</span> Contact
        </a>
      </div>
    </nav>
  );
}
