import Navigation from "../app/components/Navigation";
import BoxComponent from "../app/components/BoxComponent";

export default function BoxComponentExample() {
  const hexStrings = [
    "00000030  01 04 45 54 68 65 20 54  69 6D 65 73 20 30 33 2F   ../THE TIMES 03/",
    "00000090  44 61 6E 6E 6F 32 30 30 39  20 43 68 61 6E 63 65 6C   JAN/2009 CHANCEL",
    "000000A0  6C 6F 72 20 6F 6E 20 62  72 69 6E 6B 20 6F 66 20   LOR ON BRINK OF",
    "000000B0  73 65 63 6F 6E 64 20 62  61 69 6C 6F 75 74 20 66   SECOND BAILOUT",
    "000000C0  6F 72 20 62 61 6E 6B 73  FF FF FF FF 01 00 F2 05   OR BANKSŸŸŸŸ/O/",
    "000000D0  2F 2F 2F 2F 2F 2F 2F 2F  55 4E 49 54 20 34 31 30   ////////UNIT 410",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <BoxComponent hexStrings={hexStrings}>
          <h1 className="text-4xl md:text-5xl font-mono mb-6 uppercase">
            COLD STORAGE & STAKING FOR
          </h1>
          
          <p className="text-lg md:text-xl font-mono text-gray-400 mb-6 leading-relaxed">
            We empower leading crypto pioneers to secure their digital assets.
          </p>
          
          <p className="text-base font-mono text-gray-500 leading-relaxed mb-4">
            Institutions and other large holders use our state-of-the-art self-custody wallets 
            to secure and stake digital assets at the largest scale. Our full service technical 
            support helps clients manage risk, research, reporting, and the unique challenges 
            of operating securely at scale.
          </p>
          
          <p className="text-sm font-mono text-gray-600">
            Unit 410 is named after the apartment where{" "}
            <span className="text-blue-400 underline">Coinbase</span> was founded.
          </p>
        </BoxComponent>

        {/* Example without hex display */}
        <BoxComponent className="mt-8">
          <h2 className="text-3xl font-mono mb-4">ANOTHER SECTION</h2>
          <p className="text-gray-400 font-mono">
            This is another box component without the hex display at the top.
          </p>
        </BoxComponent>
      </div>
    </main>
  );
}



