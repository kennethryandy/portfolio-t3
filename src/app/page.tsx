import MainLayout from "@/layouts/main/main-layout";
import {
  AboutSection,
  ExperienceLoading,
  ExperienceSection,
  ProjectLoading,
  ProjectSection,
  ReachOutSection,
} from "@/components/sections";
import { Suspense } from "react";

export default function Home() {
  return (
    <MainLayout>
      <div>
        <AboutSection />

        <Suspense fallback={<ExperienceLoading />}>
          <ExperienceSection />
        </Suspense>

        <Suspense fallback={<ProjectLoading />}>
          <ProjectSection />
        </Suspense>

        <ReachOutSection />
      </div>
    </MainLayout>
  );
}
