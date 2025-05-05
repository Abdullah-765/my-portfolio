import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
    return (
      <div className="mt-[40px] font-bold text-2xl justify-self-center flex border-black border-3 w-[80%] flex-row justify-around h-[80px] text-black items-center bg-amber-400 shadow-custom">
        <Link href={"/"} className="text-4xl font-bold">Abdullah</Link>
        <ul className="flex gap-x-[30px]">
            <li className="hover:underline"><a href="#about">About Me</a></li>
            <li className="hover:underline"><a href="">Projects</a></li>
        </ul>
        <ul><Button variant={"ghost"} className="bg-transparent border-3 border-black text-2xl font-bold rounded-none p-5 text-black shadow-custom hover:shadow-none">Contact Me</Button></ul>
      </div>
    );
  }
  