import { GithubIcon } from "./icons";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  date: string;
  githubUrl?: string;
}

export function ProjectCard({ title, description, tags, date, githubUrl }: ProjectCardProps) {
  return (
    <div className="group flex flex-col border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 bg-white dark:bg-[#0f172a] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full">
      <h3 className="text-xl font-bold mb-4 group-hover:text-blue-500 transition-colors">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-800/50">
        <a 
          href={githubUrl || "#"} 
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium"
        >
          <GithubIcon size={16} />
          Code
        </a>
        <span className="text-sm text-gray-500 dark:text-gray-500 font-medium">
          {date}
        </span>
      </div>
    </div>
  );
}
