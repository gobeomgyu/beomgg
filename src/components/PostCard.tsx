"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

interface PostCardProps {
  title: string;
  description: string;
  tags: string[];
  date: string;
  link?: string;
}


export function PostCard({ title, description, tags, date, link }: PostCardProps) {
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
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setClickCount(parseInt(savedClicks, 10));
      }
    }
  }, [link]);

  const views = baseViews + clickCount;

  const handleClick = () => {
    if (link) {
      const now = new Date();
      const kstTime = new Date(now.getTime() + 9 * 60 * 60 * 1000);
      const kstDate = kstTime.toISOString().split('T')[0]; // "YYYY-MM-DD" in KST
      
      const savedDate = localStorage.getItem(`post_date_v5_${link}`);
      
      let shouldIncrement = true;
      if (savedDate === kstDate) {
        shouldIncrement = false;
      }

      if (shouldIncrement) {
        const newClicks = clickCount + 1;
        setClickCount(newClicks);
        localStorage.setItem(`post_clicks_v5_${link}`, newClicks.toString());
        localStorage.setItem(`post_date_v5_${link}`, kstDate);
      }
    }
  };

  const cardContent = (
    <div className="group flex flex-col border border-slate-200 dark:border-slate-800 rounded-3xl p-7 bg-white dark:bg-[#0f172a] shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full">
      <h3 className="text-[22px] font-bold mb-3 text-slate-900 dark:text-slate-100 group-hover:text-blue-600 transition-colors tracking-tight leading-snug">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400 mb-6 flex-grow leading-[1.7] text-[15px] line-clamp-3">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-5">
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
        {views > 0 ? (
          <span className="flex items-center gap-1.5 text-[14px] text-slate-500 dark:text-slate-400 font-semibold tracking-wide">
            <Eye size={16} />
            {views.toLocaleString()}
          </span>
        ) : (
          <span />
        )}
        <span className="text-[14px] text-slate-500 dark:text-slate-400 font-semibold tracking-wide">
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
