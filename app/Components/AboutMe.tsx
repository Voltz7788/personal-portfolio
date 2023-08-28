import React from "react";
import AboutMeText from "./AboutMeComponents/AboutMeText";
import Image from "next/image";
import yannisImage from "../../public/yannis-image.jpg";

export default function AboutMe() {
  return (
    <div>
      <div className="text-white mt-sectionGap flex items-center gap-3 ">
        <h2 className="font-bold text-2xl text-neutral-400">
          <span className="text-cyan-500 text-xl align-text-top font-normal">
            02.
          </span>{" "}
          About Me
        </h2>
        <div className="w-1/2 border-t opacity-20 border-cyan-500"></div>
      </div>
      <div className="flex gap-20 mt-16">
        <AboutMeText />
        <Image
          alt="Yannis Madu"
          src={yannisImage}
          width={550}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
