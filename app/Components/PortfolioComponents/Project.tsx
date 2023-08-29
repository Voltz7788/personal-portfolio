"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import websiteImage from "../../../public/website-demo.jpg";

interface props {
  title: string;
}

export default function Project({ title }: props) {
  return (
    <section className="mt-10 mb-24 flex flex-col relative max-w-full justify-between 2xl:w-5/6 2xl:flex-row">
      <div className="">
        <p className="text-cyan-500 font-light text-sm">Featured Project</p>
        <h3 className="font-bold text-neutral-300 text-2xl">{title}</h3>

        <p className="w-full 2xl:w-5/12 text-sm md:text-base 2xl:text-sm mt-8 bg-bradProjectBlue p-7 rounded-lg shadow-2xl text-neutral-400 2xl:absolute z-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, nihil
          atque soluta est odio necessitatibus, error aliquid obcaecati id quia
          blanditiis officiis ex maxime rem explicabo cumque ipsa. Voluptate,
          exercitationem?
        </p>

        <div className="text-neutral-400 text-sm mt-5 2xl:mt-52 flex gap-4">
          <p>NextJS</p>
          <p>Tailwind</p>
        </div>
        <div className="text-white mt-4 flex gap-3 ">
          <a href="" className="hover:text-cyan-500">
            <Icon icon={"mingcute:github-line"} width={20} />
          </a>
          <a href="" className="hover:text-cyan-500">
            <Icon icon={"majesticons:open-line"} width={20} />
          </a>
        </div>
      </div>
      <div className="bg-cyan-500 rounded-lg h-1/2 mt-7 2xl:mt-0 2xl:w-2/3">
        <Image
          src={websiteImage}
          alt=""
          className="ml-auto rounded-lg transition-transform hover:-translate-x-2 hover:-translate-y-2 w-full "
        />
      </div>
    </section>
  );
}
