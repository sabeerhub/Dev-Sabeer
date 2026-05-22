import React, { useState } from 'react';
import { Send, CheckCircle2, Copy, Link, Search, Linkedin, Github, Twitter, Youtube, Instagram, MessageSquare, ExternalLink } from 'lucide-react';

export function ContactView() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const socials = [
    { name: 'LinkedIn', url: 'https://LinkedIn.com/in/masabeer', handle: '@masabeer', icon: Linkedin },
    { name: 'GitHub', url: 'https://github.com/sabeerhub', handle: 'sabeerhub', icon: Github },
    { name: 'Twitter / X', url: 'https://x.com/_msabeer_', handle: '@_msabeer_', icon: Twitter },
    { name: 'YouTube', url: 'https://youtube.com/@sabeer-io', handle: '@sabeer-io', icon: Youtube },
    { name: 'Instagram', url: 'https://instagram.com/_m.sabeer_', handle: '@_m.sabeer_', icon: Instagram },
    { name: 'TikTok', url: 'https://tiktok.com/@_m.sabeer_', handle: '@_m.sabeer_', icon: MessageSquare },
    { name: 'Telegram', url: 'https://t.me/sabeer_xt', handle: '@sabeer_xt', icon: MessageSquare }
  ];

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    }
  };

  // Backlink Codes
  const sitemapBacklinks = [
    {
      id: "anchor-text-1",
      anchorText: "Mustapha Sabeer Abdulsalam",
      html: `<a href="https://sabeer-ai.vercel.app" title="Mustapha Sabeer Abdulsalam" target="_blank">Mustapha &ldquo;Sabeer&rdquo; Abdulsalam</a>`
    },
    {
      id: "anchor-text-2",
      anchorText: "Sabeer Frontend Developer",
      html: `<a href="https://sabeer-ai.vercel.app/projects" title="Sabeer Frontend Developer" target="_blank">Sabeer Frontend Developer Portfolio</a>`
    },
    {
      id: "anchor-text-3",
      anchorText: "Sabeer-Verse fintech",
      html: `<a href="https://sabeer-ai.vercel.app/projects/zero-bank" title="Sabeer-Verse Zero Bank" target="_blank">Zero Bank Case Study</a>`
    }
  ];

  return (
    <div className="py-8 px-4 max-w-4xl mx-auto space-y-16 text-left" id="contact-view-container">
      
      {/* Title block */}
      <div className="space-y-4 border-b border-zinc-100 pb-8" id="contact-header">
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-1.5">
          <Link size={12} className="text-zinc-500" />
          GET IN TOUCH
        </span>
        <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-zinc-900 tracking-tight" id="contact-h1">
          Contact &amp; Connections
        </h1>
        <p className="text-sm sm:text-base text-zinc-500 leading-relaxed font-sans max-w-2xl">
          Feel free to reach out to connect, collaborate, or share feedback. You can write a message directly or link to my portfolio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10" id="contact-grid">
        
        {/* Contact Form & Messaging */}
        <div className="space-y-6" id="messaging-dispatch">
          <h2 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
            Send a Message
          </h2>

          <div className="border border-zinc-100 rounded-xl p-6 bg-white shadow-sm" id="form-card-container">
            {submitted ? (
              <div className="py-8 px-4 text-center space-y-4 animate-fadeIn" id="message-submitted">
                <CheckCircle2 size={32} className="text-emerald-500 mx-auto animate-bounce" />
                <h3 className="font-sans font-bold text-zinc-900 text-lg">Message Sent Successfully</h3>
                <p className="text-xs text-zinc-500 font-sans max-w-xs mx-auto leading-relaxed">
                  Thank you! Sabeer will read your message and get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 font-sans text-xs sm:text-sm" id="real-estate-form">
                <div className="space-y-1">
                  <label htmlFor="name-input" className="text-[11px] font-mono font-bold text-zinc-400 uppercase block">Name</label>
                  <input 
                    id="name-input"
                    type="text" 
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-3.5 py-2.5 border border-zinc-200 rounded-lg text-zinc-900 text-xs font-sans outline-none focus:border-zinc-850 duration-200 bg-[#fafafa]/50"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email-input" className="text-[11px] font-mono font-bold text-zinc-400 uppercase block">Email Address</label>
                  <input 
                    id="email-input"
                    type="email" 
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    placeholder="email@domain.com"
                    className="w-full px-3.5 py-2.5 border border-zinc-200 rounded-lg text-zinc-900 text-xs font-sans outline-none focus:border-zinc-850 duration-200 bg-[#fafafa]/50"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="subject-input" className="text-[11px] font-mono font-bold text-zinc-400 uppercase block">Subject</label>
                  <input 
                    id="subject-input"
                    type="text" 
                    value={formState.subject}
                    onChange={(e) => setFormState({...formState, subject: e.target.value})}
                    placeholder="Let's collaborate"
                    className="w-full px-3.5 py-2.5 border border-zinc-200 rounded-lg text-zinc-900 text-xs font-sans outline-none focus:border-zinc-850 duration-200 bg-[#fafafa]/50"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message-input" className="text-[11px] font-mono font-bold text-zinc-400 uppercase block">Message</label>
                  <textarea 
                    id="message-input"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    placeholder="Your message here..."
                    className="w-full px-3.5 py-2.5 border border-zinc-200 rounded-lg text-zinc-900 text-xs font-sans outline-none focus:border-zinc-850 duration-200 bg-[#fafafa]/50"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-zinc-950 hover:bg-zinc-850 text-white rounded-lg text-xs font-mono font-semibold duration-250 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={12} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Directory and Links */}
        <div className="space-y-8" id="authority-linking-panel">
          
          {/* Social connections */}
          <div className="space-y-4" id="identity-directories">
            <h2 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1">
              <Search size={12} className="text-zinc-400" />
              Connect on Social Media
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs" id="social-grid-direct">
              {socials.map((soc) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 border border-zinc-100 rounded-lg bg-white hover:bg-zinc-50 hover:border-zinc-200 duration-200 transition-all text-[#444]"
                    id={`sameas-link-${soc.name.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    <div className="flex items-center space-x-2.5">
                      <Icon size={14} className="text-zinc-500" />
                      <span className="font-bold text-zinc-900 text-xs">{soc.name}</span>
                    </div>
                    <span className="font-mono text-[10px] text-zinc-450 flex items-center gap-0.5">
                      {soc.handle} <ExternalLink size={10} className="w-2.5 h-2.5 text-zinc-300" />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Backlink Code share */}
          <div className="border border-zinc-150 bg-zinc-50/50 rounded-xl p-5 space-y-4" id="backlinks-generator">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider block">Link to Sabeer-Verse</span>
              <span className="text-[9px] bg-zinc-100 text-zinc-650 px-1.5 py-0.5 font-mono rounded font-semibold">SHARE</span>
            </div>
            
            <p className="text-[11px] text-zinc-500 font-sans leading-relaxed">
              If you would like to recommend or link to Sabeer-Verse on your website, blog, or readme files, you can copy the helper HTML code snippet below:
            </p>

            <div className="space-y-3 pt-2" id="codes-container select-all">
              {sitemapBacklinks.map((link) => (
                <div key={link.id} className="space-y-1.5 p-3.5 border border-zinc-200/40 bg-white rounded-lg">
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-zinc-500">Text: <strong className="text-zinc-800">{link.anchorText}</strong></span>
                    <button
                      onClick={() => handleCopyCode(link.html, link.id)}
                      className="text-zinc-700 hover:text-zinc-900 font-bold flex items-center space-x-1"
                    >
                      {copiedLink === link.id ? (
                        <>
                          <CheckCircle2 size={10} className="text-emerald-500" />
                          <span>COPIED!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={10} />
                          <span>COPY HTML</span>
                        </>
                      )
                      }
                    </button>
                  </div>
                  <code className="block text-[10px] p-2 bg-zinc-50 text-zinc-650 rounded border border-zinc-100 break-all select-all font-mono leading-relaxed">
                    {link.html}
                  </code>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
