"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Button({
  children,
  size = "md",
  className = "",
  disabled = false,
  ...props
}: ButtonProps) {
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const baseStyles = `
    relative
    bg-black text-white 
    border border-gray-800 
    font-mono uppercase tracking-wider
    overflow-hidden
    group
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:border-gray-700"}
    ${sizeStyles[size]}
    ${className}
  `;

  return (
    <button
      disabled={disabled}
      className={baseStyles}
      {...props}
    >
      {/* Animated background that slides from left to right on hover */}
      {!disabled && (
        <span
          className="absolute inset-0 bg-gray-950 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"
          aria-hidden="true"
        />
      )}
      
      {/* Text content with relative z-index to stay above the animated background */}
      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
}

