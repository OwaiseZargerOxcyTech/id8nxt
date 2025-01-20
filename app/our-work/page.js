import { Footer } from "@/components/footer/footer";
import ParallaxHero from "@/components/our-work/hero";
import HeroSection from "@/components/our-work/hero-section";
import ProjectsFilter from "@/components/our-work/projects-filter";

export default function OurWork() {
  return (
    <main>
      <ParallaxHero />
      {/* <HeroSection /> */}
      <ProjectsFilter />
      <Footer color={"white"} textColor={"black"} />
    </main>
  );
}
