import React from "react";

export default function AboutMeText() {
  return (
    <div className="flex flex-col gap-8 max-w-xl text-neutral-400 text-md xl:text-lg">
      <p className="">
        {`Hello there! My name is Yannis and I'm a web developer based in London,
        UK. I've been around technology for as long as I remember and have
        always had a deep interest in creating things.`}
        <br />
        <br />
        {`Prior to learning web development, I was a student at the Guildhall
        School of Music and Drama. During my time there, I learnt a lot about
        creativity, mindset and how I learn best. Although I love (and always
        will love) music, I felt that I wanted to explore other creative avenues
        before commiting fully. That's when I started looking into
        programming. Programming has allowed me to address real-world
        challenges, satisfy my creative cravings, and empowered me to learn
        constantly.`}
        <br />
        <br />
        {`Now I use my creative skillset and endless curiosity on a daily basis to
        translate website designs into a reality.`}
      </p>
    </div>
  );
}
