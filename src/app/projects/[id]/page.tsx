'use client';

import { use } from "react";
import { ProjectDetailView } from "@/src/components/ProjectDetailView";
import { useRouter } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetail({ params }: PageProps) {
  const router = useRouter();
  const { id } = use(params);

  return <ProjectDetailView projectId={id} navigate={(to) => router.push(to)} />;
}
