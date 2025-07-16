import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

export default function Projects() {
  const projects = [
    {
      name: "E-Commerce website",
      description:
        "Ecommerce website using sanity CMS and zustand for global state management",
      github: "https://github.com/Abdullah-765/market-place",
      live: "https://hekto-marketplace.vercel.app/",
      images: [
        "/ecom-project/ecom-ss-1.png",
        "/ecom-project/ecom-ss-2.png",
        "/ecom-project/ecom-ss-3.png",
        "/ecom-project/ecom-ss-4.png",
        "/ecom-project/ecom-ss-5.png",
        "/ecom-project/ecom-ss-6.png",
      ],
    },
    {
      name: "Resume Builder",
      description:
        "A dynamic resume builder using basic HTML, CSS, and TypeScript. The goal was to deeply understand DOM manipulation.",
      github: "https://github.com/Abdullah-765/milestone-based-resume-builder",
      live: "https://dynamic-resume-builder-mu-six.vercel.app/",
    },
    { name: "Project", github: "", live: "", description: "Coming soon..." },
    { name: "Project", github: "", live: "", description: "Coming soon..." },
  ];

  return (
    <section id="projects" className="py-20 px-10 border-black">
      <h2 className="text-5xl font-bold mb-10 text-center">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((project) => (
          <Drawer key={project.name}>
            <div className="bg-amber-400 border-4 border-black p-4 flex flex-col items-center justify-center gap-y-[50px] shadow-custom hover:shadow-none transition-all duration-200 relative h-60 group overflow-hidden">
              <span className="font-bold text-4xl">{project.name}</span>
              {/* Trigger inside the card */}
              <DrawerTrigger asChild>
                <Button
                  variant={"ghost"}
                  className="bg-transparent border-3 border-black text-2xl font-bold rounded-none p-5 text-black"
                >
                  View Details
                </Button>
              </DrawerTrigger>
            </div>
            {/* Drawer Content */}
            <DrawerContent className="[&>div:first-child]:hidden p-[20px] bg-amber-400 flex flex-row flex-wrap gap-x-[20px] items-center justify-center border-black border-3 rounded-none">
              {project.images && (
                <Carousel className="w-full max-w-md">
                  <CarouselContent>
                    {project.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="max-w-[300px] max-h-[300px] p-4 flex items-center justify-center">
                              <img
                                src={image}
                                alt="project screenshot"
                                className="w-full h-full object-contain"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              )}

              <div className="md:w-[40%] w-fit flex flex-col items-center justify-center">
                <DrawerHeader>
                  <DrawerTitle className="text-3xl text-center font-bold">
                    {project.name}
                  </DrawerTitle>
                  <DrawerDescription className="text-black text-md">
                    <span className="font-bold text-xl">Description:</span>{" "}
                    {project.description}
                    <div className="p-4 text-center font-bold text-xl ">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_"
                          className="block mb-2 hover:underline"
                        >
                          Live Site
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_"
                          className="block hover:underline"
                        >
                          GitHub Repo
                        </a>
                      )}
                    </div>
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button
                      variant="neoBrut"
                      className="px-[40px] py-[20px] w-fit"
                    >
                      Close
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        ))}
      </div>
    </section>
  );
}
