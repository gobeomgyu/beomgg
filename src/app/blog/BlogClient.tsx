"use client";

import { useState } from "react";
import { PostCard } from "@/components/PostCard";
import { Search, X, FolderSearch } from "lucide-react";

interface Post {
  title: string;
  description: string;
  tags: string[];
  date: string;
  readTime: string;
  link: string;
}

export function BlogClient({ posts }: { posts: Post[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredPosts = posts.filter((post) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      post.title?.toLowerCase().includes(query) ||
      post.description?.toLowerCase().includes(query) ||
      post.tags?.some(tag => tag.toLowerCase().includes(query))
    );
  });

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
            All Posts
          </h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium">
            {searchQuery ? (
              <>
                <span className="text-blue-500 font-bold">&apos;{searchQuery}&apos;</span> 검색 결과 <span className="font-bold text-gray-700 dark:text-gray-300">{filteredPosts.length}</span>개
              </>
            ) : (
              <>총 <span className="font-bold text-gray-700 dark:text-gray-300">{posts.length}</span>개의 글이 작성되었습니다.</>
            )}
          </p>
        </div>
        
        <div className="relative w-full md:w-80 mt-2 md:mt-0">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-10 py-3 bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-gray-800 rounded-full text-sm font-medium text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all shadow-sm"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              description={post.description}
              tags={post.tags}
              date={post.date}
              link={post.link}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center border border-gray-200 dark:border-gray-800 rounded-2xl bg-gray-50 dark:bg-[#0f172a]/50 border-dashed">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 text-gray-400">
            <FolderSearch size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">검색 결과가 없습니다</h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mb-8 leading-relaxed">
            &apos;{searchQuery}&apos;에 매칭되는 블로그 글을 찾지 못했습니다. 다른 단어나 기술 스택으로 검색해 보세요.
          </p>
          <button 
            onClick={() => setSearchQuery("")}
            className="px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-colors shadow-sm"
          >
            검색 초기화
          </button>
        </div>
      )}
    </>
  );
}
