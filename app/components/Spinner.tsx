"use client";

import { useState, useEffect } from "react";

export default function Spinner() {
  const [frame, setFrame] = useState(0);
  const frames = ["|", "/", "-", "\\"];

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prevFrame) => (prevFrame + 1) % frames.length);
    }, 150); // 150ms per frame = ~6.6 rotations per second

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block font-mono text-gray-500 w-3 text-center">
      {frames[frame]}
    </span>
  );
}
