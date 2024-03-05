import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { type FC } from "react";

const ProjectLoading: FC = ({}) => {
  return (
    <section id="projects" className="section mb-28 lg:scroll-mt-28">
      <div className="block lg:hidden py-4 sticky -top-1 z-50 bg-background bg-opacity-85 backdrop-blur-sm -mx-6 px-6 border rounded-none border-b-0 border-x-0">
        <h2 className="font-bold uppercase text-sm tracking-wider">Projects</h2>
      </div>
      <ul className="space-y-16">
        <li>
          <div className="grid gap-1 relative sm:gap-4 sm:grid-cols-8">
            <div className="sm:pl-4 pl-0 sm:col-span-2 order-2 sm:order-1">
              <div className="w-[200px] my-1.5 sm:w-full">
                <AspectRatio
                  ratio={16 / 9}
                  className="bg-primary/25 rounded-md"
                >
                  <Image
                    src="/assets/placeholder.svg"
                    alt="Placeholder"
                    fill
                    className="rounded-md object-cover transition border-2 group-hover:border-primary/25"
                  />
                </AspectRatio>
              </div>
            </div>
            <div className="sm:col-span-6 order-1 sm:order-2">
              <div className="space-y-3 mt-2">
                <Skeleton className="h-44 w-full" />
                <ul className="flex flex-wrap gap-2">
                  <li>
                    <Skeleton className="h-5 w-24" />
                  </li>
                  <li>
                    <Skeleton className="h-5 w-24" />
                  </li>
                  <li>
                    <Skeleton className="h-5 w-24" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="grid gap-1 relative sm:gap-4 sm:grid-cols-8">
            <div className="sm:pl-4 pl-0 sm:col-span-2 order-2 sm:order-1">
              <div className="w-[200px] my-1.5 sm:w-full">
                <AspectRatio
                  ratio={16 / 9}
                  className="bg-primary/25 rounded-md"
                >
                  <Image
                    src="/assets/placeholder.svg"
                    alt="Placeholder"
                    fill
                    className="rounded-md object-cover transition border-2 group-hover:border-primary/25"
                  />
                </AspectRatio>
              </div>
            </div>
            <div className="sm:col-span-6 order-1 sm:order-2">
              <div className="space-y-3 mt-2">
                <Skeleton className="h-44 w-full" />
                <ul className="flex flex-wrap gap-2">
                  <li>
                    <Skeleton className="h-5 w-24" />
                  </li>
                  <li>
                    <Skeleton className="h-5 w-24" />
                  </li>
                  <li>
                    <Skeleton className="h-5 w-24" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="grid gap-1 relative sm:gap-4 sm:grid-cols-8">
            <div className="sm:pl-4 pl-0 sm:col-span-2 order-2 sm:order-1">
              <div className="w-[200px] my-1.5 sm:w-full">
                <AspectRatio
                  ratio={16 / 9}
                  className="bg-primary/25 rounded-md"
                >
                  <Image
                    src="/assets/placeholder.svg"
                    alt="Placeholder"
                    fill
                    className="rounded-md object-cover transition border-2 group-hover:border-primary/25"
                  />
                </AspectRatio>
              </div>
            </div>
            <div className="sm:col-span-6 order-1 sm:order-2">
              <div className="space-y-3 mt-2">
                <Skeleton className="h-44 w-full" />
                <ul className="flex flex-wrap gap-2">
                  <li>
                    <Skeleton className="h-5 w-24" />
                  </li>
                  <li>
                    <Skeleton className="h-5 w-24" />
                  </li>
                  <li>
                    <Skeleton className="h-5 w-24" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default ProjectLoading;
