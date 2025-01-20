import { Footer } from "@/components/footer/footer";
import ParallaxHero from "@/components/our-work/hero";
import ProjectsFilter from "@/components/our-work/projects-filter";

export default function OurWork() {
  return (
    <main>
      <ParallaxHero />
      <ProjectsFilter />
      <Footer color={"white"} textColor={"black"} />
    </main>
  );
}
