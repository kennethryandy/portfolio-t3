import { type FC } from "react";
import { Badge } from "../../ui/badge";
import { api } from "@/trpc/server";

const ExperienceSection: FC = async ({}) => {
  const experiences = await api.experience.getAll.query();

  return (
    <section id="experiences" className="section mb-28 lg:scroll-mt-28">
      <div className="block lg:hidden py-4 sticky -top-1 z-50 bg-background bg-opacity-85 backdrop-blur-sm -mx-6 px-6 border rounded-none border-b-0 border-x-0">
        <h2 className="font-bold uppercase text-sm tracking-wider">
          Experiences
        </h2>
      </div>
      <ul className="space-y-16 group/items">
        {experiences.map((exp) => (
          <li
            role="list"
            key={exp.id}
            className="group-hover/items:opacity-45 custom-list-opacity transition-opacity"
          >
            <div className="grid gap-1 relative sm:gap-4 sm:grid-cols-8 group">
              <div className="absolute z-0 left-0 -right-4 -inset-y-4 rounded-md transition hidden lg:block group-hover:bg-accent/25 group-hover:drop-shadow-lg group-hover:shadow-hard"></div>

              <div className="sm:col-span-2 z-10">
                <h4 className="text-left lg:text-center font-medium mt-0.5 tracking-wider leading-tight text-xs text-slate-500">
                  {exp.year}
                </h4>
              </div>
              <div className="sm:col-span-6 z-10">
                <div>
                  <h3 className="group/link group-hover:text-primary focus:text-primary font-semibold text-base leading-tight tracking-wide mb-2 after:content-['_↗'] ">
                    {exp.title}
                  </h3>
                  <h3 className="leading-4 mb-2 text-base font-medium text-slate-500">
                    {exp.role}
                  </h3>
                </div>
                <div className="space-y-4">
                  {exp.description.split("\n").map((description, idx) => (
                    <p
                      key={idx}
                      className="text-slate-400 leading-normal text-sm"
                    >
                      {description}
                    </p>
                  ))}
                </div>
                <ul className="mt-3 flex gap-2 flex-wrap items-baseline">
                  {exp?.technologies.map((tech, idx) => (
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

export default ExperienceSection;
