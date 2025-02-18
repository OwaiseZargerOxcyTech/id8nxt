import ImageGrid from "@/components/common-image-grid";
import { Footer } from "@/components/footer/footer";
import { media_data } from "@/components/media-solutions/image-data";
import ServicesSection from "@/components/services-section";
import {
  media_services_data,
  media_solutions_desc,
  media_solutions_title,
} from "@/components/media-solutions/services-data";
import CommonServicesSection from "@/components/common-services-section";
import HeroMedia from "@/components/media-solutions/hero";

export default function MediaSolutions() {
  return (
    <main>
      <HeroMedia />
      <ServicesSection
        title={media_solutions_title}
        desc={media_solutions_desc}
      />
      <CommonServicesSection
        initialService={"Social Media Management"}
        services_data={media_services_data}
      />
      <div className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto lg:px-16">
        <ImageGrid data={media_data} />
      </div>
      <Footer color={"white"} textColor={"black"} />
    </main>
  );
}
