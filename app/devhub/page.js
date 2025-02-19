import { Footer } from "@/components/footer/footer";
import {
  dev_services_data,
  dev_solutions_desc,
  dev_solutions_title,
} from "@/components/devhub/dev-data";
import HeroDev from "@/components/devhub/hero-dev";
import DevServicesSection from "@/components/devhub/devservice-section";
import ImageGridDev from "@/components/devhub/image-grid-dev";
import { dev_data } from "@/components/devhub/image-data-dev";
import ServicesDev from "@/components/devhub/service-dev";

export default function Devhub() {
  return (
    <main>
      <HeroDev />
      <ServicesDev title={dev_solutions_title} desc={dev_solutions_desc} />
      <DevServicesSection
        initialService={"Dev Events"}
        services_data={dev_services_data}
      />
      <ImageGridDev data={dev_data} />
      <Footer color={"black"} textColor={"white"} />
    </main>
  );
}
