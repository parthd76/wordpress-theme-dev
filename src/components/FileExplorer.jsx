import React, { useState, useMemo } from 'react';
import { 
  Folder, 
  FolderOpen, 
  File, 
  FileCode, 
  FileText, 
  FileJson, 
  Image, 
  Search,
  ChevronRight,
  ChevronDown,
  CheckCircle2
} from 'lucide-react';

export function FileExplorer({ files, themeSlug }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFolders, setOpenFolders] = useState({
    'template-parts': true,
    'inc': true,
    'js': true,
    'sass': false,
    'templates': true,
    'parts': true,
  });

  const toggleFolder = (folder) => {
    setOpenFolders((prev) => ({ ...prev, [folder]: !prev[folder] }));
  };

  // Build tree hierarchy from flat file paths
  const tree = useMemo(() => {
    const root = { files: [], folders: {} };
    const fileList = Object.keys(files).sort();

    for (const filePath of fileList) {
      if (searchTerm && !filePath.toLowerCase().includes(searchTerm.toLowerCase())) {
        continue;
      }

      const parts = filePath.split('/');
      if (parts.length === 1) {
        root.files.push(parts[0]);
      } else {
        const folder = parts[0];
        const subpath = parts.slice(1).join('/');
        if (!root.folders[folder]) {
          root.folders[folder] = [];
        }
        root.folders[folder].push({
          fullPath: filePath,
          fileName: parts[parts.length - 1],
          subpath,
        });
      }
    }

    return root;
  }, [files, searchTerm]);

  const getFileIcon = (fileName) => {
    if (fileName.endsWith('.php')) return <FileCode className="w-4 h-4 text-indigo-400 shrink-0" />;
    if (fileName.endsWith('.css') || fileName.endsWith('.scss')) return <FileCode className="w-4 h-4 text-pink-400 shrink-0" />;
    if (fileName.endsWith('.json')) return <FileJson className="w-4 h-4 text-amber-400 shrink-0" />;
    if (fileName.endsWith('.js')) return <FileCode className="w-4 h-4 text-yellow-400 shrink-0" />;
    if (fileName.endsWith('.txt')) return <FileText className="w-4 h-4 text-slate-400 shrink-0" />;
    if (fileName.endsWith('.png') || fileName.endsWith('.jpg')) return <Image className="w-4 h-4 text-emerald-400 shrink-0" />;
    return <File className="w-4 h-4 text-slate-400 shrink-0" />;
  };

  const getBadge = (fileName) => {
    const ext = fileName.split('.').pop()?.toUpperCase();
    if (!ext) return null;
    return (
      <span className="text-[9px] font-semibold tracking-wider px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60 ml-auto shrink-0">
        {ext}
      </span>
    );
  };

  const totalFiles = Object.keys(files).length;

  return (
    <div className="flex flex-col h-full bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
      {/* Top Header */}
      <div className="p-4 border-b border-slate-800 bg-slate-900/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Folder className="w-4 h-4 text-sky-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">
            Included Theme Files
          </span>
        </div>
        <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-semibold">
          {totalFiles} files in package
        </span>
      </div>

      {/* Search Input */}
      <div className="p-3 border-b border-slate-800/80 bg-slate-950/40">
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search files (e.g. functions, style)..."
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition"
          />
        </div>
      </div>

      {/* Tree Content */}
      <div className="flex-1 overflow-y-auto p-3 text-xs font-mono space-y-1">
        {/* Theme Root Folder Item */}
        <div className="flex items-center gap-2 px-2.5 py-1.5 text-slate-400 font-bold select-none bg-slate-950/40 rounded-lg border border-slate-800/60 mb-2">
          <FolderOpen className="w-4 h-4 text-indigo-400 shrink-0" />
          <span className="text-white font-semibold">{themeSlug}/</span>
          <span className="text-[10px] text-slate-500 font-normal ml-auto">root</span>
        </div>

        {/* Subdirectories */}
        {Object.entries(tree.folders).map(([folderName, items]) => {
          const isOpen = openFolders[folderName] ?? true;
          return (
            <div key={folderName} className="ml-2">
              <button
                type="button"
                onClick={() => toggleFolder(folderName)}
                className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left text-slate-300 hover:bg-slate-800/60 select-none group transition"
              >
                {isOpen ? (
                  <ChevronDown className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                ) : (
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                )}
                {isOpen ? (
                  <FolderOpen className="w-4 h-4 text-sky-400 shrink-0" />
                ) : (
                  <Folder className="w-4 h-4 text-sky-400 shrink-0" />
                )}
                <span className="font-semibold text-slate-200 group-hover:text-white">
                  {folderName}/
                </span>
                <span className="ml-auto text-[10px] text-slate-500 font-mono">
                  {items.length} {items.length === 1 ? 'file' : 'files'}
                </span>
              </button>

              {isOpen && (
                <div className="ml-4 pl-2 border-l border-slate-800 space-y-1 mt-1 mb-2">
                  {items.map((item) => (
                    <div
                      key={item.fullPath}
                      className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-left text-slate-300 hover:text-white hover:bg-slate-800/50 transition select-none group"
                    >
                      {getFileIcon(item.fileName)}
                      <span className="truncate">{item.subpath}</span>
                      {getBadge(item.fileName)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Root Files */}
        <div className="ml-2 pl-2 border-l border-slate-800 space-y-1 mt-2">
          {tree.files.map((file) => (
            <div
              key={file}
              className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-left text-slate-300 hover:text-white hover:bg-slate-800/50 transition select-none group"
            >
              {getFileIcon(file)}
              <span className="truncate">{file}</span>
              {getBadge(file)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
