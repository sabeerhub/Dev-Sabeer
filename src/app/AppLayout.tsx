'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { PROJECTS, BLOG_POSTS } from '@/src/data';
import { Navigation } from '@/src/components/Navigation';
import { SeoHead } from '@/src/components/SeoHead';
import Link from 'next/link';
import { FileJson, Copy, CheckCircle, ExternalLink } from 'lucide-react';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname() || '/';
  const [showInspector, setShowInspector] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(false);

  // Normalize path by stripping trailing slashes for clean matching (except on root "/")
  const normalizedPath = pathname.endsWith('/') && pathname.length > 1 
    ? pathname.slice(0, -1) 
    : pathname;

  // Resolve active views and metadata context for Schema graphs
  let currentProject = undefined;
  let activeBlogPost = undefined;
  let activePageTitle = "Mustapha Abdulsalam (Sabeer) | Frontend Developer & AI Builder";
  let activePageDesc = "Mustapha Abdulsalam (Sabeer) is a Frontend Developer, AI Builder, and Founder of Sabeer-Verse from Nigeria. He builds AI-powered web applications, fintech systems, and modern digital experiences.";

  if (normalizedPath === '/' || normalizedPath === '/index.html') {
    activePageTitle = "Mustapha Abdulsalam (Sabeer) | Frontend Developer & AI Builder";
    activePageDesc = "Mustapha Abdulsalam (Sabeer) is a Frontend Developer, AI Builder, and Founder of Sabeer-Verse from Nigeria. He builds AI-powered web applications, fintech systems, and modern digital experiences.";
  } else if (normalizedPath === '/about') {
    activePageTitle = "About Mustapha Sabeer Abdulsalam | Sabeer-Verse";
    activePageDesc = "Biography, experience, and professional focus of Mustapha Sabeer Abdulsalam.";
  } else if (normalizedPath === '/projects') {
    activePageTitle = "Projects | Sabeer-Verse";
    activePageDesc = "Explore Sabeer's software projects: Zero Bank, Virtual Topup, Connect Call, and other developer tools.";
  } else if (normalizedPath.startsWith('/projects/')) {
    const slug = normalizedPath.substring('/projects/'.length);
    const resolvedProj = PROJECTS.find(p => p.id === slug);
    if (resolvedProj) {
      currentProject = resolvedProj;
      activePageTitle = resolvedProj.metaTitle;
      activePageDesc = resolvedProj.metaDesc;
    } else {
      activePageTitle = "404 - Page Not Found";
      activePageDesc = "The requested page does not exist in Sabeer-Verse.";
    }
  } else if (normalizedPath === '/blog') {
    activePageTitle = "Blog | Sabeer-Verse";
    activePageDesc = "Read articles by Sabeer about clean web development, tech insights, and system design.";
  } else if (normalizedPath.startsWith('/blog/')) {
    const slug = normalizedPath.substring('/blog/'.length);
    const resolvedPost = BLOG_POSTS.find(p => p.id === slug);
    if (resolvedPost) {
      activePageTitle = `${resolvedPost.title} | Sabeer-Verse Blog`;
      activePageDesc = resolvedPost.excerpt;
      activeBlogPost = resolvedPost;
    } else {
      activePageTitle = "404 - Post Not Found";
      activePageDesc = "The requested blog post does not exist.";
    }
  } else if (normalizedPath === '/contact') {
    activePageTitle = "Contact Sabeer | Mustapha Abdulsalam";
    activePageDesc = "Connect or contact Mustapha Sabeer Abdulsalam for collaboration and networking.";
  }

  // Generate current JSON Schema string for active inspection
  const activeSchemaJson = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
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
      },
      currentProject ? {
        "@type": "CreativeWork",
        "@id": `https://sabeer-ai.vercel.app/projects/${currentProject.id}/#work`,
        "name": currentProject.title,
        "headline": currentProject.tagline,
        "description": currentProject.description,
        "creator": { "@id": "https://sabeer-ai.vercel.app/#person" },
        "keywords": currentProject.techStack.join(', ')
      } : {
        "@type": "WebSite",
        "name": "Sabeer-Verse",
        "url": "https://sabeer-ai.vercel.app",
        "description": activePageDesc
      }
    ]
  }, null, 2);

  const handleCopySchemaObj = () => {
    navigator.clipboard.writeText(activeSchemaJson);
    setCopiedIndex(true);
    setTimeout(() => setCopiedIndex(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa] font-sans antialiased text-zinc-900 transition-colors selection:bg-zinc-900 selection:text-white" id="root-layout-wrapper">
      {/* Dynamic SEO Meta Engine */}
      <SeoHead 
        title={activePageTitle} 
        description={activePageDesc} 
        path={pathname} 
        project={currentProject} 
        blogPost={activeBlogPost}
      />

      {/* Navigation Bar */}
      <Navigation currentPath={pathname} />

      {/* Main Page Area */}
      <main className="flex-grow max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4" id="primary-view-container">
        {children}
      </main>

      {/* Apple-level minimal footer */}
      <footer className="bg-white border-t border-zinc-100 py-12 text-center" id="global-editorial-footer">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Linked indices grid */}
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-mono text-zinc-400 uppercase tracking-widest pb-4" id="footer-directory-indexes">
            <Link href="/" className="hover:text-zinc-900 transition-colors">Core [Home]</Link>
            <Link href="/about" className="hover:text-zinc-900 transition-colors">Biography</Link>
            <Link href="/projects" className="hover:text-zinc-900 transition-colors">Software Directory</Link>
            <Link href="/blog" className="hover:text-zinc-900 transition-colors">Aviation Thoughts</Link>
            <Link href="/contact" className="hover:text-zinc-900 transition-colors">Backlink Hub</Link>
          </div>

          <p className="text-xs text-zinc-450 font-sans leading-relaxed">
            Authorized Web Identity: Mustapha &ldquo;Sabeer&rdquo; Abdulsalam (<span className="text-zinc-650 font-medium">Sabeer-Verse</span>)
          </p>
          
          <div className="flex justify-center items-center space-x-2 text-[10px] font-mono text-zinc-400" id="footer-authenticity-credits">
            <span>Graph Registry: #4bfed8e0-42ae-4c94-88f9-9a836b5189ec</span>
            <span>•</span>
            <button 
              onClick={() => setShowInspector(!showInspector)} 
              className="text-zinc-600 hover:text-zinc-900 font-bold underline flex items-center space-x-1"
            >
              <FileJson size={10} />
              <span>{showInspector ? "Fold JSON-LD" : "Inspect Google Graph Schema"}</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Collapsible Live Google Entity JSON-LD Inspector Panel */}
      {showInspector && (
        <div className="fixed bottom-0 right-0 left-0 z-50 bg-white border-t border-zinc-200 shadow-2xl animate-slideUp font-mono text-left max-w-4xl mx-auto rounded-t-xl" id="google-entity-inspector-sheet">
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100">
            <div className="flex items-center space-x-2">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-zinc-900">ACTIVE GOOGLE ENTITY SCHEMA (JSON-LD)</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleCopySchemaObj}
                className="text-xs text-zinc-600 hover:text-zinc-900 font-bold flex items-center space-x-1 border border-zinc-250 px-2.5 py-1 rounded bg-zinc-50"
              >
                {copiedIndex ? (
                  <>
                    <CheckCircle size={11} className="text-emerald-500" />
                    <span>COPIED DATA</span>
                  </>
                ) : (
                  <>
                    <Copy size={11} />
                    <span>COPY GRAPH</span>
                  </>
                )}
              </button>
              <button 
                onClick={() => setShowInspector(false)}
                className="text-zinc-400 hover:text-zinc-900 text-xs font-bold p-1 hover:bg-zinc-50 rounded"
              >
                CLOSE [X]
              </button>
            </div>
          </div>

          <div className="p-6 overflow-y-auto max-h-64 text-[11px] text-zinc-700 bg-zinc-950 text-emerald-400 scrollbar-thin">
            <pre className="whitespace-pre-wrap select-all">{activeSchemaJson}</pre>
          </div>

          <div className="px-6 py-3 border-t border-zinc-100 bg-zinc-50 flex justify-between items-center text-[10px] text-zinc-500">
            <span>Direct crawl target: Mustapha Abdulsalam, alternateName: Sabeer, brand: Sabeer-Verse</span>
            <a 
              href="https://validator.schema.org/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold hover:text-zinc-900 flex items-center space-x-1"
            >
              <span>Validate via Schema.org Validator</span>
              <ExternalLink size={9} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
