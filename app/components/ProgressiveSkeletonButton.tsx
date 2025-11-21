"use client";

import { useState, useEffect, ReactNode } from "react";
import ProgressBar from "./ProgressBar";
import Button from "./Button";

interface ProgressiveSkeletonButtonProps {
  children: ReactNode;
  onClick?: () => void;
  onProgressComplete?: () => void;
  duration?: number; // Duration in milliseconds
  autoStart?: boolean;
  disabled?: boolean;
  className?: string;
  showProgressBar?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function ProgressiveSkeletonButton({
  children,
  onClick,
  onProgressComplete,
  duration = 2000,
  autoStart = false,
  disabled = false,
  className = "",
  showProgressBar = true,
  size = "md",
}: ProgressiveSkeletonButtonProps) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (autoStart && !isLoading && !isComplete) {
      startProgress();
    }
  }, [autoStart]);

  const startProgress = () => {
    if (disabled || isLoading) return;
    
    setIsLoading(true);
    setProgress(0);
    setIsComplete(false);

    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(currentProgress);

      if (currentProgress < 100) {
        requestAnimationFrame(animate);
      } else {
        setIsLoading(false);
        setIsComplete(true);
        if (onProgressComplete) {
          onProgressComplete();
        }
      }
    };

    requestAnimationFrame(animate);
  };

  const handleClick = () => {
    if (disabled) return;
    
    if (!isLoading && !isComplete) {
      startProgress();
    }
    
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="w-full">
      {showProgressBar && (isLoading || isComplete) && (
        <div className="mb-2">
          <ProgressBar 
            value={progress} 
            label={isComplete ? "Complete" : "Loading"} 
            showPercentage={false}
            size="sm"
          />
        </div>
      )}
      <Button
        onClick={handleClick}
        disabled={disabled || isLoading}
        size={size}
        className={className}
      >
        <span className="relative z-10">
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span>Loading...</span>
            </span>
          ) : isComplete ? (
            <span>Complete</span>
          ) : (
            children
          )}
        </span>
        
        {/* Skeleton overlay when loading */}
        {isLoading && (
          <div className="absolute inset-0 bg-gray-900/50 animate-pulse" />
        )}
      </Button>
    </div>
  );
}

