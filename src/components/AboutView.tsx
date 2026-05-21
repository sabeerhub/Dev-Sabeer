import { ArrowRight, Search, ShieldCheck, Mail, Globe, BrainCircuit } from 'lucide-react';

interface AboutViewProps {
  navigate: (to: string) => void;
}

export function AboutView({ navigate }: AboutViewProps) {
  const entityAssociations = [
    { label: "Name", value: "Mustapha \"Sabeer\" Abdulsalam" },
    { label: "Nickname", value: "Sabeer" },
    { label: "Brand Name", value: "Sabeer-Verse" },
    { label: "General Focus", value: "Frontend Development, AI Integration, Web Design" }
  ];

  return (
    <div className="py-8 px-4 max-w-3xl mx-auto space-y-16 text-left" id="about-view-container">
      {/* Page Title Header */}
      <div className="space-y-4 border-b border-zinc-100 pb-8" id="about-header">
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-450 font-bold block">
          ABOUT AUTHOR
        </span>
        <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-zinc-900 tracking-tight" id="about-h1">
          Biography &amp; Focus
        </h1>
        <p className="text-sm sm:text-base text-zinc-500 leading-relaxed font-sans max-w-2xl">
          An overview of the background and creative philosophy of Mustapha &ldquo;Sabeer&rdquo; Abdulsalam.
        </p>
      </div>

      {/* Core Biography / Strategy */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8" id="about-core-grid">
        <div className="md:col-span-2 space-y-6 text-[#444] text-sm sm:text-base leading-relaxed font-sans" id="about-rich-narrative">
          <h2 className="text-lg font-sans font-bold text-zinc-900" id="editorial-bio-title">My Story</h2>
          <p>
            Mustapha &ldquo;Sabeer&rdquo; Abdulsalam is a frontend developer based in Nigeria. Under his brand <strong className="text-zinc-950">Sabeer-Verse</strong>, he loves combining programming skills with eye-catching designs to build applications that are beautiful, fast, and easy to use.
          </p>
          <p>
            He builds interfaces for custom projects. Over the years, he has built fintech dashboards, messaging views, and helper apps. He focuses on clean code structure, quick load times, and simple state management so that applications run reliably anywhere.
          </p>
          <p>
            He also likes using artificial intelligence inside modern workflows. Instead of just chatting with AI, he integrates smart models directly into codebase tools to format data, automate tasks, and create helpful features for users.
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
