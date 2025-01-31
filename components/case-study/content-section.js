export const ContentSection = ({ title, text }) => (
  <div>
    <h2 className="text-xl text-white font-semibold mb-6">{title}</h2>
    <p className="text-base text-white leading-relaxed">{text}</p>
  </div>
);

export const MetadataItem = ({ label, value }) => (
  <div className="flex items-center gap-4">
    <h2 className="text-lg text-white font-medium w-1/3">{label}</h2>
    <p className="text-sm text-white w-2/3">{value}</p>
  </div>
);
