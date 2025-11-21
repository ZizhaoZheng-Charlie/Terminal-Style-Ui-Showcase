"use client";

import { useState } from "react";
import Navigation from "../app/components/Navigation";
import BoxComponent from "../app/components/BoxComponent";
import Breadcrumb from "../app/components/Breadcrumb";
import Footer from "../app/components/Footer";

export default function BreadcrumbExample() {
  const [currentPath, setCurrentPath] = useState("page");

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Navigation />

      <div className="container mx-auto px-4 py-8 flex-1">
        <BoxComponent>
          <h1 className="text-4xl md:text-5xl font-mono mb-6 uppercase text-amber-500">
            BREADCRUMB COMPONENT
          </h1>

          <p className="text-lg font-mono text-gray-400 mb-8 leading-relaxed">
            A terminal-inspired breadcrumb navigation component with multiple
            separator styles, sizes, and flexible navigation options.
          </p>

          <div className="space-y-8">
            {/* Basic Examples */}
            <div>
              <h2 className="font-mono text-xl text-gray-300 mb-4 uppercase">
                Basic Examples
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="font-mono text-sm text-gray-500 mb-2">
                    With Next.js Links
                  </p>
                  <div className="p-4 bg-[#050505] border border-gray-900">
                    <Breadcrumb
                      items={[
                        { label: "Home", href: "/" },
                        { label: "Showcase", href: "/showcase" },
                        { label: "Components" },
                      ]}
                    />
                  </div>
                </div>

                <div>
                  <p className="font-mono text-sm text-gray-500 mb-2">
                    With Click Handlers
                  </p>
                  <div className="p-4 bg-[#050505] border border-gray-900">
                    <Breadcrumb
                      items={[
                        {
                          label: "Dashboard",
                          onClick: () => alert("Navigating to Dashboard"),
                        },
                        {
                          label: "Settings",
                          onClick: () => alert("Navigating to Settings"),
                        },
                        { label: "Security" },
                      ]}
                    />
                  </div>
                </div>

                <div>
                  <p className="font-mono text-sm text-gray-500 mb-2">
                    Mixed Navigation
                  </p>
                  <div className="p-4 bg-[#050505] border border-gray-900">
                    <Breadcrumb
                      items={[
                        { label: "Home", href: "/" },
                        { label: "Products" },
                        { label: "Category" },
                        { label: "Current Item" },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Separator Styles */}
            <div className="pt-6 border-t border-gray-800">
              <h2 className="font-mono text-xl text-gray-300 mb-4 uppercase">
                Separator Styles
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="font-mono text-sm text-gray-500 mb-2">Slash</p>
                  <div className="p-4 bg-[#050505] border border-gray-900">
                    <Breadcrumb
                      items={[
                        { label: "Home", href: "/" },
                        { label: "Section", href: "/section" },
                        { label: "Page" },
                      ]}
                      separator="slash"
                    />
                  </div>
                </div>

                <div>
                  <p className="font-mono text-sm text-gray-500 mb-2">Arrow</p>
                  <div className="p-4 bg-[#050505] border border-gray-900">
                    <Breadcrumb
                      items={[
                        { label: "Home", href: "/" },
                        { label: "Section", href: "/section" },
                        { label: "Page" },
                      ]}
                      separator="arrow"
                    />
                  </div>
                </div>

                <div>
                  <p className="font-mono text-sm text-gray-500 mb-2">
                    Chevron
                  </p>
                  <div className="p-4 bg-[#050505] border border-gray-900">
                    <Breadcrumb
                      items={[
                        { label: "Home", href: "/" },
                        { label: "Section", href: "/section" },
                        { label: "Page" },
                      ]}
                      separator="chevron"
                    />
                  </div>
                </div>

                <div>
                  <p className="font-mono text-sm text-gray-500 mb-2">Pipe</p>
                  <div className="p-4 bg-[#050505] border border-gray-900">
                    <Breadcrumb
                      items={[
                        { label: "Home", href: "/" },
                        { label: "Section", href: "/section" },
                        { label: "Page" },
                      ]}
                      separator="pipe"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sizes */}
            <div className="pt-6 border-t border-gray-800">
              <h2 className="font-mono text-xl text-gray-300 mb-4 uppercase">
                Sizes
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="font-mono text-sm text-gray-500 mb-2">Small</p>
                  <div className="p-4 bg-[#050505] border border-gray-900">
                    <Breadcrumb
                      items={[
                        { label: "Home", href: "/" },
                        { label: "Section", href: "/section" },
                        { label: "Page" },
                      ]}
                      size="sm"
                    />
                  </div>
                </div>

                <div>
                  <p className="font-mono text-sm text-gray-500 mb-2">
                    Medium (default)
                  </p>
                  <div className="p-4 bg-[#050505] border border-gray-900">
                    <Breadcrumb
                      items={[
                        { label: "Home", href: "/" },
                        { label: "Section", href: "/section" },
                        { label: "Page" },
                      ]}
                      size="md"
                    />
                  </div>
                </div>

                <div>
                  <p className="font-mono text-sm text-gray-500 mb-2">Large</p>
                  <div className="p-4 bg-[#050505] border border-gray-900">
                    <Breadcrumb
                      items={[
                        { label: "Home", href: "/" },
                        { label: "Section", href: "/section" },
                        { label: "Page" },
                      ]}
                      size="lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Real-World Examples */}
            <div className="pt-6 border-t border-gray-800">
              <h2 className="font-mono text-xl text-gray-300 mb-4 uppercase">
                Real-World Examples
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="font-mono text-sm text-gray-500 mb-2">
                    File System Navigation
                  </p>
                  <div className="p-4 bg-[#050505] border border-gray-900">
                    <Breadcrumb
                      items={[
                        { label: "root", href: "/" },
                        { label: "users", href: "/users" },
                        { label: "admin", href: "/users/admin" },
                        { label: "documents" },
                      ]}
                      separator="slash"
                    />
                  </div>
                </div>

                <div>
                  <p className="font-mono text-sm text-gray-500 mb-2">
                    E-commerce Categories
                  </p>
                  <div className="p-4 bg-[#050505] border border-gray-900">
                    <Breadcrumb
                      items={[
                        { label: "Store", href: "/store" },
                        { label: "Electronics", href: "/store/electronics" },
                        {
                          label: "Computers",
                          href: "/store/electronics/computers",
                        },
                        { label: "Laptops" },
                      ]}
                      separator="arrow"
                    />
                  </div>
                </div>

                <div>
                  <p className="font-mono text-sm text-gray-500 mb-2">
                    Documentation Path
                  </p>
                  <div className="p-4 bg-[#050505] border border-gray-900">
                    <Breadcrumb
                      items={[
                        { label: "Docs", href: "/docs" },
                        { label: "API", href: "/docs/api" },
                        { label: "Reference", href: "/docs/api/reference" },
                        { label: "Authentication" },
                      ]}
                      separator="chevron"
                    />
                  </div>
                </div>

                <div>
                  <p className="font-mono text-sm text-gray-500 mb-2">
                    Interactive Navigation
                  </p>
                  <div className="p-4 bg-[#050505] border border-gray-900">
                    <Breadcrumb
                      items={[
                        {
                          label: "Settings",
                          onClick: () => setCurrentPath("settings"),
                        },
                        {
                          label: "Security",
                          onClick: () => setCurrentPath("security"),
                        },
                        { label: currentPath },
                      ]}
                      separator="pipe"
                    />
                  </div>
                  <p className="font-mono text-xs text-gray-600 mt-2">
                    Current path: {currentPath}
                  </p>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="pt-6 border-t border-gray-800">
              <h2 className="font-mono text-xl text-gray-300 mb-4 uppercase">
                Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-mono text-sm text-amber-500 mb-3 uppercase">
                    Navigation
                  </h3>
                  <ul className="font-mono text-sm text-gray-500 space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Next.js Link integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Click handler support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Mixed navigation types</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Hover effects on links</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-sm text-amber-500 mb-3 uppercase">
                    Styling
                  </h3>
                  <ul className="font-mono text-sm text-gray-500 space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Terminal aesthetic design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Four separator styles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Three size options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Responsive and wraps</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Accessible with ARIA</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </BoxComponent>

        {/* Code Example */}
        <BoxComponent className="mt-8">
          <h2 className="font-mono text-2xl text-gray-300 mb-4 uppercase">
            Usage Example
          </h2>
          <div className="bg-[#050505] p-6 border border-gray-900 overflow-x-auto">
            <pre className="font-mono text-xs text-gray-500">
              {`import Breadcrumb from "./components/Breadcrumb";

// Basic usage with links
<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Section", href: "/section" },
    { label: "Page" },
  ]}
/>

// With click handlers
<Breadcrumb
  items={[
    { label: "Dashboard", onClick: () => navigate("/dashboard") },
    { label: "Settings", onClick: () => navigate("/settings") },
    { label: "Security" },
  ]}
/>

// Custom separator
<Breadcrumb
  items={[...]}
  separator="arrow" // "slash" | "arrow" | "chevron" | "pipe"
/>

// Custom size
<Breadcrumb
  items={[...]}
  size="lg" // "sm" | "md" | "lg"
/>`}
            </pre>
          </div>
        </BoxComponent>
      </div>

      <Footer />
    </main>
  );
}
