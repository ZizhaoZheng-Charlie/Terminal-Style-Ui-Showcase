"use client";

import { ChangeEvent, FocusEvent } from "react";

interface TextAreaProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
  disabled?: boolean;
  maxLength?: number;
  required?: boolean;
  rows?: number;
  onFocus?: () => void;
  onBlur?: () => void;
  resize?: boolean;
}

export default function TextArea({
  value = "",
  onChange,
  placeholder = "ENTER TEXT",
  label,
  className = "",
  disabled = false,
  maxLength,
  required = false,
  rows = 5,
  onFocus,
  onBlur,
  resize = false,
}: TextAreaProps) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleFocus = (e: FocusEvent<HTMLTextAreaElement>) => {
    if (onFocus) {
      onFocus();
    }
  };

  const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
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
        <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-gray-800 pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-gray-800 pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-gray-800 pointer-events-none z-10" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-gray-800 pointer-events-none z-10" />
        
        <textarea
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          required={required}
          rows={rows}
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
            ${resize ? 'resize-y' : 'resize-none'}
          `}
        />
        
        {/* Character count */}
        {maxLength && (
          <div className="absolute bottom-2 right-3 text-xs font-mono text-gray-700">
            {value.length}/{maxLength}
          </div>
        )}
      </div>
    </div>
  );
}



