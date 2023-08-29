import React from "react";

interface props {
  title: string;
  widthClass?: string;
}

export default function PopButton({ title, widthClass = "w-40" }: props) {
  return (
    <div className={`${widthClass} h-10 md:h-12 bg-cyan-500 rounded-md`}>
      <button
        className={`border-2 ${widthClass} h-10 md:h-12 border-cyan-500 rounded-md text-cyan-500 text-sm md:text-sm bg-bradBlue transition-transform hover:translate-x-1 hover:translate-y-1`}
      >
        {title}
      </button>
    </div>
  );
}
