import { Project } from '../types';
import { PROJECTS } from '../data';
import { ArrowLeft, ArrowRight, ShieldCheck, Cpu, Terminal, Sparkles, Network, ExternalLink, HelpCircle, Code, ListCollapse, Lock } from 'lucide-react';

interface ProjectDetailViewProps {
  projectId: string;
  navigate: (to: string) => void;
}

export function ProjectDetailView({ projectId, navigate }: ProjectDetailViewProps) {
  // Find project matching ID
  const project = PROJECTS.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="py-20 px-4 max-w-xl mx-auto text-center space-y-4" id="project-not-found">
        <h1 className="text-xl font-sans font-bold text-zinc-900">Case Study Not Resolved</h1>
        <p className="text-sm text-zinc-500 font-sans">
          The requested system node identifier <code className="bg-zinc-100 px-1 py-0.5 rounded font-mono text-xs text-rose-600">{projectId}</code> is not mapped within Sabeer-Verse.
        </p>
        <button 
          onClick={() => navigate('/projects')}
          className="text-xs font-mono text-zinc-950 underline pt-4 block mx-auto"
        >
          Return to Registry Directory
        </button>
      </div>
    );
  }

  // Find next project for internal linking chain
  const currentIdx = PROJECTS.findIndex(p => p.id === project.id);
  const nextProject = PROJECTS[(currentIdx + 1) % PROJECTS.length];

  return (
    <div className="py-8 px-4 max-w-4xl mx-auto space-y-12 text-left" id={`case-study-${project.id}`}>
      {/* Dynamic SEO Meta Spec Sheet */}
      <section className="bg-zinc-50/50 border border-zinc-200/50 rounded-xl p-5 md:p-6 space-y-3" id="seo-meta-registry">
        <div className="flex items-center space-x-2 border-b border-zinc-200 pb-2">
          <Terminal size={14} className="text-zinc-500" />
          <h2 className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-bold">Metadata Definition &amp; Schema Registry</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono" id="seo-indices-details">
          <div className="space-y-1">
            <span className="text-[9px] text-zinc-400 block uppercase">SEO Page Title</span>
            <span className="text-zinc-900 font-semibold block break-all">{project.metaTitle}</span>
          </div>
          <div className="space-y-1">
            <span className="text-[9px] text-zinc-400 block uppercase">SEO Meta Description</span>
            <span className="text-zinc-500 block leading-tight">{project.metaDesc}</span>
          </div>
          <div className="space-y-1">
            <span className="text-[9px] text-zinc-400 block uppercase">Indexed Schema.org Class</span>
            <span className="text-zinc-800 font-semibold block">CreativeWork · Person Associate</span>
          </div>
          <div className="space-y-1">
            <span className="text-[9px] text-zinc-400 block uppercase">Canonical URL Target</span>
            <span className="text-zinc-900 block font-semibold break-all">https://dev-sabeer.vercel.app{project.path}</span>
          </div>
        </div>
      </section>

      {/* Main Core Title Header */}
      <section className="space-y-6 pb-6 border-b border-zinc-100" id="project-main-header">
        <button
          onClick={() => navigate('/projects')}
          className="text-xs font-mono text-zinc-400 hover:text-zinc-900 transition-colors flex items-center space-x-1.5"
          id="back-to-projects-registry-btn"
        >
          <ArrowLeft size={12} />
          <span>Back to Grid Registry</span>
        </button>

        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 bg-zinc-50 border border-zinc-100 px-2.5 py-0.5 rounded">
              {project.category}
            </span>
            {project.featured && (
              <span className="text-[10px] font-mono font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded flex items-center gap-1">
                <Sparkles size={10} />
                <span>Primary Entity Showcase</span>
              </span>
            )}
          </div>
          
          {/* H1 Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans tracking-tight font-extrabold text-zinc-900" id="project-detail-title-h1">
            {project.title}
          </h1>

          <p className="text-md sm:text-xl font-sans text-zinc-500 tracking-tight max-w-3xl leading-snug">
            {project.tagline}
          </p>
        </div>

        {/* Big Metrics Row */}
        {project.stats && (
          <div className="grid grid-cols-3 gap-4 border-t border-b border-zinc-100 py-6 my-6 font-mono text-left" id="project-metrics-row">
            {project.stats.map((stat, sidx) => (
              <div key={sidx} className="space-y-1">
                <span className="text-[10px] text-zinc-400 uppercase tracking-tight block">{stat.label}</span>
                <span className="text-lg sm:text-2xl font-black text-zinc-950 block">{stat.value}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Structured Case Study Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10" id="case-study-grid-organization">
        
        {/* Main Content Area */}
        <div className="md:col-span-2 space-y-10" id="case-study-main">
          
          {/* 1. Problem Statement */}
          <div className="space-y-3" id="problem-area">
            <h3 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
              <HelpCircle size={14} className="text-zinc-500" />
              01 / Problem Statement
            </h3>
            <p className="text-[#333] text-sm sm:text-base leading-relaxed font-sans font-normal" id="problem-text">
              {project.problem}
            </p>
          </div>

          {/* 2. Technical Architecture */}
          <div className="space-y-4" id="architecture-area">
            <h3 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
              <Cpu size={14} className="text-zinc-500" />
              02 / Technical Architecture
            </h3>
            
            <ul className="space-y-2 font-sans text-sm text-[#444]" id="architecture-list">
              {project.architecture.map((arch, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="h-5 w-5 shrink-0 bg-zinc-100 text-zinc-700 text-[10px] font-mono rounded flex items-center justify-center font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{arch}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Features List */}
          <div className="space-y-4" id="features-area">
            <h3 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
              <ListCollapse size={14} className="text-zinc-500" />
              03 / Feature Highlights (Target Keywords)
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="features-grid-items">
              {project.features.map((feature, idx) => (
                <div key={idx} className="border border-zinc-100 p-4 rounded-xl bg-white space-y-1" id={`feature-meta-${idx}`}>
                  <span className="text-[9px] font-mono text-emerald-600 font-bold block uppercase tracking-wider">✔ Enabled Feature</span>
                  <p className="text-xs text-[#444] leading-relaxed font-sans inline-block select-all">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. System Flow Explanation */}
          <div className="space-y-3" id="flow-area">
            <h3 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
              <Network size={14} className="text-zinc-500" />
              04 / System Flow &amp; State Execution
            </h3>
            <p className="text-sm text-[#444] leading-relaxed font-sans font-normal" id="flow-explanation">
              {project.systemFlow}
            </p>
          </div>

          {/* 5. Security Considerations */}
          <div className="space-y-4" id="security-area">
            <h3 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
              <Lock size={14} className="text-zinc-500" />
              05 / Security Strategy &amp; Defense Core
            </h3>
            
            <div className="border border-zinc-100 p-6 rounded-xl bg-white space-y-4" id="security-container">
              {project.security.map((secRule, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs leading-relaxed text-zinc-650" id={`security-${idx}`}>
                  <ShieldCheck size={14} className="text-zinc-500 shrink-0 mt-0.5" />
                  <span className="font-sans text-zinc-600">{secRule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar specs area */}
        <div className="space-y-6" id="case-study-sidebar">
          
          {/* Tech Stack Box */}
          <div className="border border-zinc-100 p-6 rounded-xl bg-[#ffffff] space-y-4" id="sidebar-techstack">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-450 font-bold border-b border-zinc-50 pb-2">
              Technology Stack
            </h4>
            
            <div className="flex flex-wrap gap-1.5" id="techstack-badges">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-xs bg-zinc-50 border border-zinc-100 text-zinc-800 px-2.5 py-1 rounded font-mono font-medium block">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Flow Diagram Visual */}
          <div className="border border-zinc-100 p-5 rounded-xl bg-white space-y-4" id="sidebar-visual-flow">
            <span className="text-[10px] font-mono text-zinc-400 uppercase block font-semibold">System Stream Sequence</span>
            
            <div className="p-4 border border-zinc-50 bg-[#fafafa]/50 rounded font-mono text-[10px] divide-y divide-zinc-100 space-y-2">
              <div className="flex justify-between pb-1.5 items-center">
                <span className="text-zinc-400">Client UI</span>
                <span className="text-zinc-500 font-bold">→ [gRPC/WS]</span>
              </div>
              <div className="flex justify-between py-1.5 items-center">
                <span className="text-zinc-450">Broker Stack</span>
                <span className="text-zinc-900 font-bold">SHA-512 Validated</span>
              </div>
              <div className="flex justify-between py-1.5 items-center">
                <span className="text-zinc-450">Memory Cache</span>
                <span className="text-zinc-900 font-bold">Ring-Buffer Map</span>
              </div>
              <div className="flex justify-between pt-1.5 items-center">
                <span className="text-zinc-450">Ledger Db</span>
                <span className="text-zinc-700 font-bold font-mono">STATE SYNC [OK]</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Internal Indexing Links - Back to Home or Next Case Study */}
      <section className="mt-12 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row justify-between items-center gap-6" id="case-study-internal-linking">
        <button
          onClick={() => navigate('/')}
          className="text-xs font-mono text-zinc-400 hover:text-zinc-950 transition-colors flex items-center space-x-1"
        >
          <span>← Back to Primary Entity (Home)</span>
        </button>

        <button
          onClick={() => navigate('/projects')}
          className="text-xs font-mono text-zinc-400 hover:text-zinc-950 transition-colors flex items-center space-x-1"
        >
          <span>Registry Directory</span>
        </button>

        <button
          onClick={() => navigate(`/projects/${nextProject.id}`)}
          className="px-4 py-2 bg-zinc-950 text-white rounded-lg text-xs font-mono font-medium hover:bg-zinc-850 duration-200 transition-colors flex items-center space-x-1.5"
          id="next-project-internal-link"
        >
          <span>Read: {nextProject.title}</span>
          <ArrowRight size={12} />
        </button>
      </section>
    </div>
  );
}
