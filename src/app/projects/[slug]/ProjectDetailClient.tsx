"use client";

import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { ProjectSection } from "@/lib/projectContents";

export function ProjectDetailClient({ project, content }: { project: any, content: { sections: ProjectSection[] } }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Initial active ID
    if (content.sections.length > 0) {
      setActiveId(content.sections[0].id);
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // offset for header
      let currentId = content.sections[0]?.id;
      
      for (const section of content.sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPosition) {
          currentId = section.id;
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [content.sections]);

  return (
    <div className="relative w-full max-w-3xl mx-auto px-4 py-12 md:py-20">
      {/* Main Content Area */}
      <div className="w-full">
        <a href="/projects" className="group inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors mb-12">
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </a>

        <div className="mb-16">
          <h1 className="text-lg md:text-2xl lg:text-4xl font-extrabold tracking-tight mb-6 leading-[1.3] text-slate-900 dark:text-slate-100">
            {project.title}
          </h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400 mb-8 leading-[1.8]">
            {project.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-[15px] text-slate-500 dark:text-slate-400 font-semibold border-b border-slate-100 dark:border-slate-800/80 pb-8 mb-8">
            <span className="flex items-center gap-1.5 tracking-wide">
              📅 {project.date}
            </span>
            {project.githubUrl !== "#" && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors">
                <GithubIcon size={16} />
                Source Code
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-3.5 py-1.5 bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 text-[13px] font-semibold rounded-full border border-slate-100 dark:border-slate-700/50">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-24">
          {content.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-slate-100 dark:border-slate-800/80 text-slate-900 dark:text-slate-100">
                {section.title}
              </h2>
              <div className="text-slate-700 dark:text-slate-300">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Hover TOC - Fixed on right for large screens */}
      <div className="hidden xl:block fixed right-10 top-32 w-[280px] group h-[calc(100vh-16rem)] z-50">
        {/* Subtle Indicator Line (visible when not hovered) */}
        <div className="absolute right-0 top-0 w-1.5 h-full bg-slate-100 dark:bg-slate-800 rounded-full transition-opacity duration-300 group-hover:opacity-0 flex flex-col justify-around py-4 opacity-100 items-center">
          {content.sections.map((_, i) => (
            <div key={i} className="w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full" />
          ))}
        </div>
        
        {/* Expanded TOC Panel */}
        <div className="absolute right-0 top-0 w-full bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-sm rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-slate-100 dark:border-slate-800/80 opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <h3 className="text-[13px] font-extrabold text-slate-900 dark:text-slate-100 mb-5 tracking-widest uppercase">Contents</h3>
          <ul className="space-y-3.5">
            {content.sections.map((section) => (
              <li key={section.id}>
                <a 
                  href={`#${section.id}`}
                  className={`block text-[14.5px] transition-all duration-200 ${
                    activeId === section.id 
                      ? "text-blue-600 dark:text-blue-400 font-bold translate-x-1" 
                      : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 font-medium"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
