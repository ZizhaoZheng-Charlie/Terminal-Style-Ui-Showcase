"use client";

import { useState } from "react";
import Navigation from "../app/components/Navigation";
import BoxComponent from "../app/components/BoxComponent";
import DatePicker from "../app/components/DatePicker";
import Footer from "../app/components/Footer";

export default function DatePickerExample() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [eventDate, setEventDate] = useState<Date>(new Date());
  const [eventDateTime, setEventDateTime] = useState<Date>(new Date());
  const [meetingTime, setMeetingTime] = useState<Date>(new Date());

  const today = new Date();
  const oneMonthFromNow = new Date();
  oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Navigation />

      <div className="container mx-auto px-4 py-8 flex-1">
        <BoxComponent>
          <h1 className="text-4xl md:text-5xl font-mono mb-6 uppercase text-amber-500">
            DATE PICKER COMPONENT
          </h1>

          <p className="text-lg font-mono text-gray-400 mb-8 leading-relaxed">
            A terminal-inspired date picker component with optional time
            selection, customizable constraints, and clean aesthetics.
          </p>

          <div className="space-y-8">
            {/* Basic Date Picker */}
            <div>
              <h2 className="font-mono text-xl text-gray-300 mb-4 uppercase">
                Basic Date Selection
              </h2>
              <DatePicker
                label="Select Date"
                placeholder="CHOOSE A DATE"
                value={eventDate}
                onChange={setEventDate}
              />
              {eventDate && (
                <p className="font-mono text-sm text-gray-500 mt-2">
                  Selected: {eventDate.toLocaleDateString()}
                </p>
              )}
            </div>

            {/* Date & Time Picker (12-hour) */}
            <div className="pt-6 border-t border-gray-800">
              <h2 className="font-mono text-xl text-gray-300 mb-4 uppercase">
                Date & Time (12-Hour)
              </h2>
              <DatePicker
                label="Event Date & Time"
                placeholder="SELECT DATE & TIME"
                value={eventDateTime}
                onChange={setEventDateTime}
                showTime={true}
                use24Hour={false}
              />
              {eventDateTime && (
                <div className="mt-3 p-3 bg-[#050505] border border-gray-900">
                  <p className="font-mono text-xs text-gray-500">
                    {eventDateTime.toLocaleString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </p>
                </div>
              )}
            </div>

            {/* Date & Time Picker (24-hour) */}
            <div className="pt-6 border-t border-gray-800">
              <h2 className="font-mono text-xl text-gray-300 mb-4 uppercase">
                Date & Time (24-Hour)
              </h2>
              <DatePicker
                label="Meeting Time"
                placeholder="SELECT DATE & TIME"
                value={meetingTime}
                onChange={setMeetingTime}
                showTime={true}
                use24Hour={true}
              />
              {meetingTime && (
                <div className="mt-3 p-3 bg-[#050505] border border-gray-900">
                  <p className="font-mono text-xs text-gray-500">
                    {meetingTime.toLocaleString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    })}
                  </p>
                </div>
              )}
            </div>

            {/* Date Range Example */}
            <div className="pt-6 border-t border-gray-800">
              <h2 className="font-mono text-xl text-gray-300 mb-4 uppercase">
                Date Range
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <DatePicker
                    label="Start Date"
                    placeholder="SELECT START"
                    value={startDate || undefined}
                    onChange={setStartDate}
                    maxDate={endDate || undefined}
                  />
                </div>
                <div>
                  <DatePicker
                    label="End Date"
                    placeholder="SELECT END"
                    value={endDate || undefined}
                    onChange={setEndDate}
                    minDate={startDate || undefined}
                  />
                </div>
              </div>
              {startDate && endDate && (
                <div className="mt-4 p-4 border border-gray-800 bg-[#050505]">
                  <p className="font-mono text-sm text-gray-400">
                    Range: {startDate.toLocaleDateString()} →{" "}
                    {endDate.toLocaleDateString()}
                  </p>
                  <p className="font-mono text-xs text-gray-600 mt-1">
                    Duration:{" "}
                    {Math.ceil(
                      (endDate.getTime() - startDate.getTime()) /
                        (1000 * 60 * 60 * 24)
                    )}{" "}
                    days
                  </p>
                </div>
              )}
            </div>

            {/* Constrained Date Picker */}
            <div className="pt-6 border-t border-gray-800">
              <h2 className="font-mono text-xl text-gray-300 mb-4 uppercase">
                With Constraints
              </h2>
              <DatePicker
                label="Event Date (Next 30 Days)"
                placeholder="SELECT WITHIN RANGE"
                minDate={today}
                maxDate={oneMonthFromNow}
              />
              <p className="font-mono text-xs text-gray-600 mt-2">
                This picker only allows dates between today and one month from
                now.
              </p>
            </div>

            {/* Features List */}
            <div className="pt-6 border-t border-gray-800">
              <h2 className="font-mono text-xl text-gray-300 mb-4 uppercase">
                Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-mono text-sm text-amber-500 mb-3 uppercase">
                    Date Features
                  </h3>
                  <ul className="font-mono text-sm text-gray-500 space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Terminal-inspired design with corner brackets</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Min/max date constraints</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Today indicator and selected state</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Month/year navigation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Responsive and mobile-friendly</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-sm text-amber-500 mb-3 uppercase">
                    Time Features (Optional)
                  </h3>
                  <ul className="font-mono text-sm text-gray-500 space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Hour and minute selection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>12-hour (AM/PM) or 24-hour format</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Clean inline time inputs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Real-time date/time updates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </BoxComponent>

        {/* Code Example */}
        <BoxComponent className="mt-8">
          <h2 className="font-mono text-2xl text-gray-300 mb-4 uppercase">
            Usage Example
          </h2>
          <div className="bg-[#050505] p-6 border border-gray-900 overflow-x-auto">
            <pre className="font-mono text-xs text-gray-500">
              {`import DatePicker from "./components/DatePicker";
import { useState } from "react";

const [date, setDate] = useState<Date>(new Date());

// Date only
<DatePicker
  label="Select Date"
  value={date}
  onChange={setDate}
  minDate={new Date()}
  maxDate={futureDate}
/>

// Date with time (12-hour)
<DatePicker
  label="Select Date & Time"
  value={date}
  onChange={setDate}
  showTime={true}
  use24Hour={false}
/>

// Date with time (24-hour)
<DatePicker
  label="Select Date & Time"
  value={date}
  onChange={setDate}
  showTime={true}
  use24Hour={true}
/>`}
            </pre>
          </div>
        </BoxComponent>
      </div>

      <Footer />
    </main>
  );
}
