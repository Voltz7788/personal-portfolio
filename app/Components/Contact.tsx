import React from "react";
import PopButton from "./ButtonComponents/PopButton";

export default function Contact() {
  return (
    <section
      id="contact"
      className="justify-center flex mt-sectionGap mb-contactGap xl:pr-56"
    >
      <div className="flex flex-col gap-6">
        <h2 className="text-sm text-secondaryColor ">{`04. What's Next?`}</h2>
        <p className="text-4xl text-neutral-300 font-bold">{`Don't Be Shy`}</p>
        <p className="text-neutral-400">
          {`My inbox is open. I'm always happy to answer a question or chat about
            code.`}
        </p>
        <PopButton
          title="Say Hello"
          widthClass="w-32"
          href="mailto:yannismadu777@gmail.com"
        />
      </div>
    </section>
  );
}
