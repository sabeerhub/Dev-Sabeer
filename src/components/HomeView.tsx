import { PROJECTS, BLOG_POSTS } from '../data';
import { Project } from '../types';
import { Eye, ArrowRight, Server, Shield, Database, Smartphone, Network, TrendingUp, Search, UserCheck } from 'lucide-react';

interface HomeViewProps {
  navigate: (to: string) => void;
}

export function HomeView({ navigate }: HomeViewProps) {
  const featuredProjects = PROJECTS.filter(p => p.featured);

  return (
    <div className="space-y-20 py-8 px-4 max-w-4xl mx-auto" id="home-view-container">
      {/* Hero Section */}
      <section className="space-y-8 text-left border-b border-zinc-100 pb-16" id="hero-section">
        <div className="inline-flex items-center space-x-1.5 border border-zinc-200 bg-white px-3 py-1 rounded-full text-zinc-600">
          <span className="text-[10px] uppercase font-mono tracking-wider font-medium text-zinc-500">Personal Portfolio</span>
        </div>

        {/* H1 - Exactly one per page */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans tracking-tight font-extrabold text-zinc-900 leading-[1.1]" id="main-identity-h1">
          Mustapha Abdulsalam
        </h1>

        {/* H2 - Subheading */}
        <h2 className="text-md sm:text-xl font-mono text-zinc-500 tracking-tight font-medium" id="identity-h2">
          Frontend Developer &amp; AI Builder
        </h2>

        {/* SEO Paragraph */}
        <div className="space-y-4 max-w-2xl text-[#444] text-base sm:text-lg leading-relaxed font-sans" id="seo-brand-text">
          <p>
            I am <strong className="text-zinc-950 font-semibold">Mustapha Abdulsalam</strong>, also known as <strong className="text-zinc-950 font-semibold">Sabeer</strong>. As a frontend developer and AI builder in Nigeria, I craft high-performance web applications and intelligent interfaces with absolute pixel precision.
          </p>
          <p>
            Explore my featured work, including the <span className="text-zinc-950 font-medium cursor-pointer underline decoration-zinc-300 hover:decoration-zinc-855 transition-colors" onClick={() => navigate('/projects/zero-bank')}>Zero Bank fintech project</span> and <span className="text-zinc-950 font-medium cursor-pointer underline decoration-zinc-300 hover:decoration-zinc-855 transition-colors" onClick={() => navigate('/projects/aura-pay')}>Aura Pay</span>.
          </p>
        </div>

        {/* Dynamic CTAs */}
        <div className="flex flex-wrap gap-4 pt-4" id="hero-ctas">
          <button
            onClick={() => navigate('/projects')}
            className="px-5 py-2.5 bg-zinc-950 hover:bg-zinc-850 text-white rounded-lg text-xs font-mono font-medium flex items-center space-x-2 shadow-sm transition-all hover:scale-[1.01]"
          >
            <span>Explore Projects</span>
            <ArrowRight size={13} />
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="px-5 py-2.5 border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300 text-zinc-700 rounded-lg text-xs font-mono font-medium transition-all"
          >
            Get in touch
          </button>
        </div>
      </section>

      {/* Target Entity Clusters Map (Highlights of how this fits ranking params) */}
      <section className="bg-[#ffffff] border border-zinc-100 rounded-xl p-6 sm:p-8 space-y-6" id="ranking-clusters-section">
        <div className="flex items-center space-x-2 border-b border-zinc-100 pb-3">
          <TrendingUp size={16} className="text-zinc-400" />
          <h3 className="text-xs font-mono tracking-wider text-zinc-400 uppercase font-semibold">Professional Focus Areas</h3>
        </div>
        
        <p className="text-xs text-zinc-500 leading-relaxed font-sans">
          Here are the main areas I focus on when building web software and creative designs:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left" id="semantic-clusters-grid">
          <div className="border border-zinc-100 p-4 rounded-lg bg-[#fafafa]/50 hover:bg-zinc-50 transition-colors">
            <span className="text-[10px] font-mono font-semibold uppercase text-zinc-400 block mb-1">Focus #1</span>
            <span className="text-sm font-sans font-bold text-zinc-850">Frontend Development</span>
            <p className="text-xs text-zinc-500 mt-1 leading-normal">
              Building clean, interactive, and fast user interfaces with modern tools like React and Tailwind CSS.
            </p>
          </div>
          <div className="border border-zinc-100 p-4 rounded-lg bg-[#fafafa]/50 hover:bg-zinc-50 transition-colors">
            <span className="text-[10px] font-mono font-semibold uppercase text-zinc-400 block mb-1">Focus #2</span>
            <span className="text-sm font-sans font-bold text-zinc-850">Visual &amp; UI Design</span>
            <p className="text-xs text-zinc-500 mt-1 leading-normal">
              Creating neat digital layouts using proper typography, balanced spacing, and subtle colors.
            </p>
          </div>
          <div className="border border-zinc-100 p-4 rounded-lg bg-[#fafafa]/50 hover:bg-zinc-50 transition-colors">
            <span className="text-[10px] font-mono font-semibold uppercase text-zinc-400 block mb-1">Focus #3</span>
            <span className="text-sm font-sans font-bold text-zinc-850">AI Tooling &amp; Integrations</span>
            <p className="text-xs text-zinc-500 mt-1 leading-normal">
              Connecting generative artificial intelligence models to help automate apps and make things easier for users.
            </p>
          </div>
          <div className="border border-zinc-100 p-4 rounded-lg bg-[#fafafa]/50 hover:bg-zinc-50 transition-colors">
            <span className="text-[10px] font-mono font-semibold uppercase text-zinc-400 block mb-1">Focus #4</span>
            <span className="text-sm font-sans font-bold text-zinc-850">Fintech Web Systems</span>
            <p className="text-xs text-zinc-500 mt-1 leading-normal">
              Designing visually clear web interfaces and dashboard states to represent transaction feeds and balances.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="space-y-8" id="featured-projects-section">
        <div className="flex justify-between items-baseline border-b border-zinc-100 pb-4">
          <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-500 font-semibold flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-900"></span>
            Featured Case Studies
          </h3>
          <button 
            onClick={() => navigate('/projects')}
            className="text-xs font-mono text-zinc-400 hover:text-zinc-950 transition-colors flex items-center space-x-1"
          >
            <span>All Case Studies ({PROJECTS.length})</span>
            <ArrowRight size={12} />
          </button>
        </div>

        <div className="space-y-6" id="projects-feed">
          {featuredProjects.map((project) => (
            <div 
              key={project.id}
              className="group border border-zinc-100 rounded-xl p-6 sm:p-8 bg-white hover:border-zinc-300 transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.02)] cursor-pointer"
              onClick={() => navigate(`/projects/${project.id}`)}
              id={`featured-card-${project.id}`}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div className="space-y-2">
                  <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 bg-zinc-50 border border-zinc-100 px-2 py-0.5 rounded">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-sans font-semibold tracking-tight text-zinc-900 group-hover:text-zinc-950 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-zinc-500 font-sans tracking-tight leading-normal line-clamp-2 max-w-2xl">
                    {project.tagline}
                  </p>
                </div>

                <div className="flex flex-row sm:flex-col gap-2 shrink-0 text-left sm:text-right font-mono" id="project-mini-stats">
                  {project.stats?.slice(0, 2).map((stat, sIdx) => (
                    <div key={sIdx}>
                      <span className="text-[10px] text-zinc-400 block uppercase tracking-tight">{stat.label}</span>
                      <span className="text-xs font-bold text-zinc-900 block">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Badges footer */}
              <div className="mt-6 pt-4 border-t border-zinc-50 flex flex-wrap gap-1.5 justify-between items-center" id="project-footer">
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-[10px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded font-mono">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[10px] text-zinc-400 px-1 font-mono">+{project.techStack.length - 4} more</span>
                  )}
                </div>
                <span className="text-xs font-mono text-zinc-400 group-hover:text-zinc-950 translate-x-0 group-hover:translate-x-1 duration-200 transition-all flex items-center gap-1">
                  Read Case Study <ArrowRight size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Semantic Blog Spotlight */}
      <section className="space-y-8" id="recent-articles-section">
        <div className="flex justify-between items-baseline border-b border-zinc-100 pb-4">
          <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-500 font-semibold flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-900"></span>
            Aviation of Thought (Core Articles)
          </h3>
          <button 
            onClick={() => navigate('/blog')}
            className="text-xs font-mono text-zinc-400 hover:text-zinc-950 transition-colors flex items-center space-x-1"
          >
            <span>All Articles</span>
            <ArrowRight size={12} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="articles-spotlight">
          {BLOG_POSTS.slice(0, 2).map((post) => (
            <article 
              key={post.id}
              className="border border-zinc-100 p-6 rounded-xl bg-[#ffffff] hover:border-zinc-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.01)] transition-all cursor-pointer flex flex-col justify-between space-y-4"
              onClick={() => navigate('/blog')}
              id={`recent-blog-${post.id}`}
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-[10px] font-mono text-zinc-400">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h4 className="text-base font-sans font-bold text-zinc-900 hover:text-zinc-950 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h4>
                <p className="text-xs text-zinc-500 font-sans leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-1">
                {post.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-[9px] bg-zinc-50 border border-zinc-100 text-zinc-500 px-1.5 py-0.5 rounded font-mono">
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Professional Core Verification Footer */}
      <section className="border-t border-zinc-100 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6" id="entity-validation-banner">
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider block">Sabeer-Verse © 2026</span>
          <p className="text-xs text-zinc-500 max-w-md font-sans leading-normal">
            A verified systems engineering ledger curated by Mustapha &ldquo;Sabeer&rdquo; Abdulsalam.
          </p>
        </div>
        <div className="shrink-0 text-zinc-400 font-mono text-[10px]" id="entity-tag-hash">
          <span>Schema Verified &amp; Standardized</span>
        </div>
      </section>
    </div>
  );
}
