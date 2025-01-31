import { ContentSection } from "./content-section";

// Project Details Component
export const ProjectDetails = ({ contentSections }) => {
  return (
    <section className="relative text-white">
      <div className="relative z-10 xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {contentSections.map((section, index) => (
            <div key={index}>
              <ContentSection {...section} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
