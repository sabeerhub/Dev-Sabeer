import { useState } from 'react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';
import { BookOpen, Calendar, ArrowLeft, ArrowRight, BookMarked, User } from 'lucide-react';

interface BlogViewProps {
  navigate: (to: string) => void;
  activeSlug?: string;
}

export function BlogView({ navigate, activeSlug }: BlogViewProps) {
  // Find resolved post from url path or fall back to local interactive tracking
  const resolvedActivePost = activeSlug ? BLOG_POSTS.find(p => p.id === activeSlug) || null : null;
  const [selectedPostState, setSelectedPostState] = useState<BlogPost | null>(null);

  const activePost = resolvedActivePost || selectedPostState;

  // Tiny inline parser to render semantically polished subheadings and bold treatments
  const renderInlineStyle = (text: string) => {
    // Pattern for matching **bold** items
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-zinc-950">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const renderContentBlock = (blockText: string, blockIdx: number) => {
    const text = blockText.trim();
    if (!text) return null;

    if (text.startsWith('### ')) {
      return (
        <h3 key={blockIdx} className="text-lg sm:text-xl font-sans font-extrabold text-zinc-900 mt-8 mb-3 tracking-tight">
          {text.replace('### ', '')}
        </h3>
      );
    }
    if (text.startsWith('## ')) {
      return (
        <h2 key={blockIdx} className="text-xl sm:text-2xl font-sans font-black text-zinc-900 mt-10 mb-4 tracking-tight">
          {text.replace('## ', '')}
        </h2>
      );
    }
    if (text.startsWith('- ') || text.startsWith('* ')) {
      const items = text.split('\n');
      return (
        <ul key={blockIdx} className="list-disc list-inside space-y-1 my-4 pl-1 text-zinc-750">
          {items.map((item, itemIdx) => (
            <li key={itemIdx} className="text-sm sm:text-base leading-relaxed">
              {renderInlineStyle(item.replace(/^[-*]\s+/, ''))}
            </li>
          ))}
        </ul>
      );
    }
    if (/^\d+\.\s+/.test(text)) {
      const items = text.split('\n');
      return (
        <ol key={blockIdx} className="list-decimal list-inside space-y-1.5 my-4 pl-1 text-zinc-750">
          {items.map((item, itemIdx) => (
            <li key={itemIdx} className="text-sm sm:text-base leading-relaxed">
              {renderInlineStyle(item.replace(/^\d+\.\s+/, ''))}
            </li>
          ))}
        </ol>
      );
    }

    return (
      <p key={blockIdx} className="leading-relaxed text-zinc-700 text-sm sm:text-base mb-4">
        {renderInlineStyle(text)}
      </p>
    );
  };

  if (activePost) {
    return (
      <div className="py-8 px-4 max-w-2xl mx-auto space-y-10 text-left animate-fadeIn">
        {/* Back To Articles Button */}
        <button
          onClick={() => {
            if (activeSlug) {
              navigate('/blog');
            } else {
              setSelectedPostState(null);
            }
          }}
          className="text-xs font-mono text-zinc-400 hover:text-zinc-950 transition-colors flex items-center space-x-1.5"
        >
          <ArrowLeft size={12} />
          <span>Back to Articles list</span>
        </button>

        {/* Article Metadata */}
        <article className="space-y-6" id={`blog-post-content-${activePost.id}`}>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {activePost.date}
              </span>
              <span>•</span>
              <span>{activePost.readTime}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-sans font-black text-zinc-900 tracking-tight leading-snug">
              {activePost.title}
            </h1>

            {/* Author Block */}
            <div className="flex items-center space-x-2 pt-2 border-b border-zinc-50 pb-4">
              <span className="h-6 w-6 rounded-full bg-zinc-100 flex items-center justify-center text-[10px] font-mono font-bold text-zinc-650">
                MA
              </span>
              <span className="text-xs font-sans font-medium text-zinc-700">Mustapha &ldquo;Sabeer&rdquo; Abdulsalam</span>
              <span className="text-xs text-zinc-400 font-mono">(Sabeer-Verse Creator)</span>
            </div>
          </div>

          {/* Core Body Container with Premium Editorial Spacing */}
          <div className="prose prose-zinc max-w-none text-zinc-700 font-sans text-sm sm:text-base leading-relaxed space-y-4">
            <p className="font-medium text-zinc-900 text-sm sm:text-base leading-snug">
              {activePost.excerpt}
            </p>
            {activePost.content.split('\n\n').map((block, idx) => renderContentBlock(block, idx))}
          </div>

          {/* Tags Footer Section */}
          <div className="pt-8 border-t border-zinc-100 space-y-4">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Indexed Search Taxonomy</span>
            <div className="flex flex-wrap gap-1.5">
              {activePost.tags.map((tag) => (
                <span key={tag} className="text-xs bg-zinc-50 border border-zinc-100 text-zinc-600 px-2.5 py-1 rounded font-mono">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Back navigation shortcuts */}
        <div className="pt-12 border-t border-zinc-100 flex justify-between items-center" id="article-detail-footer">
          <button
            onClick={() => {
              if (activeSlug) {
                navigate('/blog');
              } else {
                setSelectedPostState(null);
              }
            }}
            className="text-xs font-mono text-zinc-400 hover:text-zinc-950 transition-colors"
          >
            ← View all articles
          </button>
          
          <button
            onClick={() => navigate('/contact')}
            className="text-xs font-mono text-zinc-400 hover:text-zinc-950 transition-colors"
          >
            Let's link up →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 px-4 max-w-3xl mx-auto space-y-16 text-left" id="blog-listing-view">
      
      {/* Page Title Block */}
      <div className="space-y-4 border-b border-zinc-100 pb-8" id="blog-header">
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-1.5">
          <BookMarked size={12} className="text-zinc-500" />
          KNOWLEDGE CORNER (SEMANTIC POSTS)
        </span>
        <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-zinc-900 tracking-tight" id="blog-h1">
          Aviation of Ideas
        </h1>
        <p className="text-sm sm:text-base text-zinc-500 leading-relaxed font-sans max-w-2xl">
          Deep investigative essays exploring search engine entity index designs, zero-trust backend systems, dynamic user interface caches, and WebRTC protocols curated by Mustapha Abdulsalam.
        </p>
      </div>

      {/* Articles Main List */}
      <section className="space-y-8" id="articles-directory">
        {BLOG_POSTS.map((post) => (
          <article 
            key={post.id}
            onClick={() => navigate('/blog/' + post.id)}
            className="group border border-zinc-100 p-6 sm:p-8 rounded-xl bg-white hover:border-zinc-300 hover:shadow-[0_2px_12px_rgba(0,0,0,0.01)] transition-all cursor-pointer space-y-4"
            id={`blog-card-${post.id}`}
          >
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-xs font-mono text-zinc-400">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              
              <h2 className="text-xl font-sans font-bold text-zinc-900 group-hover:text-zinc-950 transition-colors tracking-tight leading-snug">
                {post.title}
              </h2>
              
              <p className="text-sm text-zinc-500 font-sans leading-relaxed line-clamp-2 max-w-2xl">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-50 flex flex-wrap justify-between items-center gap-4">
              <div className="flex flex-wrap gap-1">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-[10px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded font-mono">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <span className="text-xs font-mono text-zinc-400 group-hover:text-zinc-950 duration-250 transition-colors flex items-center gap-1">
                Read Abstract <ArrowRight size={12} />
              </span>
            </div>
          </article>
        ))}
      </section>

      {/* Internal linking directory helper */}
      <section className="pt-6 border-t border-zinc-100 text-center sm:text-left" id="blog-directory-footer">
        <button
          onClick={() => navigate('/')}
          className="text-xs font-mono text-zinc-400 hover:text-zinc-950 transition-colors"
        >
          ← Return to Core Entity Directory
        </button>
      </section>
    </div>
  );
}
