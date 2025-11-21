"use client";

import { ReactNode } from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: "slash" | "arrow" | "chevron" | "pipe";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Breadcrumb({
  items,
  separator = "slash",
  size = "md",
  className = "",
}: BreadcrumbProps) {
  const separatorMap = {
    slash: "/",
    arrow: "→",
    chevron: ">",
    pipe: "|",
  };

  const separatorChar = separatorMap[separator];

  const sizeStyles = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const baseStyles = `font-mono flex items-center flex-wrap gap-2 ${sizeStyles[size]} ${className}`;

  return (
    <nav aria-label="Breadcrumb" className={baseStyles}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const isClickable = item.href || item.onClick;

        const itemStyles = `
          ${isLast ? "text-gray-300" : "text-gray-500"}
          ${
            isClickable && !isLast
              ? "hover:text-gray-300 transition-colors cursor-pointer"
              : ""
          }
          ${!isClickable ? "cursor-default" : ""}
        `;

        const content = (
          <>
            {item.href ? (
              <Link
                href={item.href}
                className={itemStyles}
                {...(item.onClick ? { onClick: item.onClick } : {})}
              >
                {item.label}
              </Link>
            ) : item.onClick ? (
              <button
                onClick={item.onClick}
                className={`${itemStyles} bg-transparent border-none p-0`}
              >
                {item.label}
              </button>
            ) : (
              <span className={itemStyles}>{item.label}</span>
            )}
          </>
        );

        return (
          <div key={index} className="flex items-center">
            {content}
            {!isLast && (
              <span className="text-gray-700 mx-2" aria-hidden="true">
                {separatorChar}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
