"use client";

import { useState } from "react";
import Navigation from "../app/components/Navigation";
import TerminalModal from "../app/components/TerminalModal";
import TerminalModalSection from "../app/components/TerminalModalSection";

export default function TerminalModalShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-mono text-3xl mb-8 text-amber-500">
            Terminal Modal Showcase
          </h1>

          <p className="font-mono text-gray-400 mb-8">
            Click the button below to see the terminal-style modal in action.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-black text-white border border-gray-900 font-mono text-sm uppercase tracking-wider hover:bg-gray-950 hover:border-gray-800 transition-colors"
          >
            Open Terminal Modal
          </button>

          {/* Example Modal */}
          <TerminalModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="SELF-CUSTODY"
          >
            <TerminalModalSection title="SELF-CUSTODY">
              <p className="font-mono text-sm text-gray-500 leading-relaxed">
                Our self-custody architecture gives clients full control. Root
                keys are cryptographically split, fully segmented, and
                physically held by clients in locations of their choice.
              </p>
              <p className="font-mono text-sm text-gray-500 leading-relaxed">
                Clients can use this cold storage on their own terms. For
                specific situations, they can authorize Unit 410 software to
                reconstruct and operate on the keys to generate wallets, use
                digital assets, or perform arbitrarily complex operations.
              </p>
            </TerminalModalSection>

            <TerminalModalSection title="APPROVALS">
              <p className="font-mono text-sm text-gray-500 leading-relaxed">
                Before any operation can proceed, it must pass custom approvals
                rules configured to a client's requirements. This ensures a
                quorum of multiple authorized users are always engaged.
              </p>
              <p className="font-mono text-sm text-gray-500 leading-relaxed">
                Approvals are cryptographic and done through an easy and secure
                mobile application.
              </p>
            </TerminalModalSection>

            <TerminalModalSection title="WALLET SUPPORT">
              <p className="font-mono text-sm text-gray-500 leading-relaxed">
                Unit 410 engineers self-custody wallets to support the new and
                most novel content using old (mature) cryptography. This design
                ensures clients are able to secure what the future has in store.
              </p>
            </TerminalModalSection>

            {/* Footer Logo */}
            <div className="flex justify-center mt-16 pt-10 border-t border-gray-800">
              <div className="px-6 py-2 bg-black border border-gray-800 font-mono text-base tracking-[0.3em] text-gray-400">
                U410
              </div>
            </div>
          </TerminalModal>
        </div>
      </div>
    </main>
  );
}
