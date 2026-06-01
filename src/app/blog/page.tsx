'use client';

import { BlogView } from "@/src/components/BlogView";
import { useRouter } from "next/navigation";

export default function Blog() {
  const router = useRouter();
  
  return <BlogView navigate={(to) => router.push(to)} />;
}
