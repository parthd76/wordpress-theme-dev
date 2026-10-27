import React, { useState, useMemo } from 'react';
import { saveAs } from 'file-saver';
import { Header } from './components/Header.jsx';
import { GeneratorForm } from './components/GeneratorForm.jsx';
import { FileExplorer } from './components/FileExplorer.jsx';
import { Instructions } from './components/Instructions.jsx';
import { FaqSection } from './components/FaqSection.jsx';
import { PresetsModal } from './components/PresetsModal.jsx';
import { generateThemeFiles, generateThemeZip } from './generator/index.js';

export function App() {
  const [formData, setFormData] = useState({
    name: 'WordPress Theme Dev',
    slug: 'wp-theme-dev',
    author: 'Theme Developer',
    authorUri: 'https://example.com',
    themeUri: 'https://example.com',
    description: 'A clean, modern WordPress starter theme built for speed, accessibility, and high performance.',
    version: '1.0.0',
    license: 'GNU General Public License v2 or later',
    licenseUri: 'https://www.gnu.org/licenses/gpl-2.0.html',
    themeType: 'classic', // classic | hybrid | block
    includeWooCommerce: false,
    includeSass: false,
    includeThemeJson: true,
    includeNavigationJs: true,
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [isPresetsOpen, setIsPresetsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleFormChange = (updates) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const handleSelectPreset = (presetConfig) => {
    setFormData((prev) => ({
      ...prev,
      ...presetConfig,
    }));
    showToast('Applied preset settings!');
  };

  // Generate the file map in real time as user types
  const { files, tokens } = useMemo(() => {
    return generateThemeFiles(formData);
  }, [formData]);

  // Download entire theme as .ZIP
  const handleGenerateZip = async () => {
    try {
      setIsGenerating(true);
      const { blob, filename } = await generateThemeZip(formData);
      saveAs(blob, filename);
      showToast(`Downloaded ${filename} successfully!`);
    } catch (err) {
      console.error('Error generating theme zip:', err);
      showToast('Error packaging theme zip');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header onOpenPresets={() => setIsPresetsOpen(true)} />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-slate-900 text-white font-medium text-xs shadow-lg flex items-center gap-2 animate-bounce">
          <span>{toastMessage}</span>
        </div>
      )}

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Generator Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 p-6 sm:p-8 rounded-2xl shadow-sm">
            <GeneratorForm
              formData={formData}
              onChange={handleFormChange}
              onGenerateZip={handleGenerateZip}
              isGenerating={isGenerating}
            />
          </div>

          {/* Right Column: Theme Files Included in Package */}
          <div className="lg:col-span-5 h-[640px] sticky top-24">
            <FileExplorer
              files={files}
              themeSlug={tokens.slug}
            />
          </div>
        </div>

        {/* Instructions & CLI Usage */}
        <Instructions slug={tokens.slug} />

        {/* SEO FAQ Section */}
        <FaqSection />
      </main>

      {/* Presets Modal */}
      <PresetsModal
        isOpen={isPresetsOpen}
        onClose={() => setIsPresetsOpen(false)}
        onSelectPreset={handleSelectPreset}
      />

      {/* Footer */}
      <footer className="border-t border-slate-200/80 bg-white py-8 mt-16 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-1">
          <p className="font-medium text-slate-700">
            WordPress Theme Dev — Clean, Modern Starter Theme Boilerplate Generator
          </p>
          <p>
            Licensed under GPL-2.0-or-later. Built for professional WordPress theme developers.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
