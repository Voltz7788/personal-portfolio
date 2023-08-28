import React from "react";
import { Montserrat } from "next/font/google";
import PopButton from "./ButtonComponents/PopButton";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Introduction() {
  return (
    <section className={`${montserrat.className} my-64 max-w-4xl`}>
      <p className="text-sm text-cyan-500">Hi, my name is</p>
      <h1 className="text-neutral-200 text-6xl font-bold mt-8">Yannis Madu.</h1>
      <p className="text-slate-400 text-6xl font-bold mt-6">
        I build cool websites.
      </p>
      <p className="text-neutral-400 mt-7 mb-10">
        {`More formally, I'm a Front End Developer for no one currently. I design
        and build engaging interactive experiences.`}
      </p>
      <PopButton title="Learn More!" />
    </section>
  );
}
