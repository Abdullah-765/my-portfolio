// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer"
// import { Minus, Plus, BarChart } from "lucide-react";
// import { Button } from "./ui/button";

export default function Projects() {
  // function setGoal(arg0: number): import("react").ReactNode {
  //   throw new Error("Function not implemented.");
  // }
    return(
      <section id="projects" className="py-20 px-10 border-black">
      <h2 className="text-5xl font-bold mb-10 text-center">My Projects</h2>

      <div className="grid grid-cols-2 align-center sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {[
          {
            name: "E-Commerce website",
            description:
              "Ecommerce website using sanity CMS and zustand for global state menagement",
            github: "https://github.com/Abdullah-765/market-place",
            live: "https://hekto-marketplace.vercel.app/",
            src: "/skills/html.svg",
          },
          {
            name: "Resume Builder",
            description:
              "a dynamic resume builder using basic html, css and typescript, The main purpose of this project was to get a good understanding of DOM manipulation",
            github:
              "https://github.com/Abdullah-765/milestone-based-resume-builder",
            live: "https://dynamic-resume-builder-mu-six.vercel.app/",
            src: "/skills/html.svg",
          },
          { name: "H2TML", github: "", live: "", src: "/skills/html.svg" },
          { name: "HT3ML", github: "", live: "", src: "/skills/html.svg" },
        ].map(({ name, description, github, live, src }) => (
          <div key={name} className="bg-amber-400 ">
            <div className="bg-amber-400 border-4 border-black p-4 flex flex-col items-center justify-between shadow-custom hover:shadow-none transition-all duration-200 relative h-60 group overflow-hidden">
              <img src={src} alt={name} className="h-16 mb-2" />
              <span className="font-bold text-lg">{name}</span>
              <a
                href={live}
                target="_"
                className="font-bold text-lg hover:underline"
              >
                Live
              </a>
              <a
                href={github}
                target="_"
                className="font-bold text-lg hover:underline"
              >
                Github
              </a>
              {description && (
                <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    {/* <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">View</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
              >
                <Minus />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {goal}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Calories/day
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(10)}
                disabled={goal >= 400}
              >
                <Plus />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="goal"
                    style={
                      {
                        fill: "hsl(var(--foreground))",
                        opacity: 0.9,
                      } as React.CSSProperties
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer> */}

    </section>
    )
}
