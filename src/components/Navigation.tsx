import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

interface NavigationProps {
  currentPath: string;
}

export function Navigation({ currentPath }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Core', path: '/' },
    { name: 'About Entity', path: '/about' },
    { name: 'Projects Graph', path: '/projects' },
    { name: 'Semantic Blog', path: '/blog' },
    { name: 'Backlink Hub', path: '/contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#ffffff]/80 backdrop-blur-md border-b border-zinc-100" id="global-navigation">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-zinc-900 font-sans tracking-tight md:text-lg font-semibold hover:opacity-80 transition-opacity"
              id="brand-logo"
            >
              <span className="inline-block h-2.5 w-2.5 bg-zinc-950 rounded-sm shrink-0" />
              <span>Sabeer-Verse</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center" id="desktop-nav-links">
            {navItems.map((item) => {
              const isActive = currentPath === item.path || 
                (item.path !== '/' && currentPath.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative text-xs font-mono py-1 px-1 transition-colors duration-200 ${
                    isActive 
                      ? 'text-zinc-950 font-semibold' 
                      : 'text-zinc-500 hover:text-zinc-900'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] w-4 bg-zinc-950 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-500 hover:text-zinc-900 focus:outline-none p-1.5 rounded-md hover:bg-zinc-50"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-zinc-100 bg-white" id="mobile-menu-container">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isActive = currentPath === item.path || 
                (item.path !== '/' && currentPath.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-sm font-sans rounded-md transition-colors ${
                    isActive 
                      ? 'bg-zinc-50 text-zinc-950 font-medium' 
                      : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="mt-4 px-3 py-2 border-t border-zinc-100">
              <span className="text-zinc-400 text-[10px] font-mono uppercase tracking-wider block">MUSTAPHA ABDULSALAM</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
