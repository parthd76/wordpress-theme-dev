import React, { useState } from 'react';
import { 
  Download, 
  ChevronDown, 
  ChevronUp, 
  SlidersHorizontal, 
  ShoppingBag, 
  FileCode,
  ShieldCheck,
  Code2
} from 'lucide-react';
import { sanitizeSlug, toSnakeCase, toConstantCase } from '../generator/tokens.js';

export function GeneratorForm({
  formData,
  onChange,
  onGenerateZip,
  isGenerating,
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
      {/* Friendly, readable intro */}
      <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80 text-sm">
        <p className="text-slate-700 leading-relaxed">
          <strong className="text-slate-900 font-semibold">Blank Theme Generator.</strong> Fill in your theme details below to generate an unstyled, production-ready WordPress starter theme with all required files, custom function prefixes, and WordPress coding standards.
        </p>
      </div>

      {/* Main Form Fields */}
      <div className="space-y-4">
        {/* Theme Name */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Theme Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={handleNameChange}
            placeholder="e.g. Acme Theme Dev"
            className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-sm transition shadow-2xs"
          />
        </div>

        {/* Theme Slug */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Theme Slug / Text Domain
            </label>
            <span className="text-xs text-slate-500 font-mono">
              prefix: <code className="text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100 font-semibold">{computedPrefix}</code>
            </span>
          </div>
          <input
            type="text"
            value={formData.slug}
            onChange={handleSlugChange}
            placeholder={computedSlug}
            className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 font-mono placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-sm transition shadow-2xs"
          />
        </div>

        {/* Author & Author URI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Author Name
            </label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => onChange({ author: e.target.value })}
              placeholder="e.g. Theme Developer"
              className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-sm transition shadow-2xs"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Author URI
            </label>
            <input
              type="url"
              value={formData.authorUri}
              onChange={(e) => onChange({ authorUri: e.target.value })}
              placeholder="https://example.com"
              className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-sm transition shadow-2xs"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Description
          </label>
          <textarea
            rows={2}
            value={formData.description}
            onChange={(e) => onChange({ description: e.target.value })}
            placeholder="A clean, modern WordPress starter theme..."
            className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-sm transition shadow-2xs"
          />
        </div>
      </div>

      {/* Advanced Options Accordion */}
      <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/70">
        <button
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="w-full px-4 py-3.5 flex items-center justify-between text-left text-sm font-medium text-slate-800 hover:bg-slate-100/70 transition"
        >
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-blue-600" />
            <span className="font-semibold text-slate-900">Advanced Options &amp; Features</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 font-medium ml-1">
              {formData.themeType} {formData.includeWooCommerce ? '• Woo' : ''} {formData.includeSass ? '• Sass' : ''}
            </span>
          </div>
          {showAdvanced ? (
            <ChevronUp className="w-4 h-4 text-slate-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-slate-500" />
          )}
        </button>

        {showAdvanced && (
          <div className="p-4 sm:p-5 border-t border-slate-200 space-y-5 bg-white">
            {/* Theme Type Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Theme Architecture
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  {
                    id: 'classic',
                    title: 'Classic Theme',
                    desc: 'PHP templates & template-parts hierarchy',
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
                        ? 'border-blue-600 bg-blue-50/60 text-blue-950 ring-1 ring-blue-600 shadow-xs'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="font-semibold text-xs text-slate-900">{type.title}</div>
                    <div className="text-[11px] mt-1 text-slate-500 leading-normal">{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Checkboxes */}
            <div className="space-y-2.5 pt-1">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Optional Components
              </label>

              {/* WooCommerce */}
              <label className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-200 hover:border-slate-300 cursor-pointer transition shadow-2xs">
                <input
                  type="checkbox"
                  checked={formData.includeWooCommerce}
                  onChange={(e) => onChange({ includeWooCommerce: e.target.checked })}
                  className="mt-0.5 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                />
                <div className="text-xs">
                  <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                    <ShoppingBag className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WooCommerce Boilerplate</span>
                  </div>
                  <div className="text-slate-500 text-[11px] mt-0.5 leading-relaxed">
                    Includes <code>inc/woocommerce.php</code>, theme container wrappers, cart AJAX count, and <code>woocommerce.css</code>.
                  </div>
                </div>
              </label>

              {/* Sass / SCSS */}
              <label className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-200 hover:border-slate-300 cursor-pointer transition shadow-2xs">
                <input
                  type="checkbox"
                  checked={formData.includeSass}
                  onChange={(e) => onChange({ includeSass: e.target.checked })}
                  className="mt-0.5 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                />
                <div className="text-xs">
                  <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                    <FileCode className="w-3.5 h-3.5 text-pink-600" />
                    <span>Sass (SCSS files)</span>
                  </div>
                  <div className="text-slate-500 text-[11px] mt-0.5 leading-relaxed">
                    Generates organized <code>sass/</code> modular directory with variables, mixins, reset, buttons, and layout.
                  </div>
                </div>
              </label>

              {/* Accessible Navigation JS */}
              <label className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-200 hover:border-slate-300 cursor-pointer transition shadow-2xs">
                <input
                  type="checkbox"
                  checked={formData.includeNavigationJs}
                  onChange={(e) => onChange({ includeNavigationJs: e.target.checked })}
                  className="mt-0.5 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                />
                <div className="text-xs">
                  <div className="font-semibold text-slate-900">
                    Accessible Navigation &amp; Focus Fix (navigation.js)
                  </div>
                  <div className="text-slate-500 text-[11px] mt-0.5 leading-relaxed">
                    Provides mobile menu hamburger toggle, ARIA expanded states, keyboard navigation focus trapping, and skip-link fix.
                  </div>
                </div>
              </label>

              {/* Theme.json support */}
              {formData.themeType === 'classic' && (
                <label className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-200 hover:border-slate-300 cursor-pointer transition shadow-2xs">
                  <input
                    type="checkbox"
                    checked={formData.includeThemeJson}
                    onChange={(e) => onChange({ includeThemeJson: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <div className="text-xs">
                    <div className="font-semibold text-slate-900">
                      Include theme.json (WordPress 6+ Block Styles)
                    </div>
                    <div className="text-slate-500 text-[11px] mt-0.5 leading-relaxed">
                      Declares color palette, typography presets, and layout widths for the Gutenberg block editor.
                    </div>
                  </div>
                </label>
              )}
            </div>

            {/* Version & License */}
            <div className="grid grid-cols-2 gap-3.5 pt-2 border-t border-slate-100">
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  Theme Version
                </label>
                <input
                  type="text"
                  value={formData.version}
                  onChange={(e) => onChange({ version: e.target.value })}
                  placeholder="1.0.0"
                  className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs font-mono"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  License
                </label>
                <input
                  type="text"
                  value={formData.license}
                  onChange={(e) => onChange({ license: e.target.value })}
                  placeholder="GNU General Public License v2 or later"
                  className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Generated Token Badges Preview */}
      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono space-y-1.5 text-slate-600">
        <div className="flex items-center justify-between">
          <span className="font-sans font-medium text-slate-700">Functions Prefix:</span>
          <span className="text-blue-700 font-bold bg-white px-2 py-0.5 rounded border border-slate-200">{computedPrefix}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-sans font-medium text-slate-700">Constants Prefix:</span>
          <span className="text-emerald-700 font-bold bg-white px-2 py-0.5 rounded border border-slate-200">{computedConstant}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-sans font-medium text-slate-700">Text Domain / Slug:</span>
          <span className="text-indigo-700 font-bold bg-white px-2 py-0.5 rounded border border-slate-200">{computedSlug}</span>
        </div>
      </div>

      {/* Generate & Download CTA */}
      <button
        type="submit"
        disabled={isGenerating}
        className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow transition active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base cursor-pointer"
      >
        <Download className={`w-5 h-5 ${isGenerating ? 'animate-bounce' : ''}`} />
        <span>{isGenerating ? 'Packaging Theme...' : `Generate & Download ${computedSlug}.zip`}</span>
      </button>

      <p className="text-center text-xs text-slate-500">
        100% compliant WordPress starter theme ready to install in <span className="text-slate-700 font-medium">Appearance &gt; Themes</span>.
      </p>
    </form>
  );
}
