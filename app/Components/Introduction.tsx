import React from "react";
import { Montserrat } from "next/font/google";
import PopButton from "./ButtonComponents/PopButton";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Introduction() {
  return (
    <section id="home" className={`${montserrat.className} my-64`}>
      <p className="text-lg md:text-sm text-secondaryColor">Hi, my name is</p>
      <h1 className="text-neutral-200 text-5xl font-bold mt-8 md:text-6xl">
        Yannis Madu.
      </h1>
      <p className="text-[#AAC5DB] text-5xl font-bold mt-6 md:text-6xl">
        I build cool websites.
      </p>
      <p className="text-neutral-400 mt-7 mb-10 text-sm sm:text-base">
        {`I'm a Front End Developer who designs
        and builds engaging interactive experiences :)`}
      </p>
      <PopButton title="Learn More!" href="#about" />
    </section>
  );
}
