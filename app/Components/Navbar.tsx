"use client";
import React from "react";
import { Icon } from "@iconify/react";

export default function Navbar() {
  return (
    <nav className="flex text-white px-10 py-5 fixed w-full bg-bradBlue z-20">
      <p className="text-4xl md:text-3xl text-cyan-500">Y</p>
      <div className="ml-auto flex gap-14 font-extralight invisible md:visible">
        <a href="#top">
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
      <div className="md:invisible text-cyan-500">
        <Icon icon={"iconamoon:menu-burger-horizontal"} width={32} />
      </div>
    </nav>
  );
}
