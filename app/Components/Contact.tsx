import React from "react";
import PopButton from "./ButtonComponents/PopButton";

export default function Contact() {
  return (
    <section className="justify-center flex mt-sectionGap mb-sectionGap -ml-40">
      <div className="flex flex-col gap-6">
        <h2 className="text-sm text-cyan-500">{`04. What's Next?`}</h2>
        <p className="text-4xl text-neutral-300 font-bold">{`Don't Be Shy`}</p>
        <p className="text-neutral-400">
          {`My inbox is open. I'm always happy to answer a question or chat about
            code.`}
        </p>
        <PopButton title="Say Hello" widthClass="w-32" />
      </div>
    </section>
  );
}
