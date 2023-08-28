import Image from "next/image";
import Navbar from "./Components/Navbar";
import Introduction from "./Components/Introduction";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Introduction></Introduction>
    </div>
  );
}
