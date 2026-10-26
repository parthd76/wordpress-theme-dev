import React from 'react';
import { Sparkles, Terminal, Code2, BookOpen, ExternalLink, Globe } from 'lucide-react';

export function Header({ onOpenPresets }) {
  return (
    <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-sky-500 to-emerald-400 p-[2px] shadow-lg shadow-indigo-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-mono font-black text-sm text-sky-400">
              WP
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-lg text-white tracking-tight">WordPress Theme Dev</h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Builder
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              Generate clean, blank boilerplate themes with required files and actions
            </p>
          </div>
        </div>

        {/* Action pills */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onOpenPresets}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Presets</span>
          </button>

          <a
            href="https://developer.wordpress.org/themes/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
          >
            <BookOpen className="w-3.5 h-3.5 text-sky-400" />
            <span>WP Handbook</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

          <a
            href="https://developer.wordpress.org/themes/basics/template-hierarchy/"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 transition"
          >
            <Globe className="w-3.5 h-3.5 text-indigo-400" />
            <span>Template Hierarchy</span>
            <ExternalLink className="w-3 h-3 text-indigo-400/60" />
          </a>
        </div>
      </div>
    </header>
  );
}
