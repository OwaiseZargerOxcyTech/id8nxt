import BrandShowcase from "@/components/case-study/jonaki/brand-showcase";
import BrandSymbolExplanation from "@/components/case-study/jonaki/brand-symbol-explanation";
import HeroSection from "@/components/case-study/jonaki/hero-section";
import InspirationSection from "@/components/case-study/jonaki/inspiration-section";
import JonakiShowcase from "@/components/case-study/jonaki/jonaki-showcase";
import ProjectDetails from "@/components/case-study/jonaki/project-details";
import ProjectNavigation from "@/components/case-study/jonaki/project-navigation";
import SolutionSection from "@/components/case-study/jonaki/solution-section";

export default function Jonaki() {
  return (
    <main>
      <HeroSection />
      <ProjectDetails />
      <InspirationSection />
      <SolutionSection />
      <BrandSymbolExplanation />
      <BrandShowcase />
      <JonakiShowcase />
      <ProjectNavigation />
    </main>
  );
}
