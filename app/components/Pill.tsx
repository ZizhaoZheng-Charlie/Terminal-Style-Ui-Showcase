"use client";

import { ReactNode } from "react";

export type PillVariant = 
  | "default" 
  | "success" 
  | "warning" 
  | "error" 
  | "info"
  | "gray";

interface PillProps {
  children: ReactNode;
  variant?: PillVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export default function Pill({
  children,
  variant = "default",
  size = "md",
  className = "",
  onClick,
}: PillProps) {
  const baseStyles = "font-mono border inline-flex items-center";
  
  const variantStyles = {
    default: "bg-gray-900 text-gray-300 border-gray-800",
    success: "bg-green-500/10 text-green-500 border-green-500/30",
    warning: "bg-amber-500/10 text-amber-500 border-amber-500/30",
    error: "bg-red-500/10 text-red-500 border-red-500/30",
    info: "bg-blue-500/10 text-blue-500 border-blue-500/30",
    gray: "bg-gray-500/10 text-gray-500 border-gray-500/30",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-xs",
    lg: "px-4 py-1.5 text-sm",
  };

  const interactiveStyles = onClick
    ? "cursor-pointer hover:opacity-80 transition-opacity"
    : "";

  return (
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${interactiveStyles} ${className} rounded-full`}
      onClick={onClick}
    >
      {children}
    </span>
  );
}



