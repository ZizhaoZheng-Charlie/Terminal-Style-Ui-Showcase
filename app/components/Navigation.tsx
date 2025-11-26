"use client";

import { useState } from "react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Showcase", href: "/showcase" },
    { label: "Skeleton", href: "/skeleton" },
  ];

  return (
    <nav className="border-b border-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <a href="/" className="font-mono text-lg">
              UNIT 410
            </a>
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-mono text-sm hover:text-gray-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="font-mono text-sm hover:text-gray-400 transition-colors"
            >
              Login
            </a>
            <a
              href="#"
              className="font-mono text-sm hover:text-gray-400 transition-colors"
            >
              Request Access
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden font-mono text-sm"
            >
              {menuOpen ? "close" : "menu"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-900">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 font-mono text-sm hover:text-gray-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
