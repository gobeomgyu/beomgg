import { GithubContributions } from "@/components/GithubContributions";
import { ProjectCard } from "@/components/ProjectCard";
import { PostCard } from "@/components/PostCard";
import { ArrowRight } from "lucide-react";
import { getVelogPosts } from "@/lib/velog";
import { projectsData } from "@/lib/data";

export default async function Home() {
  const displayProjects = projectsData.slice(0, 2);

  const allPosts = await getVelogPosts();
  const velogPosts = allPosts.slice(0, 4);
  const displayPosts = velogPosts.length > 0 ? velogPosts : [
    {
      title: "Velog 글을 불러오는 중입니다...",
      description: "잠시만 기다려주세요.",
      tags: ["Loading"],
      date: "",
      readTime: "",
      link: ""
    }
  ];

  return (
    <>
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-12 md:py-20">

        {/* Hero Section */}
        <section className="mb-20">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            DEV <span className="text-blue-500">:</span> Building Value
          </h1>

        </section>

        {/* GitHub Contributions Section */}
        <section className="mb-24">
          <GithubContributions />
        </section>

        {/* Featured Projects Section */}
        <section>
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl font-bold">Projects</h2>
            <a href="/projects" className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group">
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayProjects.map((project, index) => (
              <ProjectCard
                key={index}
                slug={project.slug}
                title={project.title}
                description={project.description}
                tags={project.tags}
                date={project.date}
                githubUrl={project.githubUrl}
                inProgress={project.inProgress}
              />
            ))}
          </div>
        </section>

        {/* Recent Posts Section */}
        <section className="mt-24">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl font-bold">Recent Posts</h2>
            <a href="/blog" className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group">
              Read More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayPosts.map((post, index) => (
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
        </section>

      </main>

      <footer className="w-full border-t border-gray-200 dark:border-gray-800 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} beomgg. All rights reserved.
      </footer>
    </>
  );
}
