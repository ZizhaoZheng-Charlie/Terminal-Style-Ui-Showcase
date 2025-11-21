"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";

interface TransitionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?: "default" | "primary" | "secondary";
}

export default function TransitionButton({
  children,
  size = "md",
  className = "",
  disabled = false,
  variant = "default",
  ...props
}: TransitionButtonProps) {
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantTextStyles = {
    default: "text-white",
    primary: "text-amber-500",
    secondary: "text-gray-300",
  };

  const baseStyles = `
    relative
    bg-black
    ${variantTextStyles[variant]}
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
      {/* Grey background that slides from left to right on hover */}
      {!disabled && (
        <span
          className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
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

