import React from 'react';
import { UploadCloud, CheckCircle, Terminal, FileCode2, Sparkles } from 'lucide-react';

export function Instructions({ slug }) {
  return (
    <div className="mt-8 border border-slate-800 rounded-2xl bg-slate-900/40 p-6 space-y-6">
      <div className="flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-indigo-400" />
        <h3 className="font-bold text-base text-white">How to Use Your Generated WordPress Starter Theme</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Step 1 */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-400 font-bold flex items-center justify-center text-xs border border-indigo-500/20">
            1
          </div>
          <h4 className="font-semibold text-white text-sm">Download ZIP</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Click the <strong className="text-slate-200">"Generate &amp; Download"</strong> button above. The theme is packaged into <code className="text-indigo-300">{slug || 'custom-theme'}.zip</code> instantly in your browser.
          </p>
        </div>

        {/* Step 2 */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-400 font-bold flex items-center justify-center text-xs border border-indigo-500/20">
            2
          </div>
          <h4 className="font-semibold text-white text-sm">Upload to WordPress</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            In your WordPress admin dashboard, navigate to <span className="text-slate-200 font-medium">Appearance &gt; Themes &gt; Add New</span>, click <span className="text-slate-200 font-medium">Upload Theme</span>, and select the downloaded zip.
          </p>
        </div>

        {/* Step 3 */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-400 font-bold flex items-center justify-center text-xs border border-indigo-500/20">
            3
          </div>
          <h4 className="font-semibold text-white text-sm">Activate &amp; Customize</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Click <strong className="text-slate-200">Activate</strong>! All function names, text domains, and actions already use your custom prefix with zero manual find-and-replace required.
          </p>
        </div>
      </div>

      {/* CLI tip */}
      <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center gap-3">
        <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
        <div className="text-xs text-slate-300 font-mono flex-1 overflow-x-auto">
          <span className="text-slate-500"># Or use the terminal CLI: </span>
          <span className="text-emerald-400">node bin/generate.js --name "{slug || 'My Theme'}" --woocommerce</span>
        </div>
      </div>
    </div>
  );
}
