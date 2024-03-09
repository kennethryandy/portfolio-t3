import type { FC } from "react";
import { AspectRatio } from "../../ui/aspect-ratio";
import Image from "next/image";
import { Badge } from "../../ui/badge";
import { api } from "@/trpc/server";

const ProjectSection: FC = async () => {
  const projects = await api.project.getAll.query();
  console.log(projects);

  return (
    <section id="projects" className="section mb-28 lg:scroll-mt-28">
      <div className="block lg:hidden py-4 sticky -top-1 z-50 bg-background bg-opacity-85 backdrop-blur-sm -mx-6 px-6 border rounded-none border-b-0 border-x-0">
        <h2 className="font-bold uppercase text-sm tracking-wide">Projects</h2>
      </div>
      <ul className="space-y-16 group/items">
        {projects.map((project) => (
          <li
            role="list"
            key={project.id}
            className="group-hover/items:opacity-45 custom-list-opacity transition-opacity"
          >
            <div className="grid gap-1 relative sm:gap-4 sm:grid-cols-8 group">
              <div className="absolute z-0 left-0 -right-4 -inset-y-4 rounded-md transition hidden lg:block group-hover:bg-accent/25 group-hover:drop-shadow-lg group-hover:shadow-hard"></div>
              <div className="sm:col-span-2 sm:pl-4 pl-0 z-10 mt-0.5 order-2 sm:order-1">
                <div className="w-[200px] mb-1.5 sm:w-full">
                  <AspectRatio
                    ratio={16 / 9}
                    className="bg-primary/25 rounded-md"
                  >
                    {project.image ? (
                      <Image
                        src={`/assets/projects/${project.media.fileName}`}
                        alt={project.media.name}
                        fill
                        className="rounded-md object-cover transition border-2 group-hover:border-primary/25"
                      />
                    ) : (
                      <Image
                        src="/assets/placeholder.svg"
                        alt="Placeholder"
                        fill
                        className="rounded-md object-cover transition border-2 group-hover:border-primary/25"
                      />
                    )}
                  </AspectRatio>
                </div>
              </div>
              <div className="sm:col-span-6 z-10 order-1 sm:order-2">
                <div>
                  <h3 className="group/link group-hover:text-primary focus:text-primary font-semibold text-base leading-tight tracking-wide mb-2 after:content-['_↗'] ">
                    {project.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {project.description.split("\n").map((description, idx) => (
                    <p
                      key={idx}
                      className="text-slate-400 leading-normal text-sm"
                    >
                      {description}
                    </p>
                  ))}
                </div>
                <ul className="mt-3 flex gap-2 flex-wrap items-baseline">
                  {project.technologies.map((tech, idx) => (
                    <li key={idx}>
                      <Badge>{tech}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
