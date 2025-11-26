"use client";

import { useState, ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  defaultExpanded?: boolean;
}

export default function Section({
  title,
  children,
  defaultExpanded = true,
}: SectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <section className="mb-12">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center space-x-2 mb-4 hover:text-gray-400 transition-colors"
      >
        <span className="font-mono text-xl">├─</span>
        <h2 className="font-mono text-xl">{title}</h2>
        <span className="font-mono text-gray-600">
          {isExpanded ? "[-]" : "[+]"}
        </span>
      </button>

      {isExpanded && <div className="ml-6">{children}</div>}
    </section>
  );
}
