'use client';

import { AboutView } from "@/src/components/AboutView";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  
  return <AboutView navigate={(to) => router.push(to)} />;
}
