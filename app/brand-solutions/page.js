import ImageGrid from "@/components/common-image-grid";
import { Footer } from "@/components/footer/footer";
import HeroSection from "@/components/brand-solutions/hero-section";
import { brand_data } from "@/components/brand-solutions/image-data";
import ServicesSection from "@/components/services-section";
import {
  brand_services_data,
  brand_solutions_desc,
  brand_solutions_title,
} from "@/components/brand-solutions/services-data";
import CommonServicesSection from "@/components/common-services-section";

export default function BrandSolutions() {
  return (
    <main>
      <HeroSection />
      <ServicesSection
        title={brand_solutions_title}
        desc={brand_solutions_desc}
      />
      <CommonServicesSection
        initialService={"Social Media Management"}
        services_data={brand_services_data}
      />
      <div className="max-w-7xl mx-auto">
        <ImageGrid data={brand_data} />
      </div>
      <Footer color={"white"} textColor={"black"} />
    </main>
  );
}
