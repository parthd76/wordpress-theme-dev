import React from 'react';
import { X, Sparkles, Check, ShoppingBag, Palette, LayoutTemplate, Layers } from 'lucide-react';

export function PresetsModal({ isOpen, onClose, onSelectPreset }) {
  if (!isOpen) return null;

  const presets = [
    {
      id: 'minimal',
      name: 'Minimal Blank Canvas',
      desc: 'The clean, pure WordPress Theme Dev starter theme. Clean PHP template hierarchy, semantic HTML5, zero bloat.',
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      config: {
        themeType: 'classic',
        includeWooCommerce: false,
        includeSass: false,
        includeThemeJson: false,
        includeNavigationJs: true,
      },
    },
    {
      id: 'woocommerce',
      name: 'WooCommerce Storefront',
      desc: 'Ready for e-commerce. Includes WooCommerce template overrides, gallery zoom/slider support, mini-cart fragments, and clean shop styles.',
      icon: <ShoppingBag className="w-5 h-5 text-emerald-400" />,
      config: {
        themeType: 'classic',
        includeWooCommerce: true,
        includeSass: false,
        includeThemeJson: true,
        includeNavigationJs: true,
      },
    },
    {
      id: 'hybrid',
      name: 'Modern Hybrid Theme',
      desc: 'Classic PHP template files paired with modern WordPress theme.json (Schema v3) for Gutenberg block editor presets and custom styles.',
      icon: <Palette className="w-5 h-5 text-purple-400" />,
      config: {
        themeType: 'hybrid',
        includeWooCommerce: false,
        includeSass: false,
        includeThemeJson: true,
        includeNavigationJs: true,
      },
    },
    {
      id: 'sass-agency',
      name: 'Sass / SCSS Agency Starter',
      desc: 'Complete modular Sass architecture with abstracts, base, components, and layout files ready for compiler automation.',
      icon: <LayoutTemplate className="w-5 h-5 text-pink-400" />,
      config: {
        themeType: 'classic',
        includeWooCommerce: false,
        includeSass: true,
        includeThemeJson: true,
        includeNavigationJs: true,
      },
    },
    {
      id: 'block-theme',
      name: 'Block Theme (Full Site Editing)',
      desc: 'Modern WordPress 6+ FSE theme using block markup templates (index.html, single.html, header.html) and theme.json.',
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
      config: {
        themeType: 'block',
        includeWooCommerce: false,
        includeSass: false,
        includeThemeJson: true,
        includeNavigationJs: false,
      },
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-white text-base">Select Theme Preset</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of Presets */}
        <div className="p-4 space-y-3 max-h-[70vh] overflow-y-auto">
          {presets.map((preset) => (
            <div
              key={preset.id}
              onClick={() => {
                onSelectPreset(preset.config);
                onClose();
              }}
              className="p-4 rounded-xl border border-slate-800 bg-slate-950/50 hover:bg-slate-800/60 hover:border-indigo-500/50 cursor-pointer transition flex items-start gap-3.5 group"
            >
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-indigo-500/30 transition">
                {preset.icon}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-white text-sm group-hover:text-indigo-300 transition">
                  {preset.name}
                </div>
                <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {preset.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
