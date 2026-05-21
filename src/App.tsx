import { useState, useEffect } from 'react';
import { PROJECTS, BLOG_POSTS } from './data';
import { SeoHead } from './components/SeoHead';
import { Navigation } from './components/Navigation';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { ProjectsView } from './components/ProjectsView';
import { ProjectDetailView } from './components/ProjectDetailView';
import { BlogView } from './components/BlogView';
import { ContactView } from './components/ContactView';
import { Code, FileJson, ChevronDown, ChevronUp, Copy, CheckCircle, Search, ExternalLink } from 'lucide-react';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [showInspector, setShowInspector] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(false);

  // Sync state with browser location
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Custom router navigate trigger
  const navigate = (to: string) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Resolve active views and metadata
  let activePageTitle = "Mustapha “Sabeer” Abdulsalam | Frontend Developer";
  let activePageDesc = "Mustapha Sabeer Abdulsalam (Sabeer-Verse) is a frontend developer, AI builder, and software engineer.";
  let currentProject = undefined;

  let activeComponent = <HomeView navigate={navigate} />;

  // Precise routing checks
  if (currentPath === '/' || currentPath === '/index.html') {
    activePageTitle = "Mustapha “Sabeer” Abdulsalam | Sabeer-Verse Portfolio";
    activePageDesc = "Mustapha 'Sabeer' Abdulsalam is a frontend developer and software engineer from Nigeria. This is his official portfolio featuring fintech projects, AI experiments, and web design.";
    activeComponent = <HomeView navigate={navigate} />;
  } else if (currentPath === '/about') {
    activePageTitle = "About Mustapha Sabeer Abdulsalam | Sabeer-Verse";
    activePageDesc = "Biography, experience, and professional focus of Mustapha Sabeer Abdulsalam.";
    activeComponent = <AboutView navigate={navigate} />;
  } else if (currentPath === '/projects') {
    activePageTitle = "Projects | Sabeer-Verse";
    activePageDesc = "Explore Sabeer's software projects: Zero Bank, Virtual Topup, Connect Call, and other developer tools.";
    activeComponent = <ProjectsView navigate={navigate} />;
  } else if (currentPath.startsWith('/projects/')) {
    const slug = currentPath.substring('/projects/'.length);
    const resolvedProj = PROJECTS.find(p => p.id === slug);
    if (resolvedProj) {
      currentProject = resolvedProj;
      activePageTitle = resolvedProj.metaTitle;
      activePageDesc = resolvedProj.metaDesc;
      activeComponent = <ProjectDetailView projectId={slug} navigate={navigate} />;
    } else {
      activePageTitle = "404 - Page Not Found";
      activePageDesc = "The requested page does not exist in Sabeer-Verse.";
      activeComponent = <ProjectDetailView projectId={slug} navigate={navigate} />;
    }
  } else if (currentPath === '/blog') {
    activePageTitle = "Blog | Sabeer-Verse";
    activePageDesc = "Read articles by Sabeer about clean web development, tech insights, and system design.";
    activeComponent = <BlogView navigate={navigate} />;
  } else if (currentPath === '/contact') {
    activePageTitle = "Contact Sabeer | Mustapha Abdulsalam";
    activePageDesc = "Connect or contact Mustapha Sabeer Abdulsalam for collaboration and networking.";
    activeComponent = <ContactView />;
  } else {
    // Catch-all fallback
    activeComponent = <HomeView navigate={navigate} />;
  }

  // Generate current JSON Schema string for active inspection
  const activeSchemaJson = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://dev-sabeer.vercel.app/#person",
        "name": "Mustapha Abdulsalam",
        "alternateName": "Sabeer",
        "brand": {
          "@type": "Brand",
          "name": "Sabeer-Verse"
        },
        "url": "https://dev-sabeer.vercel.app",
        "sameAs": [
          "https://linkedin.com/in/masabeer",
          "https://github.com/sabeerhub",
          "https://x.com/_msabeer_",
          "https://youtube.com/@sabeer-io",
          "https://instagram.com/_m.sabeer_",
          "https://tiktok.com/@_m.sabeer_",
          "https://t.me/sabeer_xt"
        ]
      },
      currentProject ? {
        "@type": "CreativeWork",
        "@id": `https://dev-sabeer.vercel.app/projects/${currentProject.id}/#work`,
        "name": currentProject.title,
        "headline": currentProject.tagline,
        "description": currentProject.description,
        "creator": { "@id": "https://dev-sabeer.vercel.app/#person" },
        "keywords": currentProject.techStack.join(', ')
      } : {
        "@type": "WebSite",
        "name": "Sabeer-Verse",
        "url": "https://dev-sabeer.vercel.app",
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
        path={currentPath} 
        project={currentProject} 
      />

      {/* Navigation Bar */}
      <Navigation currentPath={currentPath} navigate={navigate} />

      {/* Main Page Area */}
      <main className="flex-grow max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4" id="primary-view-container">
        {activeComponent}
      </main>

      {/* Apple-level minimal footer */}
      <footer className="bg-white border-t border-zinc-100 py-12 text-center" id="global-editorial-footer">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Linked indices grid */}
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-mono text-zinc-400 uppercase tracking-widest pb-4" id="footer-directory-indexes">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="hover:text-zinc-900 transition-colors">Core [Home]</a>
            <a href="/about" onClick={(e) => { e.preventDefault(); navigate('/about'); }} className="hover:text-zinc-900 transition-colors">Biography</a>
            <a href="/projects" onClick={(e) => { e.preventDefault(); navigate('/projects'); }} className="hover:text-zinc-900 transition-colors">Software Directory</a>
            <a href="/blog" onClick={(e) => { e.preventDefault(); navigate('/blog'); }} className="hover:text-zinc-900 transition-colors">Aviation Thoughts</a>
            <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); }} className="hover:text-zinc-900 transition-colors">Backlink Hub</a>
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
