import Image from "next/image";
import Navbar from "./Components/Navbar";
import Introduction from "./Components/Introduction";
import SocialBar from "./Components/SocialBar";
import EmailBar from "./Components/EmailBar";
import AboutMe from "./Components/AboutMe";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <div
        className="flex
      flex-col ml-8 px-24 lg:ml-48"
      >
        <div>
          <Introduction />
          <AboutMe />
          <Portfolio />
          <Contact />
        </div>
      </div>
      <SocialBar className="invisible lg:visible" />
      <EmailBar className="invisible lg:visible" />
    </div>
  );
}
