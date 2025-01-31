import FeatureImages from "@/components/case-study/feature-images";
import { HeroLayout } from "@/components/case-study/smaack/hero-layout";
import ProjectNavigation from "@/components/case-study/project-navigation";
import Results from "@/components/case-study/results";
import BrandShowcase from "@/components/case-study/smaack/brand-showcase";

export default function Smaack() {
  const metadataItems = [
    { label: "Year", value: "2022" },
    { label: "Filter by solution", value: "Brand launch. Relaunch. Repeat." },
    {
      label: "Areas",
      value: "Social Media | Competitive Analysis | Packaging | Branding",
    },
  ];

  const contentSections = [
    {
      title: "The challenge",
      text: "The challenge was to navigate a competitive landscape, identifying opportunities for differentiation while addressing the evolving needs and preferences of the target market.",
    },
    {
      title: "The insight",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
  ];

  return (
    <main className=" bg-[#F59121]">
      <HeroLayout
        backgroundImage="/images/smaack/smaack-1600x900px-03.png"
        title="Naming, Branding, Communcation"
        subtitle="Flightroniks"
        metadataItems={metadataItems}
        contentTitle="The brief"
        contentText="Smaack sought to develop a product that resonated with its target audience while standing out from competitors. The brand needed a robust strategy to maximise engagement and build a strong presence in the market."
        backgroundColor="#F59121"
        contentSections={contentSections}
      />
      <FeatureImages
        img1={"/images/smaack/smaack-1600x900px-04.png"}
        img2={"/images/smaack/smaack-1600x900px-01.png"}
      />
      <Results
        title="The solution"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,"
      />
      <BrandShowcase />
      <ProjectNavigation />
    </main>
  );
}
