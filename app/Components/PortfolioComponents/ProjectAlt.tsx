"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import websiteImage from "../../../public/website-demo.jpg";

interface props {
  title: string;
}

export default function ProjectAlt({ title }: props) {
  return (
    <section className="mt-10 mb-24 flex relative mr-64 justify-between">
      <div className="bg-cyan-500 rounded-lg">
        <Image
          src={websiteImage}
          width={800}
          alt=""
          className="ml-auto rounded-lg transition-transform hover:translate-x-2 hover:translate-y-2"
        />
      </div>
      <div className="flex flex-col items-end">
        <p className="text-cyan-500 font-light text-sm">Featured Project</p>
        <h3 className="font-bold text-neutral-300 text-2xl">{title}</h3>

        <p className="w-2/5 mt-20 bg-bradProjectBlue p-7 rounded-lg shadow-2xl text-neutral-400 absolute z-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, nihil
          atque soluta est odio necessitatibus, error aliquid obcaecati id quia
          blanditiis officiis ex maxime rem explicabo cumque ipsa. Voluptate,
          exercitationem?
        </p>

        <div className="text-neutral-400 text-sm mt-52 flex gap-4">
          <p>NextJS</p>
          <p>Tailwind</p>
        </div>
        <div className="text-white mt-4 flex gap-3">
          <a href="">
            <Icon icon={"mingcute:github-line"} width={20} />
          </a>
          <a href="">
            <Icon icon={"majesticons:open-line"} width={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
