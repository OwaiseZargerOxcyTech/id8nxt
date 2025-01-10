import ImageGrid from "@/components/common-image-grid";
import { Footer } from "@/components/footer/footer";
import HeroSection from "@/components/tech-solutions/hero-section";
import { tech_data } from "@/components/tech-solutions/image-data";
import ServicesSection from "@/components/tech-solutions/services-section";

export default function TechSolutions() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <div className="max-w-7xl mx-auto">
        <ImageGrid data={tech_data} />
      </div>
      <Footer color={"white"} textColor={"black"} />
    </main>
  );
}
