'use client';

import { use } from "react";
import { BlogView } from "@/src/components/BlogView";
import { useRouter } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function BlogPostDetail({ params }: PageProps) {
  const router = useRouter();
  const { id } = use(params);

  return <BlogView navigate={(to) => router.push(to)} activeSlug={id} />;
}
