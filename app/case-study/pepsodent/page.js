import BrandSymbol from "@/components/case-study/brand-symbol";
import FeatureImages from "@/components/case-study/feature-images";
import { HeroLayout } from "@/components/case-study/hero-layout";
import ProjectNavigation from "@/components/case-study/project-navigation";
import Results from "@/components/case-study/results";
import ScrollAnimation from "@/hooks/scroll-effect";

export default function Pepsodent() {
  const metadataItems = [
    { label: "Year", value: "2022" },
    { label: "Filter by solution", value: "Brand launch. Relaunch. Repeat." },
    { label: "Areas", value: "Concept | Illustration" },
  ];

  const contentSections = [
    {
      title: "The challenge",
      text: "The challenge was to creatively illustrate the concept of nighttime brushing through relatable yet attention-grabbing characters. The campaign needed to convey the significance of oral hygiene in a way that was both entertaining and thought-provoking, while also aligning with Pepsodent's brand message.",
    },
    {
      title: "Our offerings",
      text: "ID8NXT developed a series of print ads that showcased the lives of characters like the Call Centre Executive, Night Duty Watchman and Construction Worker—each representing the hardworking, night-time workforce. Through highly detailed, realistic illustrations, we portrayed their late-night experiences and cleverly connected them to the need for oral hygiene. Using animal metaphors such as goats, fish and chickens, we symbolically depicted human behaviors during nighttime, reinforcing the message of brushing before bed.",
    },
  ];

  return (
    <main className=" bg-[#543831]">
      <HeroLayout
        backgroundImage="/images/pepsodent/Artboard-1-copy-25.png"
        title="Concept, Illustration"
        subtitle="Pepsodent Toothpaste"
        metadataItems={metadataItems}
        contentTitle="The brief"
        contentText="Pepsodent sought to emphasize the importance of brushing at night and maintaining oral hygiene before sleep. The objective was to create a memorable and engaging campaign that resonated with the audience and highlighted the consequences of neglecting nighttime brushing."
        backgroundColor="#543831"
        contentSections={contentSections}
      />
      <ScrollAnimation>
        <FeatureImages
          img1={"/images/pepsodent/Artboard-1-copy-19.png"}
          img2={"/images/pepsodent/Artboard-1-copy-20.png"}
        />
      </ScrollAnimation>
      <ScrollAnimation>
        <Results
          title="Results"
          text="The campaign successfully captured the audience's attention with its unique and relatable approach. The eye-catching illustrations and creative storytelling resonated with viewers, prompting them to rethink their nighttime brushing habits. The campaign drove increased awareness of Pepsodent's nighttime oral care message, enhancing brand recall and engagement while fostering stronger brand loyalty."
        />
      </ScrollAnimation>
      <div className="mb-24">
        <BrandSymbol imgUrl={"/images/pepsodent/cover-fish.png"} />
      </div>
      <ScrollAnimation>
        <BrandSymbol imgUrl={"/images/pepsodent/Artboard-1-copy-23.png"} />
      </ScrollAnimation>
      <ProjectNavigation currentProject="pepsodent" />
    </main>
  );
}
