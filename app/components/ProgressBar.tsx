"use client";

import { useEffect, useState, useRef } from "react";
import Spinner from "./Spinner";

export type ProgressBarVariant = 
  | "default" 
  | "success" 
  | "warning" 
  | "error" 
  | "info";

export type ProgressBarSize = "sm" | "md" | "lg";

interface ProgressBarProps {
  value: number; // 0-100
  variant?: ProgressBarVariant;
  size?: ProgressBarSize;
  label?: string;
  showPercentage?: boolean;
  animated?: boolean;
  className?: string;
}

export default function ProgressBar({
  value,
  variant = "default",
  size = "md",
  label,
  showPercentage = true,
  animated = true,
  className = "",
}: ProgressBarProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const clampedValue = Math.min(100, Math.max(0, value));
  const animationFrameRef = useRef<number | null>(null);
  const displayValueRef = useRef(0);

  // Keep ref in sync with state
  useEffect(() => {
    displayValueRef.current = displayValue;
  }, [displayValue]);

  useEffect(() => {
    // Cancel any ongoing animation
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    if (animated) {
      const duration = 800; // Animation duration in ms
      const startTime = Date.now();
      const startValue = displayValueRef.current;
      const targetValue = clampedValue;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentValue = startValue + (targetValue - startValue) * eased;
        
        setDisplayValue(currentValue);

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          setDisplayValue(targetValue);
          animationFrameRef.current = null;
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      setDisplayValue(clampedValue);
    }

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [clampedValue, animated]);

  const variantStyles = {
    default: {
      track: "bg-gray-900 border-gray-800",
      fill: "bg-gray-700",
      text: "text-gray-400",
    },
    success: {
      track: "bg-gray-900 border-green-500/30",
      fill: "bg-green-500",
      text: "text-green-500",
    },
    warning: {
      track: "bg-gray-900 border-amber-500/30",
      fill: "bg-amber-500",
      text: "text-amber-500",
    },
    error: {
      track: "bg-gray-900 border-red-500/30",
      fill: "bg-red-500",
      text: "text-red-500",
    },
    info: {
      track: "bg-gray-900 border-blue-500/30",
      fill: "bg-blue-500",
      text: "text-blue-500",
    },
  };

  const sizeStyles = {
    sm: {
      height: "h-2",
      text: "text-xs",
      padding: "px-2 py-1",
    },
    md: {
      height: "h-3",
      text: "text-sm",
      padding: "px-3 py-2",
    },
    lg: {
      height: "h-4",
      text: "text-base",
      padding: "px-4 py-3",
    },
  };

  const styles = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  // Calculate number of equals signs (using 20 as the bar width for visual consistency)
  const barWidth = 20;
  const filledCount = Math.round((displayValue / 100) * barWidth);
  const emptyCount = barWidth - filledCount;
  
  // Show spinner at the head if progress is between 0 and 100
  const showSpinner = displayValue > 0 && displayValue < 100;
  
  // Adjust filled count to make room for spinner if needed
  const actualFilledCount = showSpinner && filledCount > 0 ? filledCount - 1 : filledCount;
  const filledBars = "=".repeat(actualFilledCount);
  const emptyBars = "-".repeat(emptyCount);

  return (
    <div className={`w-full ${className}`}>
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <span className={`font-mono ${sizeStyle.text} text-gray-400`}>
              {label}
            </span>
          )}
          {showPercentage && (
            <span className={`font-mono ${sizeStyle.text} text-gray-400`}>
              {Math.round(displayValue)}%
            </span>
          )}
        </div>
      )}
      <div className="font-mono text-gray-400 flex items-center">
        <span className="text-gray-600">[</span>
        <span className="text-gray-300">{filledBars}</span>
        {showSpinner && (
          <span className="inline-flex items-center text-gray-300">
            <Spinner />
          </span>
        )}
        <span className="text-gray-600">{emptyBars}</span>
        <span className="text-gray-600">]</span>
      </div>
    </div>
  );
}

