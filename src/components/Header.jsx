import React from 'react';
import { Sparkles, BookOpen, ExternalLink, Globe, Code2 } from 'lucide-react';

export function Header({ onOpenPresets }) {
  return (
    <header className="border-b border-slate-200/80 bg-white/95 backdrop-blur-md sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
            WP
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-base text-slate-900 tracking-tight">WordPress Theme Dev</h1>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-200/60">
                Generator
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              Create clean, minimal boilerplate WordPress themes with proper hierarchy
            </p>
          </div>
        </div>

        {/* Action pills */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onOpenPresets}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200 transition"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Presets</span>
          </button>

          <a
            href="https://developer.wordpress.org/themes/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 transition"
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>WP Handbook</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

          <a
            href="https://developer.wordpress.org/themes/basics/template-hierarchy/"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 transition"
          >
            <Globe className="w-3.5 h-3.5 text-blue-600" />
            <span>Template Hierarchy</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>
      </div>
    </header>
  );
}
