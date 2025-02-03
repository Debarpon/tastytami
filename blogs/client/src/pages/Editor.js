import React, { useState } from 'react';

function Editor() {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [theme, setTheme] = useState('light'); // light, dark, or sepia

  const themes = {
    light: 'bg-white text-gray-900',
    dark: 'bg-gray-900 text-white',
    sepia: 'bg-[#f4ecd8] text-gray-900'
  };

  return (
    <div className={`min-h-screen ${themes[theme]} transition-colors duration-200`}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Theme switcher */}
        <div className="flex justify-end mb-8 space-x-4">
          <button
            onClick={() => setTheme('light')}
            className={`px-4 py-2 rounded ${
              theme === 'light' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Light
          </button>
          <button
            onClick={() => setTheme('dark')}
            className={`px-4 py-2 rounded ${
              theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Dark
          </button>
          <button
            onClick={() => setTheme('sepia')}
            className={`px-4 py-2 rounded ${
              theme === 'sepia' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Sepia
          </button>
        </div>

        {/* Editor */}
        <div className="space-y-6">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your title"
            className={`w-full text-4xl font-bold border-none focus:outline-none ${themes[theme]}`}
          />
          
          <div className="border-b border-gray-200 pb-4">
            <div className="flex space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded">
                <span role="img" aria-label="bold">𝐁</span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <span role="img" aria-label="italic">𝑰</span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <span role="img" aria-label="underline">U̲</span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <span role="img" aria-label="link">🔗</span>
              </button>
            </div>
          </div>

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start writing your story..."
            className={`w-full h-[calc(100vh-300px)] text-lg resize-none border-none focus:outline-none ${themes[theme]}`}
          />
        </div>

        {/* Action buttons */}
        <div className="fixed bottom-8 right-8 space-x-4">
          <button className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300">
            Save Draft
          </button>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Editor;
