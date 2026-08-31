import { getVelogPosts } from "@/lib/velog";
import { BlogClient } from "./BlogClient";

export default async function Blog() {
  const posts = await getVelogPosts();

  return (
    <>
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-12 md:py-20">
        <BlogClient posts={posts} />
      </main>

      <footer className="w-full border-t border-gray-200 dark:border-gray-800 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} beomgg. All rights reserved.
      </footer>
    </>
  );
}
