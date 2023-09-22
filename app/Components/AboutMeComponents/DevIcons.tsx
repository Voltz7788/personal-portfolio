import React from "react";
import Image from "next/image";

// Images
import TypescriptIcon from "../../../public/typescript-original.svg";
import HTMLIcon from "../../../public/html5-original.svg";
import CSSIcon from "../../../public/css3-original.svg";
import JavascriptIcon from "../../../public/javascript-original.svg";
import ReactIcon from "../../../public/react-original.svg";
import NextjsIcon from "../../../public/nextjs-original.svg";
import GitIcon from "../../../public/git-original.svg";
import npmIcon from "../../../public/npm-original-wordmark.svg";
import MongoDBIcon from "../../../public/mongodb-original-wordmark.svg";
import WebpackIcon from "../../../public/webpack-original.svg";
import TailwindCSSIcon from "../../../public/tailwindcss-plain.svg";
import BashIcon from "../../../public/bash-original.svg";
import UbuntuIcon from "../../../public/ubuntu-plain.svg";
import VSCodeIcon from "../../../public/vscode-original.svg";
import JestIcon from "../../../public/jest-plain.svg";
import NodejsIcon from "../../../public/nodejs-original.svg";
import ExpressjsIcon from "../../../public/express-original.svg";

export default function DevIcons() {
  return (
    <div className="md:w-3/4 flex mt-10 flex-wrap gap-14 w-full">
      <Image src={TypescriptIcon} alt="Typescript" width={50} />
      <Image src={HTMLIcon} alt="HTML" width={50} />
      <Image src={CSSIcon} alt="CSS" width={50} />
      <Image src={JavascriptIcon} alt="Javascript" width={50} />
      <Image src={ReactIcon} alt="React" width={50} />
      <Image src={NextjsIcon} alt="Next.js" width={50} />
      <Image src={GitIcon} alt="Git" width={50} />
      <Image src={npmIcon} alt="npm" width={50} />
      <Image src={MongoDBIcon} alt="MongoDB" width={50} />
      <Image src={WebpackIcon} alt="Webpack" width={50} />
      <Image src={TailwindCSSIcon} alt="TailwindCSS" width={50} />
      <Image src={NodejsIcon} alt="Node.js" width={50} />
      <Image src={ExpressjsIcon} alt="Express.js" width={50} />
      <Image src={JestIcon} alt="Jest" width={50} />
      <Image src={BashIcon} alt="Bash" width={50} />
      <Image src={UbuntuIcon} alt="Ubuntu" width={50} />
      <Image src={VSCodeIcon} alt="VSCode" width={50} />
    </div>
  );
}
