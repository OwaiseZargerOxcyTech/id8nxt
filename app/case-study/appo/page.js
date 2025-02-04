import BrandSymbol from "@/components/case-study/brand-symbol";
import FeatureImages from "@/components/case-study/feature-images";
import { HeroLayout } from "@/components/case-study/hero-layout";
import ProjectNavigation from "@/components/case-study/project-navigation";
import Results from "@/components/case-study/results";
import ScrollAnimation from "@/hooks/scroll-effect";

export default function Appo() {
  const metadataItems = [
    { label: "Year", value: "2022" },
    { label: "Filter by solution", value: "Brand launch. Relaunch. Repeat." },
    { label: "Areas", value: "Branding | Packaging | Communication" },
  ];

  const contentSections = [
    {
      title: "The challenge",
      text: "The main challenge was to combat the tedious and often frustrating experience of waiting for salon appointments. Appo needed a creative solution to streamline the client journey from booking to follow-up, while enhancing user engagement and loyalty. The app also needed to visually appeal to both salon owners and clients, making it intuitive and easy to use.",
    },
    {
      title: "Our offerings",
      text: "ID8NXT developed a problem-centric approach, crafting a fun and memorable brand experience through witty communication and clever memes. Our branding strategy focused on making the user journey seamless, with visually appealing designs and a minimalistic communication style. The UX/UI design was tailored to simplify the booking process, ensuring that clients could easily schedule appointments with just a few clicks. Additionally, we introduced features that helped salon owners personalize the client experience, such as custom product recommendations and targeted promotions.",
    },
  ];

  return (
    <main className=" bg-[#76372a]">
      <HeroLayout
        backgroundImage="/images/appo/appo_cover-1-scaled.png"
        title="Branding, UX UI Design"
        subtitle="Appo"
        metadataItems={metadataItems}
        contentTitle="The brief"
        contentText="Appo, an appointment and scheduling app tailored for the salon industry, sought a branding and UX/UI design solution that would address the issue of waiting time, making the salon booking experience enjoyable and efficient. The goal was to create a platform that simplified scheduling for both salon owners and clients while making the brand fun and engaging."
        backgroundColor="#76372a"
        contentSections={contentSections}
      />
      <ScrollAnimation>
        <FeatureImages
          img1={"/images/appo/Artboard-1-copy-54.png"}
          img2={"/images/appo/Artboard-1-copy-53.png"}
        />
      </ScrollAnimation>
      <ScrollAnimation>
        <Results
          title="Results"
          text="The new branding and UX/UI design transformed Appo into a user-friendly, engaging platform that reduced appointment scheduling time and improved client satisfaction. The app's playful, creative branding increased user engagement, while its streamlined features enabled salon owners to build stronger client relationships. The result was a comprehensive solution that elevated the salon experience and positioned Appo as a key player in the industry."
        />
      </ScrollAnimation>
      <div className="mb-24">
        <BrandSymbol imgUrl={"/images/appo/Artboard-1-copy-51.png"} />
      </div>
      <ScrollAnimation>
        <BrandSymbol imgUrl={"/images/appo/Artboard-1-copy-52.png"} />
      </ScrollAnimation>
      <ProjectNavigation currentProject="appo" />
    </main>
  );
}
