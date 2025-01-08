import HeroSection from "@/components/our-work/hero-section";
import PortfolioGrid1 from "@/components/our-work/portfolio-grid-1";
import PortfolioGrid2 from "@/components/our-work/portfolio-grid-2";
import PortfolioGrid3 from "@/components/our-work/portfolio-grid-3";
import ProjectsFilter from "@/components/our-work/projects-filter";

export default function TechSolutions() {
  return (
    <main>
      <HeroSection />
      <ProjectsFilter />
      <PortfolioGrid1 />
      <PortfolioGrid2 />
      <PortfolioGrid3 />
    </main>
  );
}
