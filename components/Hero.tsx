'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [rgbRandom, setRgbRandom] = useState("rgb(255, 0, 0)");

  useEffect(() => {
    const interval = setInterval(() => {
      const r = Math.floor(Math.random() * 210);
      const g = Math.floor(Math.random() * 210);
      const b = Math.floor(Math.random() * 210);
      setRgbRandom(`rgb(${r}, ${g}, ${b})`);
    }, 2000);

    return () => clearInterval(interval); // clean up on unmount
  }, []);

  return (
    <div className="flex items-center justify-around justify-self-center mt-[100px] gap-y-[20px] lg:flex-row md:flex-row flex-col p-[10px] ">
      <ul className="sm:w-[40%] w-full relative flex-col flex gap-y-[40px]">
        <li
          style={{ color: rgbRandom }}
          className="transition-colors duration-1000 text-6xl md:text-[8vw] lg:leading-28 font-bold text-shadow-custom" 
        >
          Abdullah <br /><span className="text-amber-400">Arshad</span>
        </li>
        <li className="text-lg">
        I’m a frontend developer with a passion for clean UI and currently expanding into backend development.
        </li>
        <ul className="flex justify-between items-center gap-[10px] flex-wrap">
        <a href="#projects"><Button variant={"ghost"} className="bg-amber-400 border-3 border-black text-xl font-bold rounded-none p-5 text-black shadow-custom hover:shadow-none">Checkout My work</Button></a>
        <a href="#contact"><Button variant={"ghost"} className="bg-amber-400 border-3 border-black text-xl font-bold rounded-none p-5 text-black shadow-custom hover:shadow-none">Contact Me</Button></a>
        
        </ul>
      </ul>

      <ul>
        <Image
          alt="dev-art"
          src="/dev-logo.png"
          width={0}
          layout="responsive"
          height={0}
          className="max-w-[500px]"
        />
      </ul>
    </div>
  );
}
