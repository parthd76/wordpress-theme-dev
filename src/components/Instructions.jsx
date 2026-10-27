import React from 'react';
import { UploadCloud, CheckCircle2, Terminal, Sparkles, BookOpen } from 'lucide-react';

export function Instructions({ slug }) {
  return (
    <div className="mt-10 border border-slate-200/80 rounded-2xl bg-white p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex items-center gap-2.5">
        <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <h3 className="font-bold text-base text-slate-900">How to Install Your Starter Theme</h3>
          <p className="text-xs text-slate-500">Three simple steps to install into any WordPress environment</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Step 1 */}
        <div className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-2.5">
          <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-xs shadow-xs">
            1
          </div>
          <h4 className="font-semibold text-slate-900 text-sm">Download ZIP</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Click the <strong className="text-slate-900">"Generate &amp; Download"</strong> button above. The theme is packaged into <code className="text-blue-700 font-semibold bg-white px-1.5 py-0.5 rounded border border-slate-200">{slug || 'custom-theme'}.zip</code> instantly in your browser.
          </p>
        </div>

        {/* Step 2 */}
        <div className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-2.5">
          <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-xs shadow-xs">
            2
          </div>
          <h4 className="font-semibold text-slate-900 text-sm">Upload to WordPress</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            In your WordPress admin panel, go to <span className="text-slate-900 font-medium">Appearance &gt; Themes &gt; Add New</span>, click <span className="text-slate-900 font-medium">Upload Theme</span>, and select your downloaded zip.
          </p>
        </div>

        {/* Step 3 */}
        <div className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-2.5">
          <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-xs shadow-xs">
            3
          </div>
          <h4 className="font-semibold text-slate-900 text-sm">Activate &amp; Build</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Click <strong className="text-slate-900">Activate</strong>. All function names, text domains, actions, and template tags are ready for custom styling.
          </p>
        </div>
      </div>

      {/* CLI tip */}
      <div className="p-4 rounded-xl bg-slate-900 text-slate-200 flex items-center gap-3">
        <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
        <div className="text-xs font-mono flex-1 overflow-x-auto">
          <span className="text-slate-400"># Or generate from your terminal: </span>
          <span className="text-emerald-300 font-semibold">node bin/generate.js --name "{slug || 'My Theme'}" --woocommerce</span>
        </div>
      </div>
    </div>
  );
}
