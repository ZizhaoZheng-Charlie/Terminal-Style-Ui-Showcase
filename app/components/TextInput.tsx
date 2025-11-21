"use client";

import { ChangeEvent, FocusEvent } from "react";

interface TextInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  type?: "text" | "email" | "password" | "url" | "tel" | "number";
  className?: string;
  disabled?: boolean;
  maxLength?: number;
  required?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

export default function TextInput({
  value = "",
  onChange,
  placeholder = "ENTER TEXT",
  label,
  type = "text",
  className = "",
  disabled = false,
  maxLength,
  required = false,
  onFocus,
  onBlur,
}: TextInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (onFocus) {
      onFocus();
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur();
    }
  };

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="block font-mono text-xs text-gray-500 uppercase mb-2 tracking-wider">
          {label}
          {required && <span className="text-amber-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-gray-800 pointer-events-none" />
        <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-gray-800 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-gray-800 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-gray-800 pointer-events-none" />
        
        <input
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          required={required}
          className={`
            w-full px-4 py-3 
            bg-black text-white 
            font-mono text-sm
            border border-gray-800
            placeholder:text-gray-700 placeholder:uppercase placeholder:text-xs
            focus:outline-none focus:border-gray-700 focus:bg-[#0a0a0a]
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-all duration-200
            ${disabled ? '' : 'hover:border-gray-700'}
          `}
        />
        
        {/* Character count */}
        {maxLength && value && (
          <div className="absolute bottom-1 right-3 text-xs font-mono text-gray-700">
            {value.length}/{maxLength}
          </div>
        )}
      </div>
    </div>
  );
}



