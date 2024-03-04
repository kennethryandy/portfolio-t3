import MainLayout from "@/layouts/main/main-layout";
import {
  AboutSection,
  ExperienceLoading,
  ExperienceSection,
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

        <ProjectSection />

        <ReachOutSection />
      </div>
    </MainLayout>
  );
}
