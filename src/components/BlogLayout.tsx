import Link from "next/link";
import { ArrowLeft, Clock, User, Tag } from "lucide-react";

interface BlogLayoutProps {
  tag: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  children: React.ReactNode;
}

export default function BlogLayout({
  tag,
  title,
  author,
  date,
  readTime,
  children,
}: BlogLayoutProps) {
  return (
    <>
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-cyan transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <span className="inline-block text-xs font-semibold text-cyan bg-cyan/10 px-3 py-1 rounded-full mb-4">
            {tag}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            {title}
          </h1>
          <div className="mt-6 flex items-center gap-6 text-sm text-text-muted">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {author}
            </span>
            <span>{date}</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {readTime}
            </span>
          </div>
        </div>
      </section>

      <article className="relative pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-text-primary [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-text-primary [&_p]:text-text-secondary [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-text-secondary [&_ul]:space-y-2 [&_ul]:mb-6 [&_li]:text-text-secondary [&_strong]:text-text-primary [&_code]:text-cyan [&_code]:bg-cyan/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_blockquote]:border-l-2 [&_blockquote]:border-cyan/30 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-text-muted">
            {children}
          </div>
        </div>
      </article>
    </>
  );
}
