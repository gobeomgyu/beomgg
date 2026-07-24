"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { GithubIcon } from "./icons";
import { useEffect, useState } from "react";

export function GithubContributions() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 bg-white dark:bg-[#0f172a] shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <GithubIcon size={24} />
          <h2 className="text-xl font-bold">GitHub Contributions</h2>
        </div>
        <a 
          href="https://github.com/gobeomgyu" 
          target="_blank" 
          rel="noreferrer"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
        >
          @gobeomgyu
        </a>
      </div>
      
      <div className="overflow-x-auto pb-4 flex justify-center">
        <div className="min-w-max">
          {mounted && (
            <GitHubCalendar 
              username="gobeomgyu" 
              colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
              fontSize={12}
              blockSize={12}
              blockMargin={4}
            />
          )}
        </div>
      </div>
    </div>
  );
}
