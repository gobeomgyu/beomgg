import { Header } from "@/components/Header";
import { PostCard } from "@/components/PostCard";
import { getVelogPosts } from "@/lib/velog";
import { Search } from "lucide-react";

export default async function Blog() {
  const posts = await getVelogPosts();

  return (
    <>
      <Header />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
              All Posts
            </h1>
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              총 <span className="font-bold text-gray-700 dark:text-gray-300">{posts.length}</span>개의 글이 작성되었습니다.
            </p>
          </div>
          
          <div className="relative w-full md:w-80 mt-2 md:mt-0">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Search ( ⌘ + k )"
              className="w-full pl-11 pr-4 py-3 bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-gray-800 rounded-full text-sm font-medium text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              description={post.description}
              tags={post.tags}
              date={post.date}
              readTime={post.readTime}
              link={post.link}
            />
          ))}
        </div>
      </main>

      <footer className="w-full border-t border-gray-200 dark:border-gray-800 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} beomgg. All rights reserved.
      </footer>
    </>
  );
}
