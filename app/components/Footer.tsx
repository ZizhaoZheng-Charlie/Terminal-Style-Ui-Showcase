import Spinner from "./Spinner";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/50 bg-[#0a0a0a] py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-gray-500">
        <div className="flex items-center gap-2">
          <Spinner />
          <span>TERMS & PRIVACY</span>
        </div>
        <div className="text-center">
          © 2025 UNIT 410 | ALL RIGHTS RESERVED | UNIT 410® + U410®
        </div>
      </div>
    </footer>
  );
}
