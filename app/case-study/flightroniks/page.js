import BrandSymbol from "@/components/case-study/brand-symbol";
import FeatureImages from "@/components/case-study/feature-images";
import { FooterCase } from "@/components/case-study/footer-case";
import { HeroLayout } from "@/components/case-study/hero-layout";
import ProjectNavigation from "@/components/case-study/project-navigation";
import Results from "@/components/case-study/results";
import ScrollAnimation from "@/hooks/scroll-effect";

export default function flightroniks() {
  const metadataItems = [
    { label: "Year", value: "2022" },
    { label: "Filter by solution", value: "Brand launch. Relaunch. Repeat." },
    { label: "Areas", value: "Naming | Branding | Communication" },
  ];

  const contentSections = [
    {
      title: "The challenge",
      text: "The challenge was to build a brand that conveyed simplicity and cutting-edge technology while differentiating Flightroniks in the competitive drone market. We needed to balance functionality with aesthetics to represent the company's mission and vision effectively.",
    },
    {
      title: "Our offerings",
      text: "We conceptualised the brand name 'Flightroniks' and developed a branding strategy that embodies its futuristic ethos. Through a focus on minimalistic design, sleek visuals and a clean aesthetic, we crafted a logo and communication style that captured the essence of innovation and modernity. Our branding approach emphasised simplicity while showcasing the advanced nature of Flightroniks' products.",
    },
  ];

  return (
    <main className=" bg-[#39535f] pb-12">
      <HeroLayout
        backgroundImage="/images/flightroniks/drone-hovering-just-surface-body-water.png"
        title="Naming, Branding, Communcation"
        subtitle="Flightroniks"
        metadataItems={metadataItems}
        contentTitle="The brief"
        contentText="Flightroniks, a pioneering drone company, sought to establish a distinctive and modern brand identity that reflected its focus on minimalism, innovation and contemporary design. The goal was to create a clean, forward-thinking brand that resonated with both drone enthusiasts and industry professionals."
        backgroundColor="#39535f"
        contentSections={contentSections}
      />
      <ScrollAnimation>
        <FeatureImages
          img1={"/images/flightroniks/artboard-1-copy-29.png"}
          img2={"/images/flightroniks/artboard-1-copy-28.png"}
        />
      </ScrollAnimation>

      <Results
        title="Results"
        text="The brand launch of Flightroniks created a strong market presence, with its sleek and innovative identity resonating with both drone enthusiasts and tech professionals. The cohesive brand identity, paired with strategic communication, positioned Flightroniks as a leader in the robotics and drone industry, setting a new standard for minimalistic yet impactful design."
      />

      <div className="mb-24">
        <BrandSymbol imgUrl={"/images/flightroniks/artboard-1-copy-30.png"} />
      </div>
      <ScrollAnimation>
        <BrandSymbol imgUrl={"/images/flightroniks/artboard-1-copy-31.png"} />
      </ScrollAnimation>
      <ProjectNavigation currentProject="flightroniks" />
      <FooterCase textColor="#fff" />
    </main>
  );
}
