import Navigation from "./components/Navigation";
import HexDisplay from "./components/HexDisplay";
import Section from "./components/Section";
import Footer from "./components/Footer";

export default function Home() {
  const hexStrings = [
    "F5RL3UNT 09 0C 4D 5C 70 6D 6D 28 72 75 75 6B 28 38 3B 37 xcvMNOPQP?QRRK8!",
    "VVPW5CZZ D2 1E 34 6F 92 B8 0C 47 5D 9A 21 F3 76 4C 50 81 RIV42001(OLILKT.",
    "FLDPC2EN D2 1E 34 6F 92 B8 0C 47 5D 9A 21 F3 76 4C 50 81 ../.;£íýz{.zÇ,\\>X",
    "3TSBP6KR 9B 5C 72 3D 84 A1 1F E8 42 67 9E 0B 14 6D F5 39 gv.a.È.ÃˆŠQ2:Ÿcv",
    "VXLNFPDY 4A 8D 2B 0E 57 C4 A8 6F 93 B1 D7 5E 1A 7C 2F 4B K.^J)«\\_Iÿÿ\\*G¬+|\\=",
    "8ZIAH00D 1C F9 63 4B 2A E7 0D 95 68 3E B2 D1 74 5F 9D 20 VS(HIVMS\\=.).X//s",
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Navigation />

      <div className="container mx-auto px-4 py-8 flex-1">
        {/* Hero Section */}
        <section className="mb-16">
          <HexDisplay strings={hexStrings} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-6xl font-mono mb-4">#</h1>
            <h2 className="text-3xl md:text-5xl font-mono mb-6">
              Cold Storage & Staking
            </h2>
            <p className="text-xl md:text-2xl font-mono mb-4">
              For Institutions
            </p>
            <p className="text-lg md:text-xl font-mono text-gray-400 max-w-3xl leading-relaxed">
              We empower leading crypto pioneers to secure their digital assets.
            </p>
            <p className="text-base md:text-lg font-mono text-gray-500 mt-6 max-w-4xl leading-relaxed">
              Institutions and other large holders use our state-of-the-art
              self-custody wallets to secure and stake digital assets at the
              largest scale. Our full service technical support helps clients
              manage risk, research, reporting, and the unique challenges of
              operating securely at scale.
            </p>
            <p className="text-sm md:text-base font-mono text-gray-600 mt-4">
              Unit 410 is named after the apartment where{" "}
              <span className="text-white">Coinbase</span> was founded.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <Section title="Services" defaultExpanded={false}>
          <div className="space-y-6">
            <div className="border-l-2 border-gray-800 pl-4">
              <h3 className="text-xl font-mono mb-2">
                ├─ wallets & self-custody
              </h3>
              <p className="text-gray-400 font-mono">
                Unit 410 has the most mature institutional self-custody offering
                for cold storage, currently supporting 300+ digital assets.
              </p>
              <span className="text-gray-600 font-mono text-sm">[+]</span>
            </div>
            <div className="border-l-2 border-gray-800 pl-4">
              <h3 className="text-xl font-mono mb-2">
                ├─ staking & Participation
              </h3>
              <p className="text-gray-400 font-mono">
                Unit 410 provides the industry's most mature staking and
                participation capabilities, currently supporting 20+ networks.
              </p>
              <span className="text-gray-600 font-mono text-sm">[+]</span>
            </div>
            <div className="border-l-2 border-gray-800 pl-4">
              <h3 className="text-xl font-mono mb-2">├─ reporting & Audit</h3>
              <p className="text-gray-400 font-mono">
                Unit 410 provides industry leading reporting and audit support
                for RIAs and public companies to meet their obligations.
              </p>
              <span className="text-gray-600 font-mono text-sm">[+]</span>
            </div>
          </div>
        </Section>
      </div>
      <Footer />
    </main>
  );
}
