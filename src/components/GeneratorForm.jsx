import React, { useState } from 'react';
import { 
  Download, 
  ChevronDown, 
  ChevronUp, 
  SlidersHorizontal, 
  Settings2, 
  CheckCircle2, 
  Layers, 
  ShoppingBag, 
  FileCode, 
  Sparkles,
  Info
} from 'lucide-react';
import { sanitizeSlug, toSnakeCase, toConstantCase } from '../generator/tokens.js';

export function GeneratorForm({
  formData,
  onChange,
  onGenerateZip,
  isGenerating,
  onApplyPreset,
}) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    const updates = { name: newName };
    if (!slugManuallyEdited) {
      updates.slug = sanitizeSlug(newName);
    }
    onChange(updates);
  };

  const handleSlugChange = (e) => {
    setSlugManuallyEdited(true);
    onChange({ slug: sanitizeSlug(e.target.value) });
  };

  const computedSlug = formData.slug || sanitizeSlug(formData.name || 'custom-theme');
  const computedPrefix = toSnakeCase(computedSlug) + '_';
  const computedConstant = toConstantCase(computedSlug) + '_';

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onGenerateZip();
      }}
      className="space-y-6"
    >
      {/* Intro hero box */}
      <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-indigo-950/40 border border-slate-800 text-sm">
        <p className="text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">WordPress Theme Dev Generator.</strong> Enter your theme details below to generate a clean, lightweight, production-ready WordPress starter theme with all required files, actions, and template hierarchy.
        </p>
      </div>

      {/* Main Form Fields */}
      <div className="space-y-4">
        {/* Theme Name */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Theme Name <span className="text-rose-400">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={handleNameChange}
            placeholder="e.g. Acme Theme Dev"
            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition"
          />
        </div>

        {/* Theme Slug */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
              Theme Slug / Text Domain
            </label>
            <span className="text-[11px] text-slate-400 font-mono">
              prefix: <code className="text-indigo-300">{computedPrefix}</code>
            </span>
          </div>
          <input
            type="text"
            value={formData.slug}
            onChange={handleSlugChange}
            placeholder={computedSlug}
            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700/80 text-white font-mono placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition"
          />
        </div>

        {/* Author & Author URI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Author Name
            </label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => onChange({ author: e.target.value })}
              placeholder="e.g. Theme Developer"
              className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Author URI
            </label>
            <input
              type="url"
              value={formData.authorUri}
              onChange={(e) => onChange({ authorUri: e.target.value })}
              placeholder="https://example.com"
              className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Description
          </label>
          <textarea
            rows={2}
            value={formData.description}
            onChange={(e) => onChange({ description: e.target.value })}
            placeholder="A clean, modern WordPress starter theme..."
            className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition"
          />
        </div>
      </div>

      {/* Advanced Options Accordion */}
      <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/40">
        <button
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="w-full px-4 py-3 flex items-center justify-between text-left text-sm font-medium text-slate-200 hover:bg-slate-800/50 transition"
        >
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-indigo-400" />
            <span>Advanced Options & Features</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
              {formData.themeType} • {formData.includeWooCommerce ? '+Woo' : ''} {formData.includeSass ? '+Sass' : ''}
            </span>
          </div>
          {showAdvanced ? (
            <ChevronUp className="w-4 h-4 text-slate-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-slate-400" />
          )}
        </button>

        {showAdvanced && (
          <div className="p-4 border-t border-slate-800 space-y-5 bg-slate-900/60">
            {/* Theme Type Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Theme Architecture
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  {
                    id: 'classic',
                    title: 'Classic Theme',
                    desc: 'Clean PHP templates & template parts',
                  },
                  {
                    id: 'hybrid',
                    title: 'Modern Hybrid',
                    desc: 'PHP templates + theme.json block styles',
                  },
                  {
                    id: 'block',
                    title: 'Block Theme (FSE)',
                    desc: 'Full Site Editing HTML block templates',
                  },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => onChange({ themeType: type.id })}
                    className={`p-3 rounded-lg border text-left transition ${
                      formData.themeType === type.id
                        ? 'border-indigo-500 bg-indigo-500/10 text-white ring-1 ring-indigo-500'
                        : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                    }`}
                  >
                    <div className="font-semibold text-xs text-white">{type.title}</div>
                    <div className="text-[11px] mt-1 text-slate-400">{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Checkboxes */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Optional Components
              </label>

              {/* WooCommerce */}
              <label className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 cursor-pointer transition">
                <input
                  type="checkbox"
                  checked={formData.includeWooCommerce}
                  onChange={(e) => onChange({ includeWooCommerce: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 bg-slate-800 border-slate-700"
                />
                <div className="text-xs">
                  <div className="font-medium text-slate-200 flex items-center gap-1.5">
                    <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WooCommerce Boilerplate</span>
                  </div>
                  <div className="text-slate-400 text-[11px] mt-0.5">
                    Includes <code>inc/woocommerce.php</code>, theme container wrappers, cart count snippet, and <code>woocommerce.css</code>.
                  </div>
                </div>
              </label>

              {/* Sass / SCSS */}
              <label className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 cursor-pointer transition">
                <input
                  type="checkbox"
                  checked={formData.includeSass}
                  onChange={(e) => onChange({ includeSass: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 bg-slate-800 border-slate-700"
                />
                <div className="text-xs">
                  <div className="font-medium text-slate-200 flex items-center gap-1.5">
                    <FileCode className="w-3.5 h-3.5 text-pink-400" />
                    <span>Sass (SCSS files)</span>
                  </div>
                  <div className="text-slate-400 text-[11px] mt-0.5">
                    Generates organized <code>sass/</code> modular directory with variables, mixins, reset, buttons, and layout.
                  </div>
                </div>
              </label>

              {/* Accessible Navigation JS */}
              <label className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 cursor-pointer transition">
                <input
                  type="checkbox"
                  checked={formData.includeNavigationJs}
                  onChange={(e) => onChange({ includeNavigationJs: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 bg-slate-800 border-slate-700"
                />
                <div className="text-xs">
                  <div className="font-medium text-slate-200">
                    Accessible Navigation & Focus Fix (navigation.js)
                  </div>
                  <div className="text-slate-400 text-[11px] mt-0.5">
                    Provides mobile menu hamburger toggle, ARIA expanded state, keyboard TAB trapping, and skip-link fix.
                  </div>
                </div>
              </label>

              {/* Theme.json support */}
              {formData.themeType === 'classic' && (
                <label className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 cursor-pointer transition">
                  <input
                    type="checkbox"
                    checked={formData.includeThemeJson}
                    onChange={(e) => onChange({ includeThemeJson: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 bg-slate-800 border-slate-700"
                  />
                  <div className="text-xs">
                    <div className="font-medium text-slate-200">
                      Include theme.json (WordPress 6+ Block Styles)
                    </div>
                    <div className="text-slate-400 text-[11px] mt-0.5">
                      Declares color palette, typography presets, and layout widths for the Gutenberg block editor.
                    </div>
                  </div>
                </label>
              )}
            </div>

            {/* Version & Tags */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                  Theme Version
                </label>
                <input
                  type="text"
                  value={formData.version}
                  onChange={(e) => onChange({ version: e.target.value })}
                  placeholder="1.0.0"
                  className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs font-mono"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                  License
                </label>
                <input
                  type="text"
                  value={formData.license}
                  onChange={(e) => onChange({ license: e.target.value })}
                  placeholder="GNU General Public License v2 or later"
                  className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Generated Token Badges Preview */}
      <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800 text-xs font-mono space-y-1.5 text-slate-400">
        <div className="flex items-center justify-between">
          <span>Functions Prefix:</span>
          <span className="text-indigo-400 font-semibold">{computedPrefix}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Constants Prefix:</span>
          <span className="text-emerald-400 font-semibold">{computedConstant}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Text Domain / Slug:</span>
          <span className="text-amber-400 font-semibold">{computedSlug}</span>
        </div>
      </div>

      {/* Generate & Download CTA */}
      <button
        type="submit"
        disabled={isGenerating}
        className="w-full group relative py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-600 hover:from-indigo-500 hover:via-sky-500 hover:to-indigo-500 shadow-lg shadow-indigo-600/30 transition-all duration-200 transform active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base"
      >
        <Download className={`w-5 h-5 transition-transform group-hover:-translate-y-0.5 ${isGenerating ? 'animate-bounce' : ''}`} />
        <span>{isGenerating ? 'Packaging Theme...' : `Generate & Download ${computedSlug}.zip`}</span>
      </button>

      <p className="text-center text-[11px] text-slate-500">
        Generates 100% compliant WordPress starter theme ready to upload to <span className="text-slate-400">Appearance &gt; Themes</span>.
      </p>
    </form>
  );
}
