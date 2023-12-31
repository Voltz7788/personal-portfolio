import React from "react";
import AboutMeText from "./AboutMeComponents/AboutMeText";
import Image from "next/image";
import yannisImage from "../../public/yannis-image.jpg";
import HorizontalBar from "./BarComponents/HorizontalBar";
import DevIcons from "./AboutMeComponents/DevIcons";

export default function AboutMe() {
  return (
    <section id="about">
      <div className="text-white mt-sectionGap flex items-center gap-3">
        <h2 className="font-bold text-xl md:text-2xl text-neutral-400">
          <span className="text-secondaryColor text-xl align-text-top font-normal">
            02.
          </span>{" "}
          About Me
        </h2>
        <HorizontalBar />
      </div>
      <div className="flex flex-col lg:flex-row gap-20 mt-16">
        <AboutMeText />
        <Image
          alt="Yannis Madu"
          src={yannisImage}
          width={500}
          height={500}
          className="rounded-xl object-contain"
        />
      </div>
      <div className="mt-10">
        <h3 className="font-bold text-neutral-400 text-xl md:text-xl">
          Languages and Tools
        </h3>
        <DevIcons />
      </div>
    </section>
  );
}
