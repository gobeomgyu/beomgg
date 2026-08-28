import { ClockIcon } from "./icons";

interface PostCardProps {
  title: string;
  description: string;
  tags: string[];
  date: string;
  readTime: string;
  link?: string;
}

export function PostCard({ title, description, tags, date, readTime, link }: PostCardProps) {
  const cardContent = (
    <div className="flex flex-col border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 bg-white dark:bg-[#0f172a] shadow-sm hover:shadow-md transition-shadow h-full">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed line-clamp-3">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="px-3 py-1 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-800/50">
        <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 font-medium">
          <ClockIcon size={14} />
          {readTime}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-500 font-medium">
          {date}
        </span>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full group">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
