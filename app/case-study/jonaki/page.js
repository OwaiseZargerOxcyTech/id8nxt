import BrandSymbol from "@/components/case-study/brand-symbol";
import FeatureImages from "@/components/case-study/feature-images";
import { HeroLayout } from "@/components/case-study/hero-layout";
import BrandShowcase from "@/components/case-study/jonaki/brand-showcase";
import JonakiShowcase from "@/components/case-study/jonaki/jonaki-showcase";
import ProjectNavigation from "@/components/case-study/project-navigation";
import Results from "@/components/case-study/results";

export default function Jonaki() {
  const metadataItems = [
    { label: "Year", value: "2022" },
    { label: "Filter by solution", value: "Brand launch. Relaunch. Repeat." },
    { label: "Areas", value: "Branding | Packaging | Communication" },
  ];

  const contentSections = [
    {
      title: "The challenge",
      text: "The fragrance brand Jonaki makes magnificent stories with smell and aroma, drawing motivation from the interest of fireflies. Jonaki's branding creates a vibe of style and charm while capturing the stunning beauty of flies through a moderate plan approach. We use this dynamic approach to boost organic visualisation.",
    },
    {
      title: "The insight",
      text: "The fragrance brand Jonaki makes magnificent stories with smell and aroma, drawing motivation from the interest of fireflies. Jonaki's branding creates a vibe of style and charm while capturing the stunning beauty of flies through a moderate plan approach. We use this dynamic approach to boost organic visualisation.",
    },
  ];

  return (
    <main className=" bg-[#434a23]">
      <HeroLayout
        backgroundImage="/images/case-study/jonaki/jonaki.png"
        title="Branding"
        subtitle="Jonaki"
        metadataItems={metadataItems}
        contentTitle="The request"
        contentText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
        backgroundColor="#434a23"
        contentSections={contentSections}
      />
      <FeatureImages
        img1="/images/case-study/jonaki/jonaki-tagore.png"
        img2="/images/case-study/jonaki/artboard-3-2.png"
      />
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
