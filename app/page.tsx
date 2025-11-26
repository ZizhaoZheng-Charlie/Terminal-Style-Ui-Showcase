import Navigation from "./components/Navigation";
import HexDisplay from "./components/HexDisplay";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Button from "./components/Button";
import {
  hexStrings,
  coreComponents,
  formComponents,
  displayComponents,
  interactiveComponents,
  specializedComponents,
} from "./constant";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white flex flex-col">
      <Navigation />

      <div className="container mx-auto px-4 py-8 flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section className="mb-16 w-full max-w-4xl text-center">
          <div className="flex justify-center">
            <HexDisplay strings={hexStrings} />
          </div>
          <div className="mt-8">
            <h1 className="text-4xl md:text-6xl font-mono mb-4">#</h1>
            <h2 className="text-3xl md:text-5xl font-mono mb-6">
              Terminal-Style UI Showcase
            </h2>
            <p className="text-lg md:text-xl font-mono text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6">
              A comprehensive collection of terminal-inspired UI components
              built with a dark, monospace aesthetic.
            </p>
            <p className="text-base md:text-lg font-mono text-gray-500 max-w-4xl mx-auto leading-relaxed mb-8">
              This showcase demonstrates a complete set of UI components styled
              after Unit 410's design aesthetic. Each component maintains the
              distinctive look and feel of a command-line interface while
              providing modern, interactive functionality.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <a href="/showcase">
                <Button>View All Components</Button>
              </a>
              <a href="/skeleton">
                <Button>View Skeleton Examples</Button>
              </a>
            </div>
          </div>
        </section>

        {/* Core Components Section */}
        <div className="w-full max-w-4xl">
          <Section title="Core Components" defaultExpanded={true}>
            <div className="space-y-4">
              {coreComponents.map((component, index) => (
                <div key={index} className="border-l-2 border-gray-800 pl-4">
                  <h3 className="text-lg font-mono mb-1">
                    ├─ {component.name}
                  </h3>
                  <p className="text-gray-400 font-mono text-sm">
                    {component.description}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Form Components Section */}
        <div className="w-full max-w-4xl">
          <Section title="Form Components" defaultExpanded={false}>
            <div className="space-y-4">
              {formComponents.map((component, index) => (
                <div key={index} className="border-l-2 border-gray-800 pl-4">
                  <h3 className="text-lg font-mono mb-1">
                    ├─ {component.name}
                  </h3>
                  <p className="text-gray-400 font-mono text-sm">
                    {component.description}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Display Components Section */}
        <div className="w-full max-w-4xl">
          <Section title="Display Components" defaultExpanded={false}>
            <div className="space-y-4">
              {displayComponents.map((component, index) => (
                <div key={index} className="border-l-2 border-gray-800 pl-4">
                  <h3 className="text-lg font-mono mb-1">
                    ├─ {component.name}
                  </h3>
                  <p className="text-gray-400 font-mono text-sm">
                    {component.description}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Interactive Components Section */}
        <div className="w-full max-w-4xl">
          <Section title="Interactive Components" defaultExpanded={false}>
            <div className="space-y-4">
              {interactiveComponents.map((component, index) => (
                <div key={index} className="border-l-2 border-gray-800 pl-4">
                  <h3 className="text-lg font-mono mb-1">
                    ├─ {component.name}
                  </h3>
                  <p className="text-gray-400 font-mono text-sm">
                    {component.description}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Specialized Components Section */}
        <div className="w-full max-w-4xl">
          <Section title="Specialized Components" defaultExpanded={false}>
            <div className="space-y-4">
              {specializedComponents.map((component, index) => (
                <div key={index} className="border-l-2 border-gray-800 pl-4">
                  <h3 className="text-lg font-mono mb-1">
                    ├─ {component.name}
                  </h3>
                  <p className="text-gray-400 font-mono text-sm">
                    {component.description}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Documentation Section */}
        <div className="w-full max-w-4xl">
          <Section title="Documentation" defaultExpanded={false}>
            <div className="space-y-4">
              <div className="border-l-2 border-gray-800 pl-4">
                <h3 className="text-lg font-mono mb-2">├─ Component Guide</h3>
                <p className="text-gray-400 font-mono text-sm mb-4">
                  Detailed documentation for all components including props,
                  usage examples, and features.
                </p>
                <p className="text-gray-500 font-mono text-xs">
                  See COMPONENTS.md for complete API documentation
                </p>
              </div>
              <div className="border-l-2 border-gray-800 pl-4">
                <h3 className="text-lg font-mono mb-2">├─ Design System</h3>
                <p className="text-gray-400 font-mono text-sm mb-2">
                  Design principles and guidelines:
                </p>
                <ul className="text-gray-500 font-mono text-xs space-y-1 ml-4">
                  <li>• Dark theme with black background</li>
                  <li>• Monospace typography throughout</li>
                  <li>• Minimal, clean interface</li>
                  <li>• Tree-like navigation indicators</li>
                  <li>• Hex code displays and cryptographic elements</li>
                </ul>
              </div>
            </div>
          </Section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
