import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "jonaki",
    title: "JONAKI",
    category: "Perfume",
    image: "/images/our-work/paris-image.jpg",
    subtitle: "Jonaki _ Perfume",
  },
  {
    id: "me-and-tva",
    title: "Me and TVA",
    category: "Children's brand",
    image: "/images/our-work/usa-image.jpg",
    subtitle: "Me and TVA _ Children's brand",
  },
  {
    id: "nutting-like-it",
    title: "NUTTING LIKE IT!",
    category: "Perfume",
    image: "/images/our-work/rome-image.jpg",
    subtitle: "Jonki _ Perfume",
  },
  {
    id: "good-little-robots",
    title: "Good Little Robots",
    category: "Logo Design | Brand Visualization",
    image: "/images/our-work/paris-image.jpg",
    subtitle: "Good Little Robots _ Logo Design | Brand Visualization",
  },
  {
    id: "4ppo",
    title: "4ppo",
    category: "Dynamic salon",
    image: "/images/our-work/usa-image.jpg",
    subtitle: "Appo _ Dynamic salon",
  },
  {
    id: "flightronics",
    title: "Flightronics",
    category: "Perfume",
    image: "/images/our-work/rome-image.jpg",
    subtitle: "Flightronics _ Perfume",
  },
];

export default function PortfolioGrid1() {
  return (
    <section className="w-full bg-white">
      <section className="max-w-7xl mx-auto px-4 py-8 bg-white">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row mb-8 md:mb-28">
          <div className="flex-1 mb-6 md:mb-0">
            <ProjectCard project={projects[0]} />
          </div>
          <div className="flex-1 md:ml-6 mb-6 md:mb-0">
            <ProjectCard project={projects[1]} />
          </div>
          <div className="flex-1 md:ml-28">
            <ProjectCard project={projects[2]} />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 mb-6 md:mb-0">
            <ProjectCard project={projects[3]} />
          </div>
          <div className="flex-1 md:ml-28 mb-6 md:mb-0">
            <ProjectCard project={projects[4]} />
          </div>
          <div className="flex-1 md:ml-6">
            <ProjectCard project={projects[5]} />
          </div>
        </div>
      </section>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="space-y-2">
        <div className="mt-2">
          <p className="text-sm text-gray-600">{project.subtitle}</p>
        </div>
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </Link>
  );
}
