import { PROJECTS } from '../data';
import { Project } from '../types';
import { ArrowRight, Server, Shield, Sparkles, TrendingUp, Layers, Cpu, Database } from 'lucide-react';

interface ProjectsViewProps {
  navigate: (to: string) => void;
}

export function ProjectsView({ navigate }: ProjectsViewProps) {
  // Categorize for easy visualization
  const categories = Array.from(new Set(PROJECTS.map(p => p.category)));

  return (
    <div className="py-8 px-4 max-w-4xl mx-auto space-y-16 text-left" id="projects-view-container">
      {/* Header Statement */}
      <div className="space-y-4 border-b border-zinc-100 pb-8" id="projects-header">
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-1.5">
          <Layers size={12} className="text-zinc-500" />
          CASE STUDY DIRECTORY
        </span>
        <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-zinc-900 tracking-tight" id="projects-h1">
          The Engineering Graph
        </h1>
        <p className="text-sm sm:text-base text-zinc-500 leading-relaxed font-sans max-w-2xl">
          Highly detailed architectural case studies outlining problem statements, telemetry specifications, system flows, and cryptographic configurations designed by Mustapha &ldquo;Sabeer&rdquo; Abdulsalam.
        </p>
      </div>

      {/* Featured Core Index */}
      <section className="space-y-8" id="projects-list-section">
        <div className="space-y-6">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="group border border-zinc-100 rounded-xl p-6 sm:p-8 bg-white hover:border-zinc-300 transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.02)] cursor-pointer"
              onClick={() => navigate(`/projects/${project.id}`)}
              id={`full-list-${project.id}`}
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                <div className="space-y-3 max-w-2xl">
                  {/* Category Pill */}
                  <div className="flex items-center space-x-2">
                    <span className="inline-block text-[9px] font-mono font-bold uppercase tracking-wider text-zinc-400 bg-zinc-50 border border-zinc-100 px-2 py-0.5 rounded">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center space-x-0.5 text-[9px] font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        <Sparkles size={8} />
                        <span>FLAGSHIP CORE</span>
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl font-sans font-semibold tracking-tight text-zinc-900 group-hover:text-zinc-950 transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-sm text-zinc-500 font-sans tracking-tight leading-normal">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-zinc-400 leading-relaxed max-w-xl line-clamp-2 pt-1 font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Vertical stats array */}
                <div className="flex flex-row md:flex-col gap-4 shrink-0 font-mono text-left md:text-right w-full md:w-auto" id="projects-list-stats">
                  {project.stats?.map((stat, sidx) => (
                    <div key={sidx} className="flex-1 md:flex-initial">
                      <span className="text-[9px] text-zinc-400 uppercase tracking-tight block">{stat.label}</span>
                      <span className="text-sm font-bold text-zinc-850 block">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies list */}
              <div className="mt-8 pt-4 border-t border-zinc-50 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4" id="projects-list-footer">
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-[9px] bg-zinc-50 border border-zinc-100 text-zinc-600 px-2 py-0.5 rounded font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <span className="text-xs font-mono text-zinc-400 group-hover:text-zinc-950 duration-200 transition-colors flex items-center gap-1 text-right shrink-0">
                  Inspect System Flow <ArrowRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Link to Contact SEO Hub */}
      <section className="bg-zinc-50 border border-zinc-100 p-6 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4" id="list-cta-hub">
        <p className="text-xs text-zinc-500 font-sans max-w-md leading-relaxed">
          Need custom integrations? Mustapha "Sabeer" Abdulsalam builds bespoke transactional channels, telecom architectures, and generative AI state handlers.
        </p>
        <button 
          onClick={() => navigate('/contact')}
          className="text-xs font-mono font-semibold text-zinc-950 hover:underline flex items-center gap-1.5 whitespace-nowrap"
        >
          Open Backlinks Hub <ArrowRight size={12} />
        </button>
      </section>
    </div>
  );
}
