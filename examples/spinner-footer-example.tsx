import Navigation from "../app/components/Navigation";
import Footer from "../app/components/Footer";
import BoxComponent from "../app/components/BoxComponent";
import Spinner from "../app/components/Spinner";

export default function SpinnerFooterExample() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Navigation />

      <div className="container mx-auto px-4 py-8 flex-1">
        <BoxComponent>
          <h1 className="text-2xl font-mono mb-6">Spinner Component Demo</h1>

          <div className="space-y-8">
            {/* Inline Spinner Example */}
            <div>
              <h2 className="text-lg font-mono text-gray-400 mb-3">
                Inline Spinner:
              </h2>
              <p className="font-mono text-sm text-gray-300">
                <Spinner /> Loading data...
              </p>
            </div>

            {/* Multiple Spinners */}
            <div>
              <h2 className="text-lg font-mono text-gray-400 mb-3">
                Multiple Spinners:
              </h2>
              <div className="space-y-2">
                <p className="font-mono text-sm text-gray-300">
                  <Spinner /> Processing transaction 1
                </p>
                <p className="font-mono text-sm text-gray-300">
                  <Spinner /> Processing transaction 2
                </p>
                <p className="font-mono text-sm text-gray-300">
                  <Spinner /> Processing transaction 3
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="border-t border-gray-800 pt-6">
              <h2 className="text-lg font-mono text-gray-400 mb-3">
                About the Spinner:
              </h2>
              <p className="font-mono text-sm text-gray-300 leading-relaxed">
                The spinner cycles through ASCII characters (|, /, -, \) to
                create a 360° rotation animation. It's commonly used in terminal
                interfaces to indicate loading or processing states.
              </p>
            </div>
          </div>
        </BoxComponent>
      </div>

      <Footer />
    </main>
  );
}
