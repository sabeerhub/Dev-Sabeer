import React from 'react';
import "@/src/index.css";
import { Inter } from "next/font/google";
import { AppLayout } from "./AppLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mustapha Abdulsalam (Sabeer) | Frontend Developer & AI Builder",
  description: "Mustapha Abdulsalam (Sabeer) is a Frontend Developer, AI Builder, and Founder of Sabeer-Verse from Nigeria. He builds AI-powered web applications, fintech systems, and modern digital experiences.",
  keywords: "Mustapha Abdulsalam, Sabeer, Sabeer-Verse, Frontend Developer, AI Builder, Nigerian, Prompt engineer, graphics designer, content creator, web development, fintech systems",
  authors: [{ name: "Mustapha Abdulsalam" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mustapha Abdulsalam (Sabeer) | Frontend Developer & AI Builder",
    description: "Mustapha Abdulsalam (Sabeer) is a Frontend Developer, AI Builder, and Founder of Sabeer-Verse, building AI-powered web applications, fintech systems, and modern digital products.",
    url: "https://sabeer-ai.vercel.app",
    siteName: "Sabeer-Verse",
    locale: "en_NG",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mustapha Abdulsalam (Sabeer) | Frontend Developer & AI Builder",
    description: "Mustapha Abdulsalam (Sabeer) is a Frontend Developer, AI Builder, and Founder of Sabeer-Verse, building AI-powered web applications, fintech systems, and modern digital products.",
    creator: "@_msabeer_",
  },
  other: {
    "google-site-verification": "nMvia17foXF63m1rRA3LQjeX2dTAyhd3uP3FqqD87uA",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Dynamic Google Entity Person Schema (Initial Core Bootstrap) */}
        <script
          type="application/ld+json"
          id="seo-person-schema"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://sabeer-ai.vercel.app/#person",
              "name": "Mustapha Abdulsalam",
              "alternateName": "Sabeer",
              "jobTitle": "Frontend Developer",
              "nationality": "Nigerian",
              "founder": {
                "@type": "Organization",
                "name": "Sabeer-Verse"
              },
              "brand": {
                "@type": "Brand",
                "name": "Sabeer-Verse"
              },
              "url": "https://sabeer-ai.vercel.app",
              "sameAs": [
                "https://linkedin.com/in/masabeer",
                "https://github.com/sabeerhub",
                "https://medium.com/@masabeer",
                "https://x.com/_msabeer_",
                "https://youtube.com/@sabeer-io",
                "https://instagram.com/_m.sabeer_",
                "https://tiktok.com/@_m.sabeer_",
                "https://t.me/sabeer_xt"
              ],
              "knowsAbout": [
                "Frontend Engineering",
                "Artificial Intelligence",
                "Web Development",
                "Fintech Systems",
                "Prompt engineer",
                "graphics designer",
                "content creator"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#fafafa] text-[#111] antialiased`}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
