export const ContentSection = ({ title, text }) => (
  <div>
    <h2 className="text-xl font-semibold mb-6">{title}</h2>
    <p className="text-sm text-gray-300 leading-relaxed">{text}</p>
  </div>
);

export const MetadataItem = ({ label, value }) => (
  <div className="flex items-center gap-4">
    <h2 className="text-lg font-medium w-1/3">{label}</h2>
    <p className="text-sm text-gray-300 w-2/3">{value}</p>
  </div>
);

export const metadataItems = [
  { label: "Year", value: "2022" },
  { label: "Filter by solution", value: "Brand launch. Relaunch. Repeat." },
  { label: "Areas", value: "Branding | Packaging | Communication" },
];

export const contentSections = [
  {
    title: "The challenge",
    text: "The fragrance brand Jonaki makes magnificent stories with smell and aroma, drawing motivation from the interest of fireflies. Jonaki's branding creates a vibe of style and charm while capturing the stunning beauty of flies through a moderate plan approach. We use this dynamic approach to boost organic visualisation.",
  },
  {
    title: "The insight",
    text: "The fragrance brand Jonaki makes magnificent stories with smell and aroma, drawing motivation from the interest of fireflies. Jonaki's branding creates a vibe of style and charm while capturing the stunning beauty of flies through a moderate plan approach. We use this dynamic approach to boost organic visualisation.",
  },
];
