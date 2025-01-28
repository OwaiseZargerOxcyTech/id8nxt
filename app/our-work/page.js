import { Footer } from "@/components/footer/footer";
import ParallaxHero from "@/components/our-work/hero";
import ProjectsFilter from "@/components/our-work/projects-filter";
import WorkHero from "@/components/our-work/work-hero";

export default function OurWork() {
  return (
    <main>
      <WorkHero />
      {/* <ParallaxHero /> */}
      <ProjectsFilter />
      <Footer color={"white"} textColor={"black"} />
    </main>
  );
}
