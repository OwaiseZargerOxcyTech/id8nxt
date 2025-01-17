import ImageGrid from "@/components/common-image-grid";
import { Footer } from "@/components/footer/footer";
import HeroSection from "@/components/tech-solutions/hero-section";
import { tech_data } from "@/components/tech-solutions/image-data";
import ServicesSection from "@/components/services-section";
import {
  services_data,
  tech_solution_desc,
  tech_solution_title,
} from "@/components/tech-solutions/services-data";
import CommonServicesSection from "@/components/common-services-section";

export default function TechSolutions() {
  return (
    <main>
      <HeroSection />
      <ServicesSection title={tech_solution_title} desc={tech_solution_desc} />
      <CommonServicesSection
        initialService={"Web Personalization"}
        services_data={services_data}
      />
      <div className="max-w-7xl mx-auto">
        <ImageGrid data={tech_data} />
      </div>
      <Footer color={"white"} textColor={"black"} />
    </main>
  );
}
