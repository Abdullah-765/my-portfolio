import Image from "next/image";
export default function About() {
  return (
        <ul className="bg-amber-400 border-5 border-black p-[50px] h-fit mt-[110px] gap-y-[40px] flex flex-col items-center justify-center">
             <li>
                <h1 className="md:text-5xl text-3xl font-bold text-center">About Me</h1>
            </li>
            <li className="md:text-2xl text-[16px] text-center">
            Hi, I’m Abdullah, a dedicated Full Stack Developer passionate about creating modern, user-centric web applications. I build intuitive front-end experiences using React, Next.js, and Tailwind CSS, while actively expanding my backend skills through Python. 
            </li>
            <li className="md:text-2xl text-[16px] text-center">
            Currently, I’m exploring the intersection of web development and AI, with a special focus on agentic AI systems—intelligent agents that can reason, plan, and interact with users in meaningful ways. My aim is to integrate these AI capabilities into full stack projects to build smarter, more adaptive applications.
            </li>
            <li className="md:text-2xl text-[16px] text-center">
              I love combining clean code with creative ideas, and I'm always eager to learn new tools and technologies to push what's possible on the web.
            </li>
            <ul className="flex gap-x-[20px]">
              <li><a target="_" href="https://www.linkedin.com/in/abdullah-arshad-6b4949284/"><Image width={50} height={50} alt="github-link" src={"/links/github.svg"}/></a></li>
              <li><a target="_" href="https://github.com/Abdullah-765"><Image width={50} height={50} alt="linkedin-link" src={"/links/linkedin.svg"}/></a></li>
            </ul>
        </ul>
  );
}
