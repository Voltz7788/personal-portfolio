import React from "react";
import AboutMeText from "./AboutMeComponents/AboutMeText";
import Image from "next/image";
import yannisImage from "../../public/yannis-image.jpg";
import HorizontalBar from "./BarComponents/HorizontalBar";

export default function AboutMe() {
  return (
    <section>
      <div className="text-white mt-sectionGap flex items-center gap-3 ">
        <h2 className="font-bold text-2xl text-neutral-400">
          <span className="text-cyan-500 text-xl align-text-top font-normal">
            02.
          </span>{" "}
          About Me
        </h2>
        <HorizontalBar />
      </div>
      <div className="flex gap-20 mt-16">
        <AboutMeText />
        <Image
          alt="Yannis Madu"
          src={yannisImage}
          width={550}
          height={550}
          className="rounded-xl"
        />
      </div>
    </section>
  );
}
