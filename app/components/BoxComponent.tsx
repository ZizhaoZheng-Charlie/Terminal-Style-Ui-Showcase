import { ReactNode } from "react";

interface BoxComponentProps {
  children: ReactNode;
  hexStrings?: string[];
  className?: string;
}

export default function BoxComponent({
  children,
  hexStrings,
  className = "",
}: BoxComponentProps) {
  return (
    <div
      className={`relative border border-gray-700/30 bg-[#0a0a0a] p-8 md:p-12 ${className}`}
    >
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-500/40"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-500/40"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gray-500/40"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-500/40"></div>

      {/* Optional Hex Display */}
      {hexStrings && hexStrings.length > 0 && (
        <div className="font-mono text-xs text-gray-500/60 space-y-1 mb-8">
          {hexStrings.map((str, index) => (
            <div key={index} className="leading-relaxed">
              {str}
            </div>
          ))}
        </div>
      )}

      {/* Content */}
      <div>{children}</div>
    </div>
  );
}
