import Image from "next/image";
import Navbar from "./Components/Navbar";
import Introduction from "./Components/Introduction";
import SocialBar from "./Components/SocialBar";
import EmailBar from "./Components/EmailBar";
import AboutMe from "./Components/AboutMe";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Credit from "./Components/Credit";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Navbar />
        <div
          className="flex
        flex-col px-6 md:ml-8 md:px-24 xl:mx-48 lg:mx-28 2xl:mr-0"
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
      <Credit />
    </div>
  );
}
