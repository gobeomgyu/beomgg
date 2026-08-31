import { notFound } from "next/navigation";
import { projectsData } from "@/lib/data";
import { projectContents, getDefaultContent } from "@/lib/projectContents";
import { ProjectDetailClient } from "./ProjectDetailClient";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const content = projectContents[params.slug] || getDefaultContent();

  return <ProjectDetailClient project={project} content={content} />;
}
