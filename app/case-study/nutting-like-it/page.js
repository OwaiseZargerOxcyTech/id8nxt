import BrandSymbol from "@/components/case-study/brand-symbol";
import FeatureImages from "@/components/case-study/feature-images";
import BrandShowcase from "@/components/case-study/nutting-like-it/brand-showcase";
import HeroSection from "@/components/case-study/nutting-like-it/hero-section";
import ProjectDetails from "@/components/case-study/nutting-like-it/project-details";
import ProjectNavigation from "@/components/case-study/project-navigation";
import Results from "@/components/case-study/results";
import ScrollAnimation from "@/hooks/scroll-effect";

export default function NuttingLikeIt() {
  return (
    <main className="bg-[#54253a]">
      <HeroSection />
      <ProjectDetails />
      <ScrollAnimation>
        <FeatureImages
          img1="/images/nutting-like-it/artboard-1-copy-12.png"
          img2="/images/nutting-like-it/artboard-1-copy-15.png"
        />
      </ScrollAnimation>
      <ScrollAnimation>
        <Results
          title="Results"
          text=" The new branding and packaging made a significant impact,creating
              a memorable and engaging brand experience for consumers. Nutting
              Like It successfully positioned itself as a leader in the
              dryfruits market, known for combining taste with health. The
              refreshed visual identity boosted consumer engagement, led to
              increased brand recall and solidified Nutting Like It’s reputation
              as a top choice for nutritious,tasty snacks"
        />
      </ScrollAnimation>
      <ScrollAnimation>
        <BrandSymbol
          imgUrl={"/images/nutting-like-it/artboard-1-copy-13.png"}
        />
      </ScrollAnimation>
      <ScrollAnimation>
        <BrandShowcase />
      </ScrollAnimation>
      <ScrollAnimation>
        <BrandSymbol
          imgUrl={"/images/nutting-like-it/artboard-1-copy-18.png"}
        />
      </ScrollAnimation>
      <ProjectNavigation currentProject="nutting-like-it" />
    </main>
  );
}
