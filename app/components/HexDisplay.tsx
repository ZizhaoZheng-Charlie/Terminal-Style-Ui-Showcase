interface HexDisplayProps {
  strings: string[];
}

export default function HexDisplay({ strings }: HexDisplayProps) {
  return (
    <div className="font-mono text-sm text-gray-600 space-y-1 mb-8">
      {strings.map((str, index) => (
        <div key={index} className="leading-relaxed">
          {str}
        </div>
      ))}
    </div>
  );
}
