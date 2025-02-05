import BrandSymbol from "@/components/case-study/brand-symbol";
import { FooterCase } from "@/components/case-study/footer-case";
import { HeroLayout } from "@/components/case-study/hero-layout";
import ProjectNavigation from "@/components/case-study/project-navigation";
import Results from "@/components/case-study/results";
import ScrollAnimation from "@/hooks/scroll-effect";

export default function Bayer() {
  const metadataItems = [
    { label: "Year", value: "2022" },
    { label: "Filter by solution", value: "Brand launch. Relaunch. Repeat." },
    { label: "Areas", value: "Naming | Branding | Communication" },
  ];

  const contentSections = [
    {
      title: "The challenge",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
      title: "The insight",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
  ];

  return (
    <main className=" bg-[#755c42] pb-12">
      <HeroLayout
        backgroundImage="/images/bayer/bayer-1600x900px-04.png .png"
        title="Marketing, Website Development, Video Production"
        subtitle="Bayer"
        metadataItems={metadataItems}
        contentTitle="The request"
        contentText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
        backgroundColor="#755c42"
        contentSections={contentSections}
      />
      <ScrollAnimation>
        <BrandSymbol imgUrl={"/images/bayer/bayer-1600x900px-01.png"} />
      </ScrollAnimation>

      <Results
        title="The solution"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
      />

      <div className="mb-24">
        <BrandSymbol imgUrl={"/images/bayer/bayer-1600x900px-02.png"} />
      </div>
      <ScrollAnimation>
        <BrandSymbol imgUrl={"/images/bayer/bayer-1600x900px-03.png"} />
      </ScrollAnimation>
      <ProjectNavigation currentProject="bayer" />
      <FooterCase textColor="#fff" />
    </main>
  );
}
