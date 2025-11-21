interface TerminalModalSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function TerminalModalSection({
  title,
  children,
}: TerminalModalSectionProps) {
  return (
    <div className="mb-10 last:mb-0">
      <div className="flex items-center space-x-2 mb-5">
        <span className="font-mono text-sm text-gray-600">├─</span>
        <h3 className="font-mono text-sm uppercase tracking-wider text-white">
          {title}
        </h3>
      </div>
      <div className="ml-6 space-y-5">{children}</div>
    </div>
  );
}
