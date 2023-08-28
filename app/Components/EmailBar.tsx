import React from "react";
import VerticalBar from "./BarComponents/VerticalBar";

export default function EmailBar() {
  return (
    <div className="fixed bottom-0 -right-10">
      <p className="text-neutral-300 rotate-90 mb-32 -ml-28 font-light transition-transform hover:text-cyan-500 hover:-translate-y-2 ">
        yannismadu777@gmail.com
      </p>
      <VerticalBar />
    </div>
  );
}
