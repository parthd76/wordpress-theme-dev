import React from 'react';
import { X, Sparkles, ShoppingBag, Palette, LayoutTemplate, Layers } from 'lucide-react';

export function PresetsModal({ isOpen, onClose, onSelectPreset }) {
  if (!isOpen) return null;

  const presets = [
    {
      id: 'minimal',
      name: 'Minimal Blank Canvas',
      desc: 'Clean WordPress Theme Dev starter theme. Clean PHP template hierarchy, semantic HTML5, and zero unnecessary visual bloat.',
      icon: <Layers className="w-5 h-5 text-blue-600" />,
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
      desc: 'Ready for e-commerce. Includes WooCommerce template overrides, product gallery zoom/slider support, mini-cart fragments, and clean shop styles.',
      icon: <ShoppingBag className="w-5 h-5 text-emerald-600" />,
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
      icon: <Palette className="w-5 h-5 text-indigo-600" />,
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
      icon: <LayoutTemplate className="w-5 h-5 text-pink-600" />,
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
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-slate-200 bg-slate-50/70 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <h3 className="font-bold text-slate-900 text-sm">Select Theme Preset</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of Presets */}
        <div className="p-4 sm:p-5 space-y-2.5 max-h-[70vh] overflow-y-auto">
          {presets.map((preset) => (
            <div
              key={preset.id}
              onClick={() => {
                onSelectPreset(preset.config);
                onClose();
              }}
              className="p-4 rounded-xl border border-slate-200 bg-white hover:bg-blue-50/50 hover:border-blue-300 cursor-pointer transition flex items-start gap-3.5 group shadow-2xs"
            >
              <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 group-hover:bg-white group-hover:border-blue-200 transition">
                {preset.icon}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-slate-900 text-sm group-hover:text-blue-700 transition">
                  {preset.name}
                </div>
                <div className="text-xs text-slate-600 mt-1 leading-relaxed">
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
