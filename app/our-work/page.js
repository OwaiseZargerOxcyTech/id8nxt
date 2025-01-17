import { Footer } from "@/components/footer/footer";
import HeroSection from "@/components/our-work/hero-section";
import ProjectsFilter from "@/components/our-work/projects-filter";

export default function OurWork() {
  return (
    <main>
      <HeroSection />
      <ProjectsFilter />
      <Footer color={"white"} textColor={"black"} />
    </main>
  );
}
