"use client";

import { ReactNode, useState, useRef, useEffect } from "react";

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
  tooltip?: string;
  disabled?: boolean;
}

interface TabsProps {
  items: TabItem[];
  defaultActiveTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
  helpContent?: ReactNode;
  helpTooltip?: string;
  helpPopoverTitle?: string;
}

export default function Tabs({
  items,
  defaultActiveTab,
  onTabChange,
  className = "",
  helpContent,
  helpTooltip,
  helpPopoverTitle = "Help",
}: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>(
    defaultActiveTab || items[0]?.id || ""
  );
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [showHelpPopover, setShowHelpPopover] = useState(false);
  const [helpHovered, setHelpHovered] = useState(false);
  const helpButtonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        helpButtonRef.current &&
        !helpButtonRef.current.contains(event.target as Node)
      ) {
        setShowHelpPopover(false);
      }
    };

    if (showHelpPopover) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [showHelpPopover]);

  const handleTabClick = (tabId: string) => {
    const tab = items.find((item) => item.id === tabId);
    if (tab && !tab.disabled) {
      setActiveTab(tabId);
      onTabChange?.(tabId);
    }
  };

  const activeTabContent = items.find((item) => item.id === activeTab)?.content;

  return (
    <div className={`font-mono ${className}`}>
      {/* Tab Header */}
      <div className="flex items-center gap-2 border-b border-gray-800 mb-4">
        <div className="flex-1 flex items-center gap-1">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative group"
              onMouseEnter={() => setHoveredTab(item.id)}
              onMouseLeave={() => setHoveredTab(null)}
            >
              <button
                onClick={() => handleTabClick(item.id)}
                disabled={item.disabled}
                className={`
                  px-4 py-2 text-sm uppercase tracking-wider
                  border-b-2 transition-colors
                  ${
                    activeTab === item.id
                      ? "border-white text-white"
                      : "border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-600"
                  }
                  ${
                    item.disabled
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }
                `}
              >
                {item.label}
              </button>

              {/* Tooltip for tab */}
              {item.tooltip && hoveredTab === item.id && (
                <div
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50
                    bg-gray-900 border border-gray-700 px-3 py-2 text-xs text-gray-300
                    whitespace-nowrap pointer-events-none
                    before:content-[''] before:absolute before:top-full before:left-1/2 
                    before:-translate-x-1/2 before:border-4 before:border-transparent 
                    before:border-t-gray-700"
                >
                  {item.tooltip}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Help Button */}
        {(helpContent || helpTooltip) && (
          <div className="relative">
            <button
              ref={helpButtonRef}
              onClick={() => helpContent && setShowHelpPopover(!showHelpPopover)}
              onMouseEnter={() => setHelpHovered(true)}
              onMouseLeave={() => setHelpHovered(false)}
              className="
                w-6 h-6 flex items-center justify-center
                border border-gray-800 text-gray-500
                hover:border-gray-700 hover:text-gray-300
                transition-colors cursor-pointer
                text-xs font-mono
              "
              aria-label="Help"
            >
              ?
            </button>

            {/* Help Tooltip (on hover) */}
            {helpTooltip && helpHovered && !showHelpPopover && (
              <div
                className="absolute bottom-full right-0 mb-2 z-50
                  bg-gray-900 border border-gray-700 px-3 py-2 text-xs text-gray-300
                  whitespace-nowrap pointer-events-none
                  before:content-[''] before:absolute before:top-full before:right-2 
                  before:border-4 before:border-transparent before:border-t-gray-700"
              >
                {helpTooltip}
              </div>
            )}

            {/* Help Popover (on click) */}
            {showHelpPopover && helpContent && (
              <div
                ref={popoverRef}
                className="absolute bottom-full right-0 mb-2 z-50
                  bg-gray-900 border border-gray-700 p-4 text-sm text-gray-300
                  min-w-[200px] max-w-[400px] shadow-lg
                  before:content-[''] before:absolute before:top-full before:right-2 
                  before:border-4 before:border-transparent before:border-t-gray-700"
              >
                <div className="flex items-center justify-between mb-2 pb-2 border-b border-gray-800">
                  <h3 className="text-xs uppercase tracking-wider text-white font-mono">
                    {helpPopoverTitle}
                  </h3>
                  <button
                    onClick={() => setShowHelpPopover(false)}
                    className="text-gray-500 hover:text-white transition-colors text-xs"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>
                <div className="text-xs leading-relaxed">{helpContent}</div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Tab Content */}
      <div className="min-h-[200px]">{activeTabContent}</div>
    </div>
  );
}

