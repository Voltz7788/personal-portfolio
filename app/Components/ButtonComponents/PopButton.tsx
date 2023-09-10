import React from "react";

interface props {
  title: string;
  widthClass?: string;
  href: string;
}

export default function PopButton({ title, widthClass = "w-40", href }: props) {
  return (
    <div className={`${widthClass} h-10 md:h-12 bg-secondaryColor rounded-md`}>
      <a href={href}>
        <button
          className={`border-2 ${widthClass} h-10 md:h-12 border-secondaryColor rounded-md text-secondaryColor text-sm md:text-sm bg-bradBlue transition-transform hover:translate-x-1 hover:translate-y-1`}
        >
          {title}
        </button>
      </a>
    </div>
  );
}
