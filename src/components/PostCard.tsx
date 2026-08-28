"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { ClockIcon } from "./icons";

interface PostCardProps {
  title: string;
  description: string;
  tags: string[];
  date: string;
  link?: string;
  readTime?: string;
}

export function PostCard({ title, description, tags, date, readTime, link }: PostCardProps) {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    if (link) {
      // Create a deterministic mock initial view count based on title length
      const initialMockViews = 20 + (title.length % 30);
      const savedViews = localStorage.getItem(`views_${link}`);
      if (savedViews) {
        setViews(parseInt(savedViews, 10));
      } else {
        setViews(initialMockViews);
        localStorage.setItem(`views_${link}`, initialMockViews.toString());
      }
    }
  }, [link, title]);

  const handleClick = () => {
    if (link) {
      const newViews = views + 1;
      setViews(newViews);
      localStorage.setItem(`views_${link}`, newViews.toString());
    }
  };

  const cardContent = (
    <div className="flex flex-col border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 bg-white dark:bg-[#0f172a] shadow-sm hover:shadow-md transition-shadow h-full">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed line-clamp-3">
        {description}
      </p>
      
      <div className="flex items-center justify-between mb-8">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {views > 0 && (
          <span className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 font-medium">
            <Eye size={15} />
            {views.toLocaleString()}
          </span>
        )}
      </div>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-800/50">
        <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 font-medium">
          <ClockIcon size={14} />
          {readTime || '3 min read'}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-500 font-medium">
          {date}
        </span>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full group" onClick={handleClick}>
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
