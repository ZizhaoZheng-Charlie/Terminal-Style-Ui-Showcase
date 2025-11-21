"use client";

import { useEffect } from "react";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function TerminalModal({
  isOpen,
  onClose,
  title,
  children,
}: TerminalModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-3xl bg-[#1a1a1a] shadow-2xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-12 h-12 pointer-events-none">
          <div className="absolute top-3 left-3 text-gray-700 font-mono text-xs">
            ┌
          </div>
          <div className="absolute top-3 left-5 w-6 h-px bg-gray-800"></div>
          <div className="absolute top-5 left-3 w-px h-6 bg-gray-800"></div>
        </div>
        <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none">
          <div className="absolute top-3 right-3 text-gray-700 font-mono text-xs">
            ┐
          </div>
          <div className="absolute top-3 right-5 w-6 h-px bg-gray-800"></div>
          <div className="absolute top-5 right-3 w-px h-6 bg-gray-800"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-12 h-12 pointer-events-none">
          <div className="absolute bottom-3 left-3 text-gray-700 font-mono text-xs">
            └
          </div>
          <div className="absolute bottom-3 left-5 w-6 h-px bg-gray-800"></div>
          <div className="absolute bottom-5 left-3 w-px h-6 bg-gray-800"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none">
          <div className="absolute bottom-3 right-3 text-gray-700 font-mono text-xs">
            ┘
          </div>
          <div className="absolute bottom-3 right-5 w-6 h-px bg-gray-800"></div>
          <div className="absolute bottom-5 right-3 w-px h-6 bg-gray-800"></div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-sm text-gray-600">├─</span>
            <h2 className="font-mono text-sm uppercase tracking-wider text-white">
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="font-mono text-sm text-gray-600 hover:text-gray-400 transition-colors uppercase tracking-wider"
          >
            X CLOSE
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-8 py-8 flex-1">{children}</div>
      </div>
    </div>
  );
}
