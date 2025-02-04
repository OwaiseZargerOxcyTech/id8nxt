import BrandSymbol from "@/components/case-study/brand-symbol";
import FeatureImages from "@/components/case-study/feature-images";
import { HeroLayout } from "@/components/case-study/glr/hero-layout";
import ProjectNavigation from "@/components/case-study/project-navigation";
import Results from "@/components/case-study/results";
import ScrollAnimation from "@/hooks/scroll-effect";

export default function Glr() {
  const metadataItems = [
    { label: "Year", value: "2022" },
    { label: "Filter by solution", value: "Brand launch. Relaunch. Repeat." },
    { label: "Areas", value: "Logo Design | Brand Visualization" },
  ];

  const contentSections = [
    {
      title: "The challenge",
      text: "The challenge was to visually capture the balance between technology and humanity while portraying the brand's core values of flexibility, agility, problem-solving and making life easier through innovation.",
    },
    {
      title: "Our offerings",
      text: `We developed a smart, minimal and conceptual branding approach, drawing inspiration from the name "Good Little Robots." The result was a clean, modern logo—a cheerful robot with a halo—that symbolised the positive influence of technology. This branding embodied their commitment to innovation with a human touch.`,
    },
  ];

  return (
    <main className=" bg-[#2f2f2f]">
      <h1 className="text-7xl text-transparent">glr</h1>
      <HeroLayout
        backgroundImage="/images/glr/artboard-1-copy-6.png"
        title="Logo Design, Brand Visualization"
        subtitle="Good Little Robots"
        metadataItems={metadataItems}
        contentTitle="The brief"
        contentText="Good Little Robots needed a brand identity that reflected their mission of using technology for positive impact, blending human-centric solutions with cutting-edge innovation."
        backgroundColor="#2f2f2f"
        contentSections={contentSections}
      />
      <ScrollAnimation>
        <FeatureImages
          img1={"/images/glr/cover-1.png"}
          img2={"/images/glr/artboard-1-copy-3.png"}
        />
      </ScrollAnimation>
      <ScrollAnimation>
        <Results
          title="Results"
          text="The new brand identity successfully conveyed Good Little Robots' ethos, creating an emotional connection with audiences. The simple yet powerful visual design enhanced brand recognition and clearly communicated the company's mission of using technology for good."
        />
      </ScrollAnimation>
      <div className="mb-24">
        <BrandSymbol imgUrl={"/images/glr/artboard-1-copy-2.png"} />
      </div>
      <div className="mb-24">
        <BrandSymbol imgUrl={"/images/glr/artboard-1-copy-4.png"} />
      </div>
      <ScrollAnimation>
        <BrandSymbol imgUrl={"/images/glr/artboard-1-copy-5.png"} />
      </ScrollAnimation>
      <ProjectNavigation currentProject="glr" />
    </main>
  );
}
