"use client";

import { useState, useEffect } from "react";

interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  placeholder?: string;
  className?: string;
  label?: string;
  minDate?: Date;
  maxDate?: Date;
  showTime?: boolean;
  use24Hour?: boolean;
}

export default function DatePicker({
  value,
  onChange,
  placeholder = "SELECT DATE",
  className = "",
  label,
  minDate,
  maxDate,
  showTime = false,
  use24Hour = false,
}: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(value || null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(
    value
      ? new Date(value.getFullYear(), value.getMonth(), 1)
      : new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  );
  const [hour, setHour] = useState(value ? value.getHours() : 12);
  const [minute, setMinute] = useState(value ? value.getMinutes() : 0);
  const [isPM, setIsPM] = useState(value ? value.getHours() >= 12 : true);

  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  useEffect(() => {
    if (value) {
      setSelectedDate(value);
      setCurrentMonth(new Date(value.getFullYear(), value.getMonth(), 1));
      setHour(value.getHours());
      setMinute(value.getMinutes());
      setIsPM(value.getHours() >= 12);
    }
  }, [value]);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (number | null)[] = [];

    // Add empty slots for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const handleDateSelect = (day: number) => {
    // Use hour directly as it's already stored in 24-hour format
    const newDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day,
      showTime ? hour : 0,
      showTime ? minute : 0
    );

    // Check if date is within allowed range
    if (minDate && newDate < minDate) return;
    if (maxDate && newDate > maxDate) return;

    setSelectedDate(newDate);
    if (!showTime) {
      onChange?.(newDate);
      setIsOpen(false);
    } else {
      onChange?.(newDate);
    }
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    if (showTime) {
      const hours = use24Hour
        ? String(date.getHours()).padStart(2, "0")
        : String(date.getHours() % 12 || 12).padStart(2, "0");
      const mins = String(date.getMinutes()).padStart(2, "0");
      const period = date.getHours() >= 12 ? "PM" : "AM";

      return use24Hour
        ? `${month}/${day}/${year} ${hours}:${mins}`
        : `${month}/${day}/${year} ${hours}:${mins} ${period}`;
    }

    return `${month}/${day}/${year}`;
  };

  const isDateDisabled = (day: number) => {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      day === selectedDate.getDate() &&
      currentMonth.getMonth() === selectedDate.getMonth() &&
      currentMonth.getFullYear() === selectedDate.getFullYear()
    );
  };

  const days = getDaysInMonth(currentMonth);

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="block font-mono text-sm text-gray-400 mb-2 uppercase tracking-wider">
          {label}
        </label>
      )}

      {/* Date Input Trigger */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative border border-gray-700/50 bg-[#0a0a0a] p-4 cursor-pointer hover:border-gray-600/50 transition-colors"
      >
        {/* Corner Brackets */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gray-500/40"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gray-500/40"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gray-500/40"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gray-500/40"></div>

        <div className="flex justify-between items-center">
          <span className="font-mono text-sm text-gray-300">
            {selectedDate ? formatDate(selectedDate) : placeholder}
          </span>
          <span className="font-mono text-xs text-gray-500">
            {isOpen ? "▲" : "▼"}
          </span>
        </div>
      </div>

      {/* Calendar Dropdown */}
      {isOpen && (
        <div className="absolute z-50 mt-2 w-full min-w-[320px] border border-gray-700/50 bg-[#0a0a0a] p-4 shadow-2xl">
          {/* Corner Brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gray-500/40"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gray-500/40"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gray-500/40"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gray-500/40"></div>

          {/* Month/Year Navigation */}
          <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-800">
            <button
              onClick={handlePreviousMonth}
              className="font-mono text-gray-400 hover:text-white transition-colors px-2 py-1"
            >
              ◀
            </button>
            <span className="font-mono text-sm text-gray-300 uppercase tracking-wider">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </span>
            <button
              onClick={handleNextMonth}
              className="font-mono text-gray-400 hover:text-white transition-colors px-2 py-1"
            >
              ▶
            </button>
          </div>

          {/* Day Names */}
          <div className="grid grid-cols-7 gap-0.5 mb-1">
            {dayNames.map((day) => (
              <div
                key={day}
                className="font-mono text-[10px] text-gray-500 text-center py-0.5"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => {
              if (day === null) {
                return <div key={`empty-${index}`} className="p-1.5"></div>;
              }

              const disabled = isDateDisabled(day);
              const today = isToday(day);
              const selected = isSelected(day);

              return (
                <button
                  key={day}
                  onClick={() => !disabled && handleDateSelect(day)}
                  disabled={disabled}
                  className={`
                    relative font-mono text-xs p-1.5 transition-all
                    ${
                      disabled
                        ? "text-gray-700 cursor-not-allowed"
                        : "text-gray-300 hover:bg-gray-900 cursor-pointer"
                    }
                    ${today ? "border border-gray-600" : ""}
                    ${
                      selected
                        ? "bg-gray-800 text-white border border-gray-500"
                        : ""
                    }
                  `}
                >
                  {day}
                  {selected && (
                    <>
                      <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-gray-400"></div>
                      <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-gray-400"></div>
                      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-gray-400"></div>
                      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-gray-400"></div>
                    </>
                  )}
                </button>
              );
            })}
          </div>

          {/* Time Selection */}
          {showTime && (
            <div className="mt-4 pt-4 border-t border-gray-800">
              <label className="font-mono text-xs text-gray-500 uppercase tracking-wider block mb-3">
                Select a time
              </label>
              <div className="flex items-center gap-2">
                {/* Hour Dropdown */}
                <select
                  value={use24Hour ? hour : hour % 12 || 12}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (use24Hour) {
                      setHour(val);
                    } else {
                      // Convert 12-hour to 24-hour
                      if (val === 12) {
                        setHour(isPM ? 12 : 0);
                      } else {
                        setHour(isPM ? val + 12 : val);
                      }
                    }
                    if (selectedDate) {
                      handleDateSelect(selectedDate.getDate());
                    }
                  }}
                  data-testid="hour-dropdown"
                  className="w-16 bg-[#050505] border border-gray-800 text-gray-300 font-mono text-sm px-2 py-1.5 text-center focus:outline-none focus:border-gray-600 cursor-pointer"
                >
                  {use24Hour
                    ? Array.from({ length: 24 }, (_, i) => (
                        <option key={i} value={i}>
                          {String(i).padStart(2, "0")}
                        </option>
                      ))
                    : Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                        <option key={h} value={h}>
                          {String(h).padStart(2, "0")}
                        </option>
                      ))}
                </select>

                <span className="font-mono text-gray-600">:</span>

                {/* Minute Dropdown */}
                <select
                  value={minute}
                  onChange={(e) => {
                    setMinute(parseInt(e.target.value));
                    if (selectedDate) {
                      handleDateSelect(selectedDate.getDate());
                    }
                  }}
                  className="w-16 bg-[#050505] border border-gray-800 text-gray-300 font-mono text-sm px-2 py-1.5 text-center focus:outline-none focus:border-gray-600 cursor-pointer"
                >
                  {Array.from({ length: 60 }, (_, i) => (
                    <option key={i} value={i}>
                      {String(i).padStart(2, "0")}
                    </option>
                  ))}
                </select>

                {/* AM/PM Selector */}
                {!use24Hour && (
                  <select
                    value={isPM ? "PM" : "AM"}
                    onChange={(e) => {
                      const newIsPM = e.target.value === "PM";
                      setIsPM(newIsPM);
                      // Update hour to reflect AM/PM change
                      const displayHour = hour % 12 || 12;
                      if (displayHour === 12) {
                        setHour(newIsPM ? 12 : 0);
                      } else {
                        setHour(newIsPM ? displayHour + 12 : displayHour);
                      }
                      if (selectedDate) {
                        handleDateSelect(selectedDate.getDate());
                      }
                    }}
                    className="bg-[#050505] border border-gray-800 text-gray-300 font-mono text-sm px-3 py-1.5 focus:outline-none focus:border-gray-600 cursor-pointer"
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                )}
              </div>
            </div>
          )}

          {/* Close Button */}
          <div className="mt-4 pt-3 border-t border-gray-800">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full font-mono text-xs text-gray-400 hover:text-white transition-colors py-2 border border-gray-800 hover:border-gray-700"
            >
              {showTime ? "APPLY" : "CLOSE"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
