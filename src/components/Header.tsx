import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon } from "./icons";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight">
          beomgo<span className="text-blue-500">.</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            <Link href="/" className="hover:text-blue-500 dark:hover:text-blue-500 transition-colors">Home</Link>
            <Link href="/blog" className="hover:text-blue-500 dark:hover:text-blue-500 transition-colors">Blog</Link>
            <Link href="#" className="hover:text-blue-500 dark:hover:text-blue-500 transition-colors">Projects</Link>
          </nav>
          
          <div className="h-6 w-px bg-gray-200 dark:bg-gray-800 hidden sm:block mx-2" />
          
          <div className="flex items-center gap-2">
            <a 
              href="https://github.com/gobeomgyu" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a 
              href="mailto:gobeomgyu01@gmail.com" 
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
