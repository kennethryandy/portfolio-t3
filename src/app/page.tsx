import MainLayout from "@/layouts/main/main-layout";
import {
  AboutSection,
  ExperienceSection,
  ProjectSection,
  ReachOutSection,
} from "@/components/sections";

export default function Home() {
  return (
    <MainLayout>
      <div>
        <AboutSection />

        <ExperienceSection />

        <ProjectSection />

        <ReachOutSection />
      </div>
    </MainLayout>
  );
}
