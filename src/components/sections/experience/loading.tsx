import { Skeleton } from "@/components/ui/skeleton";
import { type FC } from "react";

const ExperienceLoading: FC = ({}) => {
  return (
    <section id="experiences" className="section mb-28 lg:scroll-mt-28">
      <div className="block lg:hidden py-4 sticky -top-1 z-50 bg-background bg-opacity-85 backdrop-blur-sm -mx-6 px-6 border rounded-none border-b-0 border-x-0">
        <h2 className="font-bold uppercase text-sm tracking-wider">
          Experiences
        </h2>
      </div>
      <ul className="space-y-16">
        <li>
          <div className="grid gap-1 relative sm:gap-4 sm:grid-cols-8">
            <div className="sm:col-span-2">
              <Skeleton className="h-4 w-2/4 mx-0 sm:mx-auto px-4 rounded-md" />
            </div>
            <div className="sm:col-span-6">
              <div className="space-y-2">
                <Skeleton className="h-4 w-2/6 px-4 rounded-md" />
                <Skeleton className="h-4 w-2/5 px-4 rounded-md" />
              </div>
              <div className="space-y-3 mt-2">
                <Skeleton className="h-60 w-full" />
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
            <div className="sm:col-span-2">
              <Skeleton className="h-4 w-2/4 mx-auto px-4 rounded-full" />
            </div>
            <div className="sm:col-span-6">
              <div className="space-y-2">
                <Skeleton className="h-4 w-2/6 px-4 rounded-full" />
                <Skeleton className="h-4 w-2/5 px-4 rounded-full" />
              </div>
              <div className="space-y-3 mt-2">
                <Skeleton className="h-60 w-full" />
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
            <div className="sm:col-span-2">
              <Skeleton className="h-4 w-2/4 mx-auto px-4 rounded-full" />
            </div>
            <div className="sm:col-span-6">
              <div className="space-y-2">
                <Skeleton className="h-4 w-2/6 px-4 rounded-full" />
                <Skeleton className="h-4 w-2/5 px-4 rounded-full" />
              </div>
              <div className="space-y-3 mt-2">
                <Skeleton className="h-60 w-full" />
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

export default ExperienceLoading;
