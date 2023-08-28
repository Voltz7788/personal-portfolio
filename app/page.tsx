import Image from "next/image";
import Navbar from "./Components/Navbar";
import Introduction from "./Components/Introduction";
import SocialBar from "./Components/SocialBar";
import EmailBar from "./Components/EmailBar";
import AboutMe from "./Components/AboutMe";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <div
        className="flex
      flex-col ml-48 px-24"
      >
        <div>
          <Introduction />
          <AboutMe />
        </div>
      </div>
      <SocialBar />
      <EmailBar />
    </div>
  );
}
