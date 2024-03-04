import type { FC } from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import { Badge } from "../ui/badge";

const projects = [
  {
    id: 1,
    title: "Social Clone",
    image: {
      url: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
      alt: "Social Clone",
    },
    description:
      "A social media app that let users post, like and comment. It is build using MERN stack using mongoose and graphql to easily handle mongo database queries.",
    url: "https://social-clone-v2.vercel.app/",
    source_code: "https://github.com/kennethryandy/social-clone-v2",
    type: "featured",
    technologies: [
      "React",
      "MUI",
      "Redux",
      "NodeJS",
      "Express",
      "Graphql",
      "MongoDB",
    ],
  },
  {
    id: 2,
    title: "zMovies",
    image: {
      url: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
      alt: "zMovies",
    },
    description:
      "Browse your favorite movies and watch trailers it is a single page application that was built in React and React Router for easy and fast routing.. The goal of this project is to use dynamic components for efficiency and better performance.",
    url: "https://zmovies-rose.vercel.app/",
    source_code: "https://github.com/kennethryandy/movie-app",
    type: "featured",
    technologies: ["React", "MUI", "The Movie Database API"],
  },
  {
    id: 3,
    title: "Covid-19 Tracker",
    image: {
      url: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
      alt: "Covid-19",
    },
    description:
      "An app that tracks coronavirus cases, recoveries and deaths world wide. It lets the user check covid19 cases in any country, it also has a map and graph on it.",
    url: "https://cov19-tracker.vercel.app/",
    source_code: "https://github.com/kennethryandy/Covid-19-Tracker",
    type: "featured",
    technologies: [
      "React",
      "MUI",
      "Leaflet",
      "ChartJs",
      "Covid19 API",
      "Disease API",
    ],
  },
  {
    id: 4,
    title: "Quiz Game",
    image: {
      url: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
      alt: "Quiz Game",
    },
    description:
      "A trivia game that lets the user select a category and difficulties that is pulled through the open trivia API. It then randomly selects ten random questions depending on the category that user's choose and tracks the correct answers.",
    url: "https://quizgame-v2.vercel.app/",
    source_code: "https://github.com/kennethryandy/quizgame-v2",
    type: "featured",
    technologies: ["React", "MUI", "Open Trivia API"],
  },
];

const ProjectSection: FC = ({}) => {
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

              <div className="sm:col-span-2 sm:pl-4 pl-0 z-10 mt-0.5 sm:order-1">
                <div className="w-[200px] mb-1.5 sm:w-full">
                  <AspectRatio
                    ratio={16 / 9}
                    className="bg-primary/25 rounded-md"
                  >
                    <Image
                      src={project.image.url}
                      alt={project.image.alt}
                      fill
                      className="rounded-md object-cover transition border-2 group-hover:border-primary/25"
                    />
                  </AspectRatio>
                </div>
              </div>

              <div className="sm:col-span-6 z-10 sm:order-2">
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
                  {project?.technologies.map((tech, idx) => (
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
