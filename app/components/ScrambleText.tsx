"use client";

import { useEffect, useState } from "react";

interface ScrambleTextProps {
  text: string;
  speed?: number;
  scrambleSpeed?: number;
  className?: string;
  delay?: number;
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

export default function ScrambleText({
  text,
  speed = 50,
  scrambleSpeed = 30,
  className = "",
  delay = 0,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsScrambling(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isScrambling) return;

    if (currentIndex >= text.length) {
      setDisplayText(text);
      return;
    }

    const scrambleInterval = setInterval(() => {
      const revealed = text.slice(0, currentIndex);
      const randomChars = Array.from(
        { length: Math.min(5, text.length - currentIndex) },
        () => characters[Math.floor(Math.random() * characters.length)]
      ).join("");

      setDisplayText(revealed + randomChars);
    }, scrambleSpeed);

    const revealTimeout = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    return () => {
      clearInterval(scrambleInterval);
      clearTimeout(revealTimeout);
    };
  }, [currentIndex, text, speed, scrambleSpeed, isScrambling]);

  return <span className={className}>{displayText || text}</span>;
}
