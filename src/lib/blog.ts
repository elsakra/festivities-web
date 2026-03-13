import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { estimateReadTime, truncate } from "@/lib/utils";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  authorBio: string;
  category: string;
  tags: string[];
  readTime: number;
  featured?: boolean;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const filePath = path.join(BLOG_DIR, filename);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title ?? "Untitled",
        description: data.description ?? truncate(content, 160),
        content,
        date: data.date ?? "2026-01-01",
        author: data.author ?? "Festivities Team",
        authorBio: data.authorBio ?? "The Festivities team.",
        category: data.category ?? "General",
        tags: data.tags ?? [],
        readTime: estimateReadTime(content),
        featured: data.featured ?? false,
      } satisfies BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "Untitled",
    description: data.description ?? truncate(content, 160),
    content,
    date: data.date ?? "2026-01-01",
    author: data.author ?? "Festivities Team",
    authorBio: data.authorBio ?? "The Festivities team.",
    category: data.category ?? "General",
    tags: data.tags ?? [],
    readTime: estimateReadTime(content),
    featured: data.featured ?? false,
  };
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const cats = new Set(posts.map((p) => p.category));
  return ["All", ...Array.from(cats)];
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const all = getAllPosts();
  const current = all.find((p) => p.slug === slug);
  if (!current) return all.slice(0, limit);

  return all
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? 1 : 0;
      const bMatch = b.category === current.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, limit);
}
