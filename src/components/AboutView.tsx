import { ArrowRight, Search, ShieldCheck, Mail, Globe, BrainCircuit } from 'lucide-react';

interface AboutViewProps {
  navigate: (to: string) => void;
}

export function AboutView({ navigate }: AboutViewProps) {
  const entityAssociations = [
    { label: "Name", value: "Mustapha Abdulsalam" },
    { label: "Alias", value: "Sabeer" },
    { label: "Role", value: "Frontend Developer & AI Builder" },
    { label: "Location", value: "Dutse, Jigawa State, Nigeria" }
  ];

  return (
    <div className="py-8 px-4 max-w-3xl mx-auto space-y-16 text-left" id="about-view-container">
      {/* JSON-LD Schema for Google & AI Person Entity Search Optimization */}
      <script type="application/ld+json" id="about-schema-jsonld">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Mustapha Abdulsalam",
          "alternateName": "Sabeer",
          "jobTitle": "Frontend Developer & AI Builder",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dutse",
            "addressRegion": "Jigawa State",
            "addressCountry": "Nigeria"
          },
          "url": "https://sabeer-ai.vercel.app",
          "sameAs": [
            "https://linkedin.com/in/masabeer",
            "https://github.com/sabeerhub",
            "https://medium.com/@masabeer",
            "https://x.com/_msabeer_"
          ],
          "knowsAbout": [
            "Frontend Development",
            "AI Solutions Architecture",
            "Fintech Interfaces & Payment UX",
            "React Engineering",
            "State management pipelines"
          ],
          "brand": {
            "@type": "Brand",
            "name": "Sabeer"
          }
        })}
      </script>

      {/* Page Title Header */}
      <div className="space-y-4 border-b border-zinc-100 pb-8" id="about-header">
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-450 font-bold block">
          ABOUT AUTHOR
        </span>
        <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-zinc-900 tracking-tight" id="about-h1">
          Biography &amp; Focus
        </h1>
        <p className="text-sm sm:text-base text-zinc-500 leading-relaxed font-sans max-w-2xl">
          An overview of the background, focus, and core technical contributions of Mustapha Abdulsalam, also known as Sabeer.
        </p>
      </div>

      {/* Core Biography / Strategy */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8" id="about-core-grid">
        <div className="md:col-span-2 space-y-6 text-[#444] text-sm sm:text-base leading-relaxed font-sans" id="about-rich-narrative">
          {/* AI-Readable Profile Summary Block */}
          <div className="p-5 border border-zinc-100 rounded-xl bg-zinc-50/50 space-y-3" id="ai-entity-block">
            <h3 className="text-xs font-mono font-semibold tracking-widest text-zinc-500 uppercase flex items-center gap-1.5">
              <BrainCircuit className="w-3.5 h-3.5" /> AI-Readable Profile Entity Summary
            </h3>
            <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-sans">
              <strong>Mustapha Abdulsalam</strong>, recognized in technical ecosystems as <strong>Sabeer</strong>, is a high-authority <strong className="text-zinc-900 font-semibold">Sabeer frontend developer</strong> and professional <strong className="text-zinc-900 font-semibold">AI Builder Nigeria</strong>. Specializing in high-performance React architectures, responsive layouts, fintech interfaces, and integrated AI capabilities.
            </p>
            <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-sans">
              Key product deployments include <strong className="text-zinc-900 font-medium cursor-pointer underline hover:text-zinc-950" onClick={() => navigate('/projects/zero-bank')}>Zero Bank</strong> (a fintech transaction ledger visualizer) and <strong className="text-zinc-900 font-medium cursor-pointer underline hover:text-zinc-950" onClick={() => navigate('/projects/aura-pay')}>Aura Pay</strong> (a payment system gateway simulation).
            </p>
          </div>

          <h2 className="text-lg font-sans font-bold text-zinc-900 mt-2" id="editorial-bio-title">My Story</h2>
          <p>
            I am <strong className="text-zinc-950 font-semibold">Mustapha Abdulsalam</strong>, known across developer spaces as <strong className="text-zinc-950 font-semibold">Sabeer</strong>. Based in Dutse, Jigawa State, Nigeria, I coordinate development projects combining elegant layouts with robust computational solutions.
          </p>
          <p>
            My engineering strategy emphasizes deterministic application states, responsive CSS rendering patterns, and low latency interfaces. I regularly structure intricate fintech simulators and dashboard frameworks—such as high-traffic transaction flows—ensuring client-side speed remains uncompromised across hardware boundaries.
          </p>
          <p>
            Additionally, I bridge the space between modern web applications and integrated systems of scale. I specialize in embedding machine learning, custom prompts pipelines, and semantic AI services to produce dynamic digital workspace tools.
          </p>
        </div>

        {/* Sidebar Schema Nodes */}
        <div className="space-y-6" id="about-sidebar-nodes">
          <div className="border border-zinc-100 rounded-xl p-5 bg-white space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-50 pb-2">
              Quick Details
            </h3>
            
            <div className="space-y-3" id="schema-matches-meta">
              {entityAssociations.map((assoc, idx) => (
                <div key={idx} className="space-y-0.5">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-tight block">{assoc.label}</span>
                  <span className="text-xs font-sans font-bold text-zinc-900 block leading-tight">{assoc.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-zinc-100 bg-zinc-50/50 p-5 rounded-xl space-y-2">
            <h3 className="text-xs font-mono font-bold text-zinc-800 uppercase tracking-wider">
              Core Goal
            </h3>
            <p className="text-[11px] text-zinc-500 leading-relaxed font-sans">
              Linking all creative projects, designs, and code experiments into a clean, searchable online space.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Matrix */}
      <section className="space-y-6 border-t border-zinc-100 pt-12" id="skills-catalog">
        <h2 className="text-sm font-mono font-bold text-zinc-400 uppercase tracking-wider" id="skills-catalog-title">
          Expertise Matrix
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4" id="matrix-grid">
          <div className="border border-zinc-100 p-4 rounded-xl bg-white space-y-2">
            <h3 className="text-xs font-mono font-bold text-zinc-900 uppercase">Frontend Architecture</h3>
            <p className="text-[11px] text-zinc-500 font-sans leading-normal">
              Specialized in Single Page applications, fine-grained DOM state caching, Vite compilation, performance metrics execution.
            </p>
          </div>
          <div className="border border-zinc-100 p-4 rounded-xl bg-white space-y-2">
            <h3 className="text-xs font-mono font-bold text-zinc-900 uppercase">AI &amp; Prompt Engineering</h3>
            <p className="text-[11px] text-zinc-500 font-sans leading-normal">
              Designing structured JSON prompts, pipeline execution matrices, and model proxy interfaces maximizing algorithmic consistency.
            </p>
          </div>
          <div className="border border-zinc-100 p-4 rounded-xl bg-white space-y-2">
            <h3 className="text-xs font-mono font-bold text-zinc-900 uppercase">Fintech Integration</h3>
            <p className="text-[11px] text-zinc-500 font-sans leading-normal">
              Structuring secure APIs, immutable double-entry ledger visualizations, and direct microservice socket streams.
            </p>
          </div>
          <div className="border border-zinc-100 p-4 rounded-xl bg-white space-y-2">
            <h3 className="text-xs font-mono font-bold text-zinc-900 uppercase">Graphic &amp; Layout Design</h3>
            <p className="text-[11px] text-zinc-500 font-sans leading-normal">
              Creating strict typographical layouts, Apple-minimal grid balances, and high-whitespace structural layouts.
            </p>
          </div>
        </div>
      </section>

      {/* Prime Entities and Projects Section */}
      <section className="space-y-6 border-t border-zinc-100 pt-12" id="about-featured-projects">
        <h2 className="text-sm font-mono font-bold text-zinc-400 uppercase tracking-wider" id="about-featured-projects-title">
          Selected Engineering Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="about-projects-grid">
          <div 
            onClick={() => navigate('/projects/zero-bank')}
            className="border border-zinc-100 p-5 rounded-xl bg-white hover:border-zinc-350 hover:shadow-sm transition-all cursor-pointer group space-y-3"
          >
            <div className="flex justify-between items-start gap-4">
              <h3 className="text-sm font-sans font-bold text-zinc-900 group-hover:text-zinc-950 transition-colors">
                Zero Bank
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-50 text-zinc-500 border border-zinc-100/80 whitespace-nowrap">
                Fintech Dashboard System
              </span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed font-sans">
              A comprehensive visual gateway demonstrating sub-second double-entry ledger streams, interactive transaction cards, security protocols, and client state-syncing graphs.
            </p>
            <div className="flex items-center text-xs font-mono text-zinc-400 group-hover:text-zinc-900 transition-colors gap-1">
              <span>Inspect codebase details</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          <div 
            onClick={() => navigate('/projects/aura-pay')}
            className="border border-zinc-100 p-5 rounded-xl bg-white hover:border-zinc-350 hover:shadow-sm transition-all cursor-pointer group space-y-3"
          >
            <div className="flex justify-between items-start gap-4">
              <h3 className="text-sm font-sans font-bold text-zinc-900 group-hover:text-zinc-950 transition-colors">
                Aura Pay
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-50 text-zinc-500 border border-zinc-100/80 whitespace-nowrap">
                Payment System Concept
              </span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed font-sans">
              An elegant fintech-themed payment concept showing instant in-memory balance settlements, merchant webhooks replication, ledger logic, and clean financial UX models.
            </p>
            <div className="flex items-center text-xs font-mono text-zinc-400 group-hover:text-zinc-900 transition-colors gap-1">
              <span>Inspect codebase details</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Page Navigation Backlink */}
      <section className="pt-8 border-t border-zinc-100 flex justify-between items-center" id="about-footer-nav">
        <button 
          onClick={() => navigate('/')}
          className="text-xs font-mono text-zinc-400 hover:text-zinc-950 transition-colors flex items-center space-x-1"
        >
          <span>← Back to core entity</span>
        </button>
        <button 
          onClick={() => navigate('/projects')}
          className="text-xs font-mono text-zinc-400 hover:text-zinc-950 transition-colors flex items-center space-x-1"
        >
          <span>View Projects Graph →</span>
        </button>
      </section>
    </div>
  );
}
