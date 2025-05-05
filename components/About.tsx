import Image from "next/image";
export default function About() {
  return (
        <ul className="bg-amber-400 border-5 border-black p-[50px] h-[70vh] mt-[110px] gap-y-[40px] flex flex-col items-center justify-center">
             <li>
                <h1 className="text-5xl font-bold text-center">About Me</h1>
            </li>
            <li className="text-2xl text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sequi! Perferendis enim at facere, eligendi magni iure, sit iste a, suscipit aperiam odit sunt est qui ratione dolorum saepe officia.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sequi!     Perferendis enim at facere, eligendi magni iure, sit iste a, suscipit aperiam odit sunt est qui ratione dolorum saepe officia.
            </li>
            <li className="text-2xl text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sequi!     Perferendis enim at facere, eligendi magni iure, sit iste a, suscipit aperiam odit sunt est qui ratione dolorum saepe officia.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sequi!     Perferendis enim at facere, eligendi magni iure, sit iste a, suscipit aperiam odit sunt est qui ratione dolorum saepe officia.
            </li>
            <ul className="flex gap-x-[20px]">
              <li><a target="_" href="https://www.linkedin.com/in/abdullah-arshad-6b4949284/"><Image width={50} height={50} alt="github-link" src={"/links/github.svg"}/></a></li>
              <li><a target="_" href="https://github.com/Abdullah-765"><Image width={50} height={50} alt="linkedin-link" src={"/links/linkedin.svg"}/></a></li>
            </ul>
        </ul>
  );
}
