import Link from "next/link";
import { GithubIcon } from "./icons";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  githubUrl?: string;
  inProgress?: boolean;
}

export function ProjectCard({ slug, title, description, tags, date, githubUrl, inProgress }: ProjectCardProps) {
  return (
    <div className={`group relative flex flex-col border rounded-3xl p-7 bg-white dark:bg-[#0f172a] shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full ${
      inProgress 
        ? 'border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.1)]' 
        : 'border-slate-200 dark:border-slate-800'
    }`}>
      <Link href={`/projects/${slug}`} className="absolute inset-0 z-10 rounded-3xl" aria-label={`View details of ${title}`} />
      
      {inProgress && (
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2 py-0.5 rounded-full w-fit mb-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          진행 중
        </span>
      )}

      <h3 className="text-[22px] font-bold mb-3 text-slate-900 dark:text-slate-100 group-hover:text-blue-600 transition-colors tracking-tight leading-snug">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400 mb-6 flex-grow leading-[1.7] text-[15px]">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-7">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="px-3.5 py-1.5 bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 text-[13px] font-semibold rounded-full border border-slate-100 dark:border-slate-700/50"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between mt-auto pt-5 border-t border-slate-100 dark:border-slate-800/80">
        <a 
          href={githubUrl || "#"} 
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-20 flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-[15px] font-semibold"
        >
          <GithubIcon size={18} />
          Code
        </a>
        <span className="text-[15px] text-slate-500 dark:text-slate-400 font-semibold tracking-wide">
          {date}
        </span>
      </div>
    </div>
  );
}
