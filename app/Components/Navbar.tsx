"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Navbar() {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <nav className="flex text-white px-5 md:px-10 pt-2 pb-1 fixed w-full items-center bg-bradBlue z-20">
      <p className="text-4xl md:text-3xl text-secondaryColor">
        <a href="#top">Y</a>
      </p>
      <div
        className={`ml-auto flex gap-6 font-light invisible md:visible text-md`}
      >
        <a
          href="#top"
          onClick={() => setSelectedTab(1)}
          className={`px-3 py-0.5 ${
            selectedTab === 1 ? "bg-secondaryColor text-black rounded-full" : ""
          }`}
        >
          <span
            className={`${selectedTab === 1 ? "" : "text-secondaryColor "}`}
          >
            01.
          </span>{" "}
          Home
        </a>
        <a
          href="#about"
          onClick={() => setSelectedTab(2)}
          className={`px-3 py-0.5 ${
            selectedTab === 2 ? "bg-secondaryColor text-black rounded-full" : ""
          }`}
        >
          <span
            className={`${selectedTab === 2 ? "" : "text-secondaryColor "}`}
          >
            02.
          </span>{" "}
          About
        </a>
        <a
          href="#work"
          onClick={() => setSelectedTab(3)}
          className={`px-3 py-0.5 ${
            selectedTab === 3 ? "bg-secondaryColor text-black rounded-full" : ""
          }`}
        >
          <span
            className={`${selectedTab === 3 ? "" : "text-secondaryColor "}`}
          >
            03.
          </span>{" "}
          Work
        </a>
        <a
          href="#contact"
          onClick={() => setSelectedTab(4)}
          className={`px-3 py-0.5 ${
            selectedTab === 4 ? "bg-secondaryColor text-black rounded-full" : ""
          }`}
        >
          <span
            className={`${selectedTab === 4 ? "" : "text-secondaryColor "}`}
          >
            04.
          </span>{" "}
          Contact
        </a>
      </div>
      <div className="md:invisible text-secondaryColor">
        <Icon icon={"iconamoon:menu-burger-horizontal"} width={32} />
      </div>
    </nav>
  );
}
