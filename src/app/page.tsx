import { Header } from "@/components/Header";
import { GithubContributions } from "@/components/GithubContributions";
import { ProjectCard } from "@/components/ProjectCard";
import { PostCard } from "@/components/PostCard";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const dummyProjects = [
    {
      title: "Clean Architecture 기반의 기술 블로그",
      description: "Next.js 14 App Router 환경에 Hexagonal Architecture를 도입하여, 비즈니스 로직과 UI/데이터 소스를 완벽하게 분리한 확장 가능한 웹 플랫폼",
      tags: ["Next.js", "Clean Architecture", "TypeScript"],
      date: "2026.01",
      githubUrl: "#"
    },
    {
      title: "영화 리뷰 및 시청 인증 서비스",
      description: "Spring Boot, FastAPI, PHP 등 다양한 언어(Polyglot)로 구현된 마이크로서비스들을 Docker 컨테이너로 오케스트레이션하고, Spring Cloud Gateway를 통해 단일 진입점을 구축...",
      tags: ["MSA", "Spring Boot", "Docker"],
      date: "2025.11",
      githubUrl: "#"
    }
  ];

  const dummyPosts = [
    {
      title: "Welcome to My Blog",
      description: "Welcome to my new blog. Stay tuned for more updates!",
      tags: ["Blog", "Update"],
      date: "2026. 1. 4.",
      readTime: "1 min read"
    }
  ];

  return (
    <>
      <Header />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-12 md:py-20">

        {/* Hero Section */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
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
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <a href="#" className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group">
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dummyProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                date={project.date}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </section>

        {/* Recent Posts Section */}
        <section className="mt-24">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl font-bold">Recent Posts</h2>
            <a href="https://velog.io/@ykyk3125/posts" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group">
              Read More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dummyPosts.map((post, index) => (
              <PostCard
                key={index}
                title={post.title}
                description={post.description}
                tags={post.tags}
                date={post.date}
                readTime={post.readTime}
              />
            ))}
          </div>
        </section>

      </main>

      <footer className="w-full border-t border-gray-200 dark:border-gray-800 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} beomgo. All rights reserved.
      </footer>
    </>
  );
}
