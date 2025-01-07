import BrandShowcase from "@/components/case-study-1-jonaki/brand-showcase";
import BrandSymbolExplanation from "@/components/case-study-1-jonaki/brand-symbol-explanation";
import HeroSection from "@/components/case-study-1-jonaki/hero-section";
import InspirationSection from "@/components/case-study-1-jonaki/inspiration-section";
import JonakiShowcase from "@/components/case-study-1-jonaki/jonaki-showcase";
import ProjectDetails from "@/components/case-study-1-jonaki/project-details";
import ProjectNavigation from "@/components/case-study-1-jonaki/project-navigation";
import SolutionSection from "@/components/case-study-1-jonaki/solution-section";

export default function CaseStudyJonaki() {
  return (
    <main>
      <HeroSection />
      <ProjectDetails />
      <InspirationSection/>
      <SolutionSection/>
      <BrandSymbolExplanation/>
      <BrandShowcase/>
      <JonakiShowcase/>
      <ProjectNavigation/>
    </main>
  );
}
