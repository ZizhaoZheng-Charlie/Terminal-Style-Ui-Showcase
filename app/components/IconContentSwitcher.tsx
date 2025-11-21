"use client";

import { ReactNode, useState } from "react";

export interface IconContentItem {
  id: string;
  icon: ReactNode;
  label: string;
  content: ReactNode;
  tooltip?: string;
  disabled?: boolean;
}

interface IconContentSwitcherProps {
  items: IconContentItem[];
  defaultActiveId?: string;
  onSwitch?: (id: string) => void;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "bordered" | "minimal";
  className?: string;
}

export default function IconContentSwitcher({
  items,
  defaultActiveId,
  onSwitch,
  size = "md",
  variant = "default",
  className = "",
}: IconContentSwitcherProps) {
  const [activeId, setActiveId] = useState(
    defaultActiveId || items[0]?.id || ""
  );

  const activeItem = items.find((item) => item.id === activeId) || items[0];

  const sizeStyles = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const iconSizeStyles = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const variantStyles = {
    default: "border-gray-800 bg-black",
    bordered: "border-gray-700 bg-gray-900",
    minimal: "border-transparent bg-transparent",
  };

  const handleSwitch = (id: string) => {
    const item = items.find((i) => i.id === id);
    if (item && !item.disabled) {
      setActiveId(id);
      onSwitch?.(id);
    }
  };

  return (
    <div className={`font-mono ${className}`}>
      {/* Icon Switcher Controls - Segmented Style */}
      <div className="inline-flex items-center border border-gray-800 rounded overflow-hidden">
        {items.map((item, index) => {
          const isActive = item.id === activeId;
          const isDisabled = item.disabled;
          const isFirst = index === 0;
          const isLast = index === items.length - 1;

          return (
            <div key={item.id} className="relative">
              <button
                onClick={() => handleSwitch(item.id)}
                disabled={isDisabled}
                className={`
                  ${sizeStyles[size]}
                  flex items-center justify-center
                  font-mono
                  transition-all
                  group
                  border-r border-gray-800
                  ${isLast ? "border-r-0" : ""}
                  ${
                    isActive
                      ? "bg-gray-900 text-white"
                      : "bg-black text-gray-400 hover:text-gray-300 hover:bg-gray-950"
                  }
                  ${
                    isDisabled
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }
                `}
                aria-label={item.label}
                title={item.tooltip || item.label}
              >
                <span
                  className={`${iconSizeStyles[size]} flex items-center justify-center`}
                >
                  {item.icon}
                </span>
              </button>

              {/* Tooltip */}
              {item.tooltip && !isDisabled && (
                <div
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50
                  bg-gray-900 border border-gray-700 px-2 py-1 text-xs text-gray-300
                  whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity
                  before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2
                  before:border-4 before:border-transparent before:border-t-gray-700"
                >
                  {item.tooltip}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Active Content */}
      {activeItem && (
        <div className="border border-gray-800 border-t-0 bg-[#0a0a0a] p-4">
          <div className="mb-2 text-xs text-gray-500 uppercase tracking-wider">
            {activeItem.label}
          </div>
          <div className="text-sm text-gray-300">{activeItem.content}</div>
        </div>
      )}
    </div>
  );
}
