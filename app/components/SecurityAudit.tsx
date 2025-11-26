"use client";

import { useState } from "react";
import ScrambleText from "./ScrambleText";

interface AuditItem {
  date: string;
  company: string;
  type: string;
  status: string;
}

interface SecurityAuditProps {
  audits: AuditItem[];
}

export default function SecurityAudit({ audits }: SecurityAuditProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {audits.map((audit, index) => (
        <div
          key={index}
          className="group cursor-pointer transition-all duration-200"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex items-start gap-4">
            {/* Bracket with X that appears on hover */}
            <div className="font-mono text-sm text-gray-500 min-w-[2rem]">
              <span className="inline-block w-8">
                [{hoveredIndex === index ? "X" : " "}]
              </span>
            </div>

            {/* Date */}
            <div className="font-mono text-sm text-gray-500 uppercase min-w-[10rem]">
              <ScrambleText text={audit.date} delay={index * 100} />
            </div>

            {/* Title/Type */}
            <div className="flex-1">
              <ScrambleText
                text={audit.type.toUpperCase()}
                className="font-mono text-sm uppercase group-hover:text-white transition-colors"
                delay={index * 100 + 50}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


