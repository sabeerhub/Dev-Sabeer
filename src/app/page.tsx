'use client';

import { HomeView } from "@/src/components/HomeView";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  return <HomeView navigate={(to) => router.push(to)} />;
}
