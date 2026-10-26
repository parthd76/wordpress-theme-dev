import React, { useState } from 'react';
import { Copy, Check, Download, FileCode, ExternalLink } from 'lucide-react';

export function CodeViewer({ fileName, content, onDownloadSingle }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error('Failed to copy code:', e);
    }
  };

  const lines = (content || '').split('\n');
  const lineCount = lines.length;
  const fileSizeKb = ((content || '').length / 1024).toFixed(1);

  return (
    <div className="flex flex-col h-full bg-slate-900/70 border border-slate-800 rounded-xl overflow-hidden">
      {/* Code Header Bar */}
      <div className="p-3 border-b border-slate-800 bg-slate-900/90 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileCode className="w-4 h-4 text-indigo-400" />
          <span className="text-xs font-mono font-semibold text-white">
            {fileName}
          </span>
          <span className="text-[10px] text-slate-500 font-mono">
            {lineCount} lines • {fileSizeKb} KB
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onDownloadSingle}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
            title="Download this file only"
          >
            <Download className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline">Save</span>
          </button>
        </div>
      </div>

      {/* Code Body with Line Numbers */}
      <div className="flex-1 overflow-auto bg-slate-950/80 font-mono text-xs leading-relaxed p-4 select-text">
        <div className="flex gap-4">
          {/* Line Numbers */}
          <div className="select-none text-slate-600 text-right font-mono pr-2 border-r border-slate-800/80 shrink-0">
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Code Content */}
          <pre className="text-slate-200 flex-1 overflow-x-auto whitespace-pre font-mono">
            <code>{content}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
