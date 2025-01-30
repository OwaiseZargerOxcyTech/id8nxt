import BrandSymbol from "@/components/case-study/brand-symbol";
import BrandShowcase from "@/components/case-study/jonaki/brand-showcase";
import HeroSection from "@/components/case-study/jonaki/hero-section";
import InspirationSection from "@/components/case-study/jonaki/inspiration-section";
import JonakiShowcase from "@/components/case-study/jonaki/jonaki-showcase";
import ProjectDetails from "@/components/case-study/jonaki/project-details";
import ProjectNavigation from "@/components/case-study/project-navigation";
import Results from "@/components/case-study/results";

export default function Jonaki() {
  return (
    <main className=" bg-[#33371a]">
      <HeroSection />
      <ProjectDetails />
      <InspirationSection />
      <Results
        title="Results"
        text="The new branding successfully brought Jonaki’s story to
              life,enhancing its market appeal and customer engagement.The
              minimalistic design and captivating narrative around fireflies
              boosted organic visibility and created a unique,sensory-driven
              experience for the brand's audience.The revitalised packaging and
              communication generated a strong emotional connection,leading to
              increased customer interest and brand loyalty."
      />
      <BrandSymbol imgUrl={"/images/case-study/jonaki/artboard-4-2.png"} />
      <BrandShowcase />
      <JonakiShowcase />
      <ProjectNavigation />
    </main>
  );
}
