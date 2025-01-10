import ImageGrid from "@/components/common-image-grid";
import { Footer } from "@/components/footer/footer";
import HeroSection from "@/components/our-work/hero-section";
import { data1, data2, data3 } from "@/components/our-work/image-data";
import ProjectsFilter from "@/components/our-work/projects-filter";

export default function TechSolutions() {
  return (
    <main>
      <HeroSection />
      <ProjectsFilter />
      <ImageGrid data={data1} />
      <ImageGrid data={data2} />
      <ImageGrid data={data3} />
      <Footer color={"white"} textColor={"black"} />
    </main>
  );
}
