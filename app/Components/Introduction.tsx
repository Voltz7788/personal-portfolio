import React from "react";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Introduction() {
  return (
    <div className={`${montserrat.className} my-72 ml-72 max-w-4xl`}>
      <p className="text-sm text-cyan-500">Hi, my name is</p>
      <h1 className="text-neutral-200 text-6xl font-bold mt-8">Yannis Madu.</h1>
      <p className="text-slate-400 text-6xl font-bold mt-6">
        I build cool websites.
      </p>
      <p className="text-neutral-400 mt-7">
        {`More formally, I'm a Front End Developer for no one currently. I design
        and build engaging interactive experiences.`}
      </p>
      <button className="border-2 px-7 py-3 border-cyan-500 rounded-md text-cyan-500 text-sm mt-10">
        Learn More!
      </button>
    </div>
  );
}
