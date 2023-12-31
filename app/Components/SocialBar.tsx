"use client";
import React from "react";
import { Icon } from "@iconify/react";
import VerticalBar from "./BarComponents/VerticalBar";

interface props {
  className?: string;
}

export default function SocialBar({ className }: props) {
  return (
    <div
      className={`fixed bottom-0 left-10 flex flex-col gap-8 items-center ${className}`}
    >
      <a
        href="https://github.com/Voltz7788"
        target="_blank"
        className="text-neutral-200 hover:text-secondaryColor transition-all hover:-translate-y-2"
      >
        <Icon icon={"mingcute:github-line"} fontSize={23} />
      </a>
      {/* <a
        href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran"
        target="_blank"
        className="text-neutral-200 hover:text-secondaryColor transition-all hover:-translate-y-2"
      >
        <Icon icon={"iconoir:twitter"} fontSize={22} />
      </a> */}
      <a
        href="https://www.linkedin.com/in/yannis-madu-468970273/"
        target="_blank"
        className="text-neutral-200 hover:text-secondaryColor transition-all hover:-translate-y-2"
      >
        <Icon icon={"lucide:linkedin"} fontSize={20} />
      </a>
      <a
        href="mailto:yannismadu777@gmail.com"
        className="text-neutral-200 hover:text-secondaryColor transition-all hover:-translate-y-2"
      >
        <Icon icon={"mdi:comment-outline"} fontSize={20} />
      </a>
      <VerticalBar />
    </div>
  );
}
