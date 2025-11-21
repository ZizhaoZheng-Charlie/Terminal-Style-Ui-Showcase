"use client";

import Navigation from "../app/components/Navigation";
import Tabs, { TabItem } from "../app/components/Tabs";

export default function TabsExample() {
  const tabItems: TabItem[] = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-mono mb-4">Overview Tab</h3>
          <p className="text-gray-400 font-mono">
            This is the overview content. Here you can see general information
            about the system.
          </p>
          <div className="border-l-2 border-gray-800 pl-4">
            <p className="text-sm text-gray-500 font-mono">
              ├─ System Status: Active
            </p>
            <p className="text-sm text-gray-500 font-mono">
              ├─ Last Updated: 2024-01-15
            </p>
          </div>
        </div>
      ),
      tooltip: "View general system information",
    },
    {
      id: "settings",
      label: "Settings",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-mono mb-4">Settings Tab</h3>
          <p className="text-gray-400 font-mono">
            Configure your system settings here.
          </p>
          <div className="space-y-2">
            <label className="block text-sm font-mono text-gray-400">
              Theme:
            </label>
            <select className="bg-black border border-gray-800 px-4 py-2 text-sm font-mono text-white">
              <option>Dark</option>
              <option>Light</option>
            </select>
          </div>
        </div>
      ),
      tooltip: "Configure system settings",
    },
    {
      id: "analytics",
      label: "Analytics",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-mono mb-4">Analytics Tab</h3>
          <p className="text-gray-400 font-mono">
            View detailed analytics and metrics.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="border border-gray-800 p-4">
              <p className="text-xs text-gray-500 font-mono mb-2">TOTAL</p>
              <p className="text-2xl font-mono">1,234</p>
            </div>
            <div className="border border-gray-800 p-4">
              <p className="text-xs text-gray-500 font-mono mb-2">ACTIVE</p>
              <p className="text-2xl font-mono">567</p>
            </div>
            <div className="border border-gray-800 p-4">
              <p className="text-xs text-gray-500 font-mono mb-2">PENDING</p>
              <p className="text-2xl font-mono">89</p>
            </div>
          </div>
        </div>
      ),
      tooltip: "View analytics and metrics",
    },
    {
      id: "disabled",
      label: "Disabled",
      content: <div>This tab is disabled</div>,
      tooltip: "This tab is currently disabled",
      disabled: true,
    },
  ];

  const helpContent = (
    <div className="space-y-2">
      <p>
        Use the tabs above to navigate between different sections of the
        interface.
      </p>
      <ul className="list-disc list-inside space-y-1 text-gray-400">
        <li>Hover over tabs to see tooltips</li>
        <li>Click on tabs to switch content</li>
        <li>Disabled tabs cannot be selected</li>
      </ul>
    </div>
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-mono mb-8 uppercase">
          Tabs Component
        </h1>

        <div className="mb-12">
          <Tabs
            items={tabItems}
            defaultActiveTab="overview"
            helpContent={helpContent}
            helpTooltip="Click for help or hover for quick info"
            helpPopoverTitle="Tab Navigation Help"
            onTabChange={(tabId) => {
              console.log("Tab changed to:", tabId);
            }}
          />
        </div>

        {/* Example without help button */}
        <div className="mt-12">
          <h2 className="text-2xl font-mono mb-4">Tabs Without Help Button</h2>
          <Tabs
            items={tabItems.filter((item) => !item.disabled)}
            defaultActiveTab="settings"
          />
        </div>

        {/* Example with only tooltips */}
        <div className="mt-12">
          <h2 className="text-2xl font-mono mb-4">Tabs With Only Tooltips</h2>
          <Tabs
            items={tabItems.slice(0, 3)}
            defaultActiveTab="analytics"
          />
        </div>
      </div>
    </main>
  );
}



