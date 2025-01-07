import FeatureCards from "@/components/home/feature-cards";
import { ContactForm } from "@/components/footer/contact-form";
import { Footer } from "@/components/footer/homeFooter/footer";
import VideoBanner from "@/components/home/video-banner";
import WhoWeAre from "@/components/home/whoweare";
import Hero from "@/components/home/hero";
import ProductAnimationCarousel from "@/components/home/product-animation-carousel";
import ClientLogos from "@/components/home/clients";

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoBanner />
      <WhoWeAre />
      <ProductAnimationCarousel />
      <FeatureCards />
      <ClientLogos />
      <ContactForm backColor={"#da1f3d"}/>
      <Footer backColor={"#da1f3d"} isAbout={false}/>
    </main>
  );
}