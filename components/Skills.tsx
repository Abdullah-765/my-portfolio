export default function Skills() {
  return (
    //   <div>
    //     <h1>Frontend</h1>
    //     <ul>
    //         <li>HTML</li>
    //         <li>CSS / Tailwind Css</li>
    //         <li>Typescript</li>
    //         <li>Next Js</li>
    //         <li>Resposive Design</li>
    //     </ul>
    //     <h1>Backend (Learning)</h1>
    //     <ul>
    //         <li>Python</li>
    //         <li>API Integration</li>
    //     </ul>
    //   </div>
    <section
      id="skills"
      className="py-20 px-10  border-black "
    >
      <h2 className="text-5xl font-bold mb-10 text-center">Skills</h2>

      <div className="grid grid-cols-2 align-center sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {[
          { name: "HTML", src: "/skills/html.svg" },
          { name: "CSS / Tailwind", src: "/skills/tailwind.svg" },
          { name: "JavaScript", src: "/skills/javascript.svg" },
          { name: "TypeScript", src: "/skills/typescript.svg" },
          { name: "Next.js", src: "/skills/nextjs.svg" },
          { name: "Python (Learning)", src: "/skills/python.svg" },
          { name: "Git", src: "/skills/git.svg" },
        ].map(({ name, src }) => (
          <div key={name} className="bg-amber-400 ">
            <div
              className="border-4 border-black p-4 flex flex-col items-center justify-center shadow-custom hover:shadow-none transition-all duration-200"
            >
              <img src={src} alt={name} className="h-16 mb-2" />
              <span className="font-bold text-lg">{name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
