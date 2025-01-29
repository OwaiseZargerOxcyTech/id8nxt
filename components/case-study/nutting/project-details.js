import React from "react";

const MetadataItem = ({ label, value }) => (
  <div className="flex items-center gap-4">
    <h2 className="text-lg font-medium w-1/3">{label}</h2>
    <p className="text-sm text-gray-300 w-2/3">{value}</p>
  </div>
);

const ContentSection = ({ title, text }) => (
  <div>
    <h2 className="text-xl font-semibold mb-6">{title}</h2>
    <p className="text-sm text-gray-300 leading-relaxed">{text}</p>
  </div>
);

export default function ProjectDetails() {
  const metadataItems = [
    { label: "Year", value: "2022" },
    { label: "Filter by solution", value: "Brand launch. Relaunch. Repeat." },
    { label: "Areas", value: "Branding | Packaging | Communication" },
  ];

  const contentSections = [
    {
      title: "The challenge",
      text: "The fragrance brand Jonaki makes magnificent stories with smell and aroma, drawing motivation from the interest of fireflies. Jonaki's branding creates a vibe of style and charm while capturing the stunning beauty of flies through a moderate plan approach. We use this dynamic approach to boost organic visualisation.",
    },
    {
      title: "The insight",
      text: "The fragrance brand Jonaki makes magnificent stories with smell and aroma, drawing motivation from the interest of fireflies. Jonaki's branding creates a vibe of style and charm while capturing the stunning beauty of flies through a moderate plan approach. We use this dynamic approach to boost organic visualisation.",
    },
  ];

  return (
    <section className="relative bg-red-500 text-white px-6 md:px-12 lg:px-24">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 " />

      <div className="relative z-10 xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-12 py-16 space-y-24">
        {/* Metadata Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column: Metadata */}
          <div className="space-y-8">
            {metadataItems.map((item, index) => (
              <MetadataItem key={index} {...item} />
            ))}
          </div>

          {/* Right Column: The Request */}
          <div className="md:pl-16">
            <ContentSection
              title="The request"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {contentSections.map((section, index) => (
            <div key={index} className={index === 1 ? "md:pl-16" : ""}>
              <ContentSection {...section} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
