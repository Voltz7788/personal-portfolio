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
      <Introduction />
      <SocialBar />
      <EmailBar />
      <AboutMe />
    </div>
  );
}
