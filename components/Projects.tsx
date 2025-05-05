export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-10 border-black"
    >
      <h2 className="text-5xl font-bold mb-10 text-center">My Projects</h2>

      <div className="grid grid-cols-2 align-center sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {[
          { name: "HTML", github: "https://github.com/Abdullah-765", live: "https://google.com", src: "/skills/html.svg" },
          { name: "HTML", github: "", live: "", src: "/skills/html.svg" },
          { name: "HTML", github: "", live: "", src: "/skills/html.svg" },
          { name: "HTML", github: "", live: "", src: "/skills/html.svg" },
        ].map(({ name, github, live, src }) => (
          <div key={name} className="bg-amber-400 ">
            <div
              className="border-4 border-black p-4 flex flex-col items-center justify-center shadow-custom hover:shadow-none transition-all duration-200"
            >
              <img src={src} alt={name} className="h-16 mb-2" />
              <span className="font-bold text-lg">{name}</span>
              <a href={live} target="_" className="font-bold text-lg hover:underline">Live</a>
              <a href={github} target="_"className="font-bold text-lg hover:underline">Github</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
