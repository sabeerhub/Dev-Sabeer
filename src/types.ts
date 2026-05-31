export interface Project {
  id: string; // url slug e.g. "zero-bank"
  path: string; // /projects/zero-bank
  title: string;
  tagline: string;
  description: string;
  category: "Fintech" | "Telecom" | "AI Systems" | "Real-Time Systems" | "SaaS Core" | "Fintech / Payments";
  featured: boolean;
  metaTitle: string;
  metaDesc: string;
  problem: string;
  architecture: string[];
  features: string[];
  systemFlow: string;
  security: string[];
  techStack: string[];
  stats?: { label: string; value: string }[];
}

export interface BlogPost {
  id: string; // slug
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string; // Markdown or simple blocks
  tags: string[];
}
