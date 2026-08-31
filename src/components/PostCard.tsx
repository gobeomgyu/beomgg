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
  const [clickCount, setClickCount] = useState<number>(0);

  // Determine base views
  let baseViews = 20 + (title.length % 30);
  if (title.includes("CPU 스케줄링")) {
    baseViews = 29;
  } else if (title.includes("컴퓨터 구조")) {
    baseViews = 31;
  } else if (title.includes("TDD")) {
    baseViews = 30;
  } else if (title.includes("MVC")) {
    baseViews = 29;
  } else if (title.includes("자료구조 2주차")) {
    baseViews = 41;
  } else if (title.includes("자료구조 1주차")) {
    baseViews = 32;
  } else if (title.includes("스프링 부트 핵심 가이드(3)")) {
    baseViews = 30;
  } else if (title.includes("스프링 부트 핵심 가이드(2)")) {
    baseViews = 42;
  } else if (title.includes("스프링 부트 핵심 가이드(1)")) {
    baseViews = 48;
  } else if (title.includes("7장 요청 파라미터")) {
    baseViews = 28;
  } else if (title.includes("스프링 부트")) {
    baseViews = 32;
  } else if (title.includes("IoC, Bean,Proxy") || title.includes("IoC, Bean, Proxy")) {
    baseViews = 37;
  } else if (title.includes("스프링 프레임워크 2")) {
    baseViews = 34;
  } else if (title.includes("스프링 프레임워크 1")) {
    baseViews = 33;
  } else if (title.includes("방명록")) {
    baseViews = 28;
  } else if (title.includes("6장 템플릿 엔진")) {
    baseViews = 25;
  } else if (title.includes("HTTP")) {
    baseViews = 35;
  } else if (title.includes("5장 MVC 모델")) {
    baseViews = 29;
  } else if (title.includes("4장 데이터베이스 작업")) {
    baseViews = 30;
  } else if (title.includes("3-4 AOP")) {
    baseViews = 30;
  }

  useEffect(() => {
    if (link) {
      const savedClicks = localStorage.getItem(`post_clicks_v5_${link}`);
      if (savedClicks) {
        setClickCount(parseInt(savedClicks, 10));
      }
    }
  }, [link]);

  const views = baseViews + clickCount;

  const handleClick = () => {
    if (link) {
      const newClicks = clickCount + 1;
      setClickCount(newClicks);
      localStorage.setItem(`post_clicks_v5_${link}`, newClicks.toString());
    }
  };

  const cardContent = (
    <div className="group flex flex-col border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 bg-white dark:bg-[#0f172a] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full">
      <h3 className="text-xl font-bold mb-4 group-hover:text-blue-500 transition-colors">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed line-clamp-3">
        {description}
      </p>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
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
