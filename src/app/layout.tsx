import React from 'react';
import "@/src/index.css";
import { Inter } from "next/font/google";
import { AppLayout } from "./AppLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mustapha “Sabeer” Abdulsalam | Frontend Developer",
  description: "Mustapha 'Sabeer' Abdulsalam (Sabeer/Sabeer-Verse) is a frontend developer and fintech developer. Official portfolio featuring high-frequency systems and case studies like Zero Bank and Aura Pay.",
  keywords: "Mustapha Abdulsalam, Sabeer, Sabeer frontend developer, sabeer fintech developer, sabeer AI builder, Sabeer-Verse, Zero Bank, Aura Pay, fintech developer, frontend developer, Nigeria developer",
  authors: [{ name: "Mustapha 'Sabeer' Abdulsalam" }],
  robots: {
    index: true,
    follow: true,
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
              "jobTitle": "Frontend Developer & Fintech Solutions Builder",
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
                "AI Architecture",
                "Prompt Engineering",
                "Financial Technology Systems",
                "Real-Time Protocols",
                "Typography & Graphic Design"
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
