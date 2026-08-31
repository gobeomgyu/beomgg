import { notFound } from "next/navigation";
import { projectsData } from "@/lib/data";
import { projectContents, getDefaultContent } from "@/lib/projectContents";
import { ProjectDetailClient } from "./ProjectDetailClient";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const content = projectContents[slug] || getDefaultContent();

  return <ProjectDetailClient project={project} content={content} />;
}
