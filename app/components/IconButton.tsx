"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";

interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  icon: ReactNode;
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "secondary" | "ghost";
  className?: string;
  tooltip?: string;
}

export default function IconButton({
  icon,
  label,
  size = "md",
  variant = "default",
  className = "",
  disabled = false,
  tooltip,
  ...props
}: IconButtonProps) {
  const sizeStyles = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const iconSizeStyles = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const variantStyles = {
    default:
      "bg-black border-gray-800 text-gray-300 hover:border-gray-700 hover:text-white",
    primary:
      "bg-gray-900 border-gray-700 text-white hover:bg-gray-800 hover:border-gray-600",
    secondary:
      "bg-black border-gray-700 text-gray-400 hover:border-gray-600 hover:text-gray-300",
    ghost:
      "bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-gray-900",
  };

  const baseStyles = `
    relative
    flex items-center justify-center
    border font-mono
    transition-colors
    group
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    ${className}
  `;

  return (
    <div className="relative inline-block">
      <button
        disabled={disabled}
        className={baseStyles}
        aria-label={label || tooltip}
        {...props}
      >
        <span
          className={`${iconSizeStyles[size]} flex items-center justify-center`}
        >
          {icon}
        </span>
      </button>

      {tooltip && !disabled && (
        <div
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50
          bg-gray-900 border border-gray-700 px-2 py-1 text-xs text-gray-300
          whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity
          before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2
          before:border-4 before:border-transparent before:border-t-gray-700"
        >
          {tooltip}
        </div>
      )}
    </div>
  );
}
