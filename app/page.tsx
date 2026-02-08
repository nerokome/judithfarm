import About from "@/componets/about";
import Contact from "@/componets/Contact";
import Hero from "@/componets/Hero";
import Navbar from "@/componets/Navbar";
import Produce from "@/componets/Produce";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Produce/>
      <Contact  />
    </div>
  );
}
     