"use client";

import { useState } from "react";

interface CodeSnippetProps {
  code: string;
  language?: string;
  showCopyButton?: boolean;
  className?: string;
  hexStrings?: string[];
}

export default function CodeSnippet({
  code,
  language,
  showCopyButton = true,
  className = "",
  hexStrings,
}: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div
      className={`relative border border-gray-700/30 bg-[#0a0a0a] ${className}`}
    >
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-500/40"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-500/40"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gray-500/40"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-500/40"></div>

      {/* Optional Hex Display */}
      {hexStrings && hexStrings.length > 0 && (
        <div className="font-mono text-xs text-gray-500/60 space-y-1 pt-6 px-6">
          {hexStrings.map((str, index) => (
            <div key={index} className="leading-relaxed">
              {str}
            </div>
          ))}
        </div>
      )}

      {/* Header */}
      {(language || showCopyButton) && (
        <div className="flex items-center justify-between border-b border-gray-700/30 px-6 py-3">
          {language && (
            <span className="font-mono text-xs text-gray-400 uppercase">
              {language}
            </span>
          )}
          {showCopyButton && (
            <button
              onClick={handleCopy}
              className="font-mono text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              aria-label="Copy code"
            >
              {copied ? (
                <>
                  <span className="text-green-500">✓</span>
                  <span className="text-green-500">Copied</span>
                </>
              ) : (
                <>
                  <span>📋</span>
                  <span>Copy</span>
                </>
              )}
            </button>
          )}
        </div>
      )}

      {/* Code Content */}
      <div className="overflow-x-auto">
        <pre className="font-mono text-sm text-gray-300 p-6 m-0">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}



