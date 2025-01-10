import FeatureCards from "@/components/home/feature-cards";
import { ContactForm } from "@/components/footer/contact-form";
import { Footer } from "@/components/footer/footer";
import VideoBanner from "@/components/home/video-banner";
import WhoWeAre from "@/components/home/whoweare";
import Hero from "@/components/home/hero";
import ClientLogos from "@/components/home/clients";
import ProductDisplay from "@/components/home/products";

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoBanner />
      <WhoWeAre />
      <ProductDisplay />
      <FeatureCards />
      <ClientLogos />
      <ContactForm backColor={"#da1f3d"}/>
      <Footer color={"#da1f3d"} textColor={"white"}/>
    </main>
  );
}