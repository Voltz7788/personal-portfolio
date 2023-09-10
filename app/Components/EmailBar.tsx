import React from "react";
import VerticalBar from "./BarComponents/VerticalBar";

interface props {
  className?: string;
}

export default function EmailBar({ className }: props) {
  return (
    <div className={`fixed bottom-0 -right-10 ${className}`}>
      <a href="mailto:yannismadu777@gmail.com">
        <p className="text-neutral-300 rotate-90 mb-32 -ml-28 font-light transition-transform hover:text-secondaryColor hover:-translate-y-2">
          yannismadu777@gmail.com
        </p>
      </a>
      <VerticalBar />
    </div>
  );
}
