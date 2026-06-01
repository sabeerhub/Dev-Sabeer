'use client';

import { ProjectsView } from "@/src/components/ProjectsView";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();
  
  return <ProjectsView navigate={(to) => router.push(to)} />;
}
