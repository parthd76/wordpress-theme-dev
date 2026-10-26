import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is a WordPress starter theme or boilerplate?",
      a: "A starter theme (or boilerplate) is a clean, minimal, unstyled WordPress theme designed to serve as the foundation for custom theme development. Unlike standard themes, it contains zero visual bloat and gives developers 100% control over CSS, layout, and functionality while providing all required WordPress template hierarchy files."
    },
    {
      q: "How do I create a blank WordPress theme with this generator?",
      a: "Simply enter your Theme Name (e.g., 'My Custom Theme') and customize the slug, author, and description. Choose your architecture (Classic, Modern Hybrid, or Full Site Editing Block Theme), select optional features like WooCommerce or Sass, and click 'Generate & Download'. Your customized .zip package downloads instantly in your browser."
    },
    {
      q: "Is the generated theme compliant with WordPress coding standards?",
      a: "Yes! All generated PHP templates follow strict WordPress Core coding standards: proper late escaping (esc_html, esc_attr, wp_kses_post), translation readiness (load_theme_textdomain), semantic HTML5 elements, and accessibility (WCAG AA skip links and keyboard navigation)."
    },
    {
      q: "Can I use this theme for commercial and client websites?",
      a: "Absolutely. All themes generated are 100% free and open-source under the GNU General Public License v2 or later (GPL-2.0-or-later). You can build, sell, customize, and redistribute client themes with zero licensing restrictions."
    },
    {
      q: "What is the difference between Classic, Hybrid, and Block themes?",
      a: "A Classic Theme uses standard PHP template files (index.php, single.php, header.php). A Hybrid Theme uses classic PHP templates paired with a modern theme.json file to control Gutenberg block editor styles and colors. A Block Theme (FSE) is built entirely with HTML block markup and Full Site Editing."
    }
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="mt-12 border border-slate-800 rounded-2xl bg-slate-900/40 p-6 sm:p-8 space-y-6">
      <div className="flex items-center gap-2.5">
        <HelpCircle className="w-5 h-5 text-indigo-400" />
        <h2 className="text-lg font-bold text-white tracking-tight">
          Frequently Asked Questions &amp; WordPress Theme Guide
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700/80 transition cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-slate-200">
                  {faq.q}
                </h3>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </div>
              {isOpen && (
                <p className="mt-3 text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 pt-3">
                  {faq.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
