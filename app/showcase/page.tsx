"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import Section from "../components/Section";
import HexDisplay from "../components/HexDisplay";
import SecurityAudit from "../components/SecurityAudit";
import BlogPost from "../components/BlogPost";
import TerminalModal from "../components/TerminalModal";
import TerminalModalSection from "../components/TerminalModalSection";
import ScrambleText from "../components/ScrambleText";
import DatePicker from "../components/DatePicker";
import DataTable from "../components/DataTable";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import Pill from "../components/Pill";
import ProgressBar from "../components/ProgressBar";
import ProgressiveSkeletonButton from "../components/ProgressiveSkeletonButton";
import TransitionButton from "../components/TransitionButton";
import Tabs, { TabItem } from "../components/Tabs";
import Breadcrumb from "../components/Breadcrumb";
import CodeSnippet from "../components/CodeSnippet";
import IconButton from "../components/IconButton";
import IconContentSwitcher, {
  IconContentItem,
} from "../components/IconContentSwitcher";
import {
  securityHexStrings,
  audits,
  userData,
  userColumns,
  tableHexStrings,
  User,
} from "../constant";

export default function ShowcasePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [dateTimeSimple, setDateTimeSimple] = useState<Date>(new Date());
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [progress1, setProgress1] = useState(45);
  const [progress2, setProgress2] = useState(75);
  const [progress3, setProgress3] = useState(30);

  // Generate static data for pagination (no random to avoid hydration issues)
  const paginationData: User[] = Array.from({ length: 25 }, (_, i) => {
    const roles = ["Admin", "User", "Developer", "Analyst", "Validator"];
    const statuses: ("active" | "inactive" | "pending")[] = [
      "active",
      "inactive",
      "pending",
    ];
    return {
      id: i + 1,
      username: `user_${String(i + 1).padStart(3, "0")}`,
      email: `user${i + 1}@example.com`,
      role: roles[i % roles.length],
      status: statuses[i % statuses.length],
      lastLogin: `2024-11-${String((i % 20) + 1).padStart(2, "0")}`,
    };
  });

  return (
    <main className="min-h-screen bg-background text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="font-mono text-4xl mb-4">Component Showcase</h1>
          <p className="font-mono text-gray-400">
            All available UI components in the terminal aesthetic style
          </p>
        </div>

        {/* HexDisplay Component */}
        <Section title="HexDisplay Component" defaultExpanded={true}>
          <div className="mb-4">
            <p className="font-mono text-sm text-gray-400 mb-4">
              Displays hex code strings in terminal/code aesthetic
            </p>
            <HexDisplay strings={securityHexStrings} />
          </div>
        </Section>

        {/* ScrambleText Component */}
        <Section title="ScrambleText Animation" defaultExpanded={true}>
          <div className="mb-4">
            <p className="font-mono text-sm text-gray-400 mb-4">
              Text animation that randomizes letters before revealing the actual
              content
            </p>
            <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
              <ScrambleText
                text="Cryptographic Security Solutions"
                className="font-mono text-2xl text-amber-500"
              />
              <div className="mt-4">
                <ScrambleText
                  text="Self-custody wallets with institutional-grade protection"
                  className="font-mono text-sm text-gray-400"
                  delay={500}
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Terminal Modal Component */}
        <Section title="Terminal Modal" defaultExpanded={true}>
          <div className="mb-4">
            <p className="font-mono text-sm text-gray-400 mb-4">
              Full-screen modal with terminal aesthetic, perfect for detailed
              content
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-black text-white border border-gray-900 font-mono text-sm uppercase tracking-wider hover:bg-gray-950 hover:border-gray-800 transition-colors"
            >
              Open Terminal Modal
            </button>
          </div>
        </Section>

        {/* SecurityAudit Component */}
        <Section title="SecurityAudit Component" defaultExpanded={true}>
          <div className="mb-4">
            <p className="font-mono text-sm text-gray-400 mb-4">
              Displays security audit information with scramble text animation
            </p>
            <SecurityAudit audits={audits} />
          </div>
        </Section>

        {/* BlogPost Component */}
        <Section title="BlogPost Component" defaultExpanded={true}>
          <div className="mb-4">
            <p className="font-mono text-sm text-gray-400 mb-4">
              Blog post entries with date and title
            </p>
            <div className="space-y-4">
              <BlogPost
                date="October 9, 2025"
                title="Berachain Operators - Stay Frosty"
                isPopular={true}
              />
              <BlogPost
                date="September 15, 2025"
                title="Advanced Cryptography in Self-Custody"
                isPopular={false}
              />
            </div>
          </div>
        </Section>

        {/* DataTable Component */}
        <Section title="DataTable Component" defaultExpanded={true}>
          <div className="mb-4">
            <p className="font-mono text-sm text-gray-400 mb-4">
              Terminal-style data table with sorting, pagination, and custom
              cell rendering
            </p>

            <div className="space-y-6">
              {/* Basic Table */}
              <div>
                <h3 className="font-mono text-sm text-gray-300 mb-3 uppercase">
                  Basic Table (Drag Columns to Reorder)
                </h3>
                <p className="font-mono text-xs text-gray-500 mb-3">
                  Click and drag column headers to reorder them. Click headers
                  to sort.
                </p>
                <DataTable
                  columns={userColumns}
                  data={userData}
                  showRowNumbers={true}
                  enableColumnReorder={true}
                />
              </div>

              {/* Table with Hex Display */}
              <div>
                <h3 className="font-mono text-sm text-gray-300 mb-3 uppercase">
                  With Hex Display
                </h3>
                <DataTable
                  columns={userColumns}
                  data={userData}
                  hexStrings={tableHexStrings}
                  showRowNumbers={true}
                />
              </div>

              {/* Table with Pagination */}
              <div>
                <h3 className="font-mono text-sm text-gray-300 mb-3 uppercase">
                  With Pagination
                </h3>
                <DataTable
                  columns={userColumns}
                  data={paginationData}
                  showRowNumbers={true}
                  enablePagination={true}
                  rowsPerPage={8}
                />
              </div>

              {/* Features */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-3 uppercase">
                  Features
                </h3>
                <ul className="font-mono text-xs text-gray-500 space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Corner brackets and terminal aesthetic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Drag-and-drop column reordering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Sortable columns with visual indicators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Custom cell rendering with TypeScript support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Optional pagination with page controls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Row numbers and column alignment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Hover effects and responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Optional hex display header</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* TextInput & TextArea Components */}
        <Section title="TextInput & TextArea Components" defaultExpanded={true}>
          <div className="mb-4">
            <p className="font-mono text-sm text-gray-400 mb-4">
              Terminal-inspired text input and textarea with corner brackets and
              character limits
            </p>

            <div className="space-y-6">
              {/* Text Inputs */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Text Inputs
                </h3>
                <div className="space-y-4">
                  <TextInput
                    label="Username"
                    placeholder="Enter username"
                    value={username}
                    onChange={setUsername}
                    required
                  />
                  <TextInput
                    type="email"
                    label="Email Address"
                    placeholder="your@email.com"
                    value={email}
                    onChange={setEmail}
                  />
                  <TextInput
                    label="Limited Input (Max 30)"
                    placeholder="Max 30 characters"
                    maxLength={30}
                  />
                </div>
              </div>

              {/* TextArea */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  TextArea
                </h3>
                <div className="space-y-4">
                  <TextArea
                    label="Message"
                    placeholder="Enter your message"
                    value={message}
                    onChange={setMessage}
                    rows={4}
                  />
                  <TextArea
                    label="Limited TextArea (Max 150)"
                    placeholder="Max 150 characters"
                    maxLength={150}
                    rows={5}
                  />
                </div>
              </div>

              {/* States */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  States
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Normal State
                    </p>
                    <TextInput placeholder="Normal input" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Disabled State
                    </p>
                    <TextInput
                      placeholder="Disabled"
                      value="Cannot edit"
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      With Value
                    </p>
                    <TextInput value="Filled input field" />
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-3 uppercase">
                  Features
                </h3>
                <ul className="font-mono text-xs text-gray-500 space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Corner brackets and terminal aesthetic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>
                      Multiple input types (text, email, password, tel, url,
                      number)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Character limit with live counter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Required field indicators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Disabled and hover states</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>
                      TextArea with configurable rows and optional resizing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Focus states with border color changes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* DatePicker Component */}
        <Section title="DatePicker Component" defaultExpanded={true}>
          <div className="mb-4">
            <p className="font-mono text-sm text-gray-400 mb-4">
              Terminal-inspired date picker with min/max constraints and range
              selection
            </p>

            <div className="space-y-6">
              {/* Single Date Picker */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Single Date Selection
                </h3>
                <DatePicker
                  label="Event Date"
                  placeholder="SELECT DATE"
                  value={selectedDate}
                  onChange={setSelectedDate}
                />
                {selectedDate && (
                  <p className="font-mono text-xs text-gray-500 mt-3">
                    Selected:{" "}
                    {selectedDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}
              </div>

              {/* Date & Time Picker */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Date & Time Selection
                </h3>
                <DatePicker
                  label="Event Date & Time"
                  placeholder="SELECT DATE & TIME"
                  value={dateTimeSimple}
                  onChange={setDateTimeSimple}
                  showTime={true}
                  use24Hour={false}
                />
                {dateTimeSimple && (
                  <p className="font-mono text-xs text-gray-500 mt-3">
                    Selected:{" "}
                    {dateTimeSimple.toLocaleString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </p>
                )}
              </div>

              {/* Date Range Picker */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Date Range Selection
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <DatePicker
                    label="Start Date"
                    placeholder="SELECT START"
                    value={startDate || undefined}
                    onChange={setStartDate}
                    maxDate={endDate || undefined}
                  />
                  <DatePicker
                    label="End Date"
                    placeholder="SELECT END"
                    value={endDate || undefined}
                    onChange={setEndDate}
                    minDate={startDate || undefined}
                  />
                </div>
                {startDate && endDate && (
                  <div className="mt-4 p-3 border border-gray-900 bg-black">
                    <p className="font-mono text-xs text-gray-400">
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

              {/* Features */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-3 uppercase">
                  Features
                </h3>
                <ul className="font-mono text-xs text-gray-500 space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Corner brackets and terminal aesthetic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Optional time selection (hh:mm with AM/PM)</span>
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
                    <span>24-hour or 12-hour time format</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Month/year navigation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Pill Component */}
        <Section title="Pill Component" defaultExpanded={true}>
          <div className="mb-4">
            <p className="font-mono text-sm text-gray-400 mb-4">
              Pill-style tags with terminal aesthetic, multiple variants and
              sizes
            </p>

            <div className="space-y-6">
              {/* Variants */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Variants
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Pill variant="default">Default</Pill>
                  <Pill variant="success">Success</Pill>
                  <Pill variant="warning">Warning</Pill>
                  <Pill variant="error">Error</Pill>
                  <Pill variant="info">Info</Pill>
                  <Pill variant="gray">Gray</Pill>
                </div>
              </div>

              {/* Sizes */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Sizes
                </h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Pill size="sm">Small</Pill>
                  <Pill size="md">Medium</Pill>
                  <Pill size="lg">Large</Pill>
                </div>
              </div>

              {/* Use Cases */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Use Cases
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Status Tags
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Pill variant="success">Active</Pill>
                      <Pill variant="gray">Inactive</Pill>
                      <Pill variant="warning">Pending</Pill>
                      <Pill variant="error">Failed</Pill>
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Categories
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Pill variant="default">Security</Pill>
                      <Pill variant="default">Crypto</Pill>
                      <Pill variant="default">Blockchain</Pill>
                      <Pill variant="default">Wallet</Pill>
                      <Pill variant="default">Staking</Pill>
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Interactive Tags
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Pill
                        variant="info"
                        onClick={() => alert("Tag clicked!")}
                      >
                        Clickable Tag
                      </Pill>
                      <Pill
                        variant="warning"
                        onClick={() => alert("Warning tag!")}
                      >
                        Warning Tag
                      </Pill>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-3 uppercase">
                  Features
                </h3>
                <ul className="font-mono text-xs text-gray-500 space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Terminal aesthetic with monospace font</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>
                      Multiple variants (default, success, warning, error, info,
                      gray)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Three sizes (sm, md, lg)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Rounded pill shape with borders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Optional click handler for interactive tags</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Hover effects on interactive tags</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Consistent with showcase design system</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ProgressBar Component */}
        <Section title="ProgressBar Component" defaultExpanded={true}>
          <div className="mb-4">
            <p className="font-mono text-sm text-gray-400 mb-4">
              Terminal-inspired ASCII-style progress bars with [========] format
            </p>

            <div className="space-y-6">
              {/* Basic Examples */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Basic Examples
                </h3>
                <div className="space-y-4">
                  <ProgressBar value={25} label="Progress" />
                  <ProgressBar value={50} label="Progress" />
                  <ProgressBar value={75} label="Progress" />
                  <ProgressBar value={100} label="Progress" />
                </div>
              </div>

              {/* Sizes */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Sizes
                </h3>
                <div className="space-y-4">
                  <ProgressBar value={60} size="sm" label="Small" />
                  <ProgressBar value={60} size="md" label="Medium" />
                  <ProgressBar value={60} size="lg" label="Large" />
                </div>
              </div>

              {/* Interactive Examples */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Interactive Examples
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex gap-2 mb-2">
                      <button
                        onClick={() =>
                          setProgress1(Math.max(0, progress1 - 10))
                        }
                        className="px-3 py-1 bg-black text-white border border-gray-800 font-mono text-xs hover:bg-gray-950 transition-colors"
                      >
                        -
                      </button>
                      <button
                        onClick={() =>
                          setProgress1(Math.min(100, progress1 + 10))
                        }
                        className="px-3 py-1 bg-black text-white border border-gray-800 font-mono text-xs hover:bg-gray-950 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <ProgressBar
                      value={progress1}
                      label="Adjustable Progress"
                    />
                  </div>
                  <div>
                    <div className="flex gap-2 mb-2">
                      <button
                        onClick={() =>
                          setProgress2(Math.max(0, progress2 - 10))
                        }
                        className="px-3 py-1 bg-black text-white border border-gray-800 font-mono text-xs hover:bg-gray-950 transition-colors"
                      >
                        -
                      </button>
                      <button
                        onClick={() =>
                          setProgress2(Math.min(100, progress2 + 10))
                        }
                        className="px-3 py-1 bg-black text-white border border-gray-800 font-mono text-xs hover:bg-gray-950 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <ProgressBar value={progress2} label="Upload Progress" />
                  </div>
                  <div>
                    <div className="flex gap-2 mb-2">
                      <button
                        onClick={() =>
                          setProgress3(Math.max(0, progress3 - 10))
                        }
                        className="px-3 py-1 bg-black text-white border border-gray-800 font-mono text-xs hover:bg-gray-950 transition-colors"
                      >
                        -
                      </button>
                      <button
                        onClick={() =>
                          setProgress3(Math.min(100, progress3 + 10))
                        }
                        className="px-3 py-1 bg-black text-white border border-gray-800 font-mono text-xs hover:bg-gray-950 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <ProgressBar value={progress3} label="Processing" />
                  </div>
                </div>
              </div>

              {/* Options */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Options
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      With Label Only
                    </p>
                    <ProgressBar
                      value={75}
                      label="Progress"
                      showPercentage={false}
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      With Percentage Only
                    </p>
                    <ProgressBar value={50} showPercentage={true} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      No Label, No Percentage
                    </p>
                    <ProgressBar value={85} showPercentage={false} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Non-Animated
                    </p>
                    <ProgressBar
                      value={70}
                      label="Static Progress"
                      animated={false}
                    />
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Use Cases
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      File Upload
                    </p>
                    <ProgressBar value={67} label="uploading_file.zip" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      System Health
                    </p>
                    <ProgressBar value={92} label="System Health" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Storage Usage
                    </p>
                    <ProgressBar value={78} label="Storage Usage" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Task Completion
                    </p>
                    <ProgressBar value={100} label="Task Complete" />
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-3 uppercase">
                  Features
                </h3>
                <ul className="font-mono text-xs text-gray-500 space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>
                      ASCII-style terminal aesthetic with [========] format
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Grey color scheme matching terminal aesthetic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>
                      Three sizes (sm, md, lg) for different text sizes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Smooth animated transitions with easing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Optional label and percentage display</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>20-character bar width for consistent display</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Value clamping (0-100) for safety</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Monospace font for authentic terminal look</span>
                  </li>
                </ul>
              </div>

              {/* Skeleton Page Demo */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Progressive Skeleton Screen Demo
                </h3>
                <p className="font-mono text-xs text-gray-500 mb-4">
                  See the ProgressBar component in action with a full
                  progressive skeleton screen demonstration
                </p>
                <a
                  href="/skeleton"
                  className="inline-block px-6 py-3 bg-black text-white border border-gray-800 font-mono text-sm uppercase tracking-wider hover:bg-gray-950 hover:border-gray-700 transition-colors"
                >
                  View Skeleton Page
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* ProgressiveSkeletonButton Component */}
        <Section
          title="ProgressiveSkeletonButton Component"
          defaultExpanded={true}
        >
          <div className="mb-4">
            <p className="font-mono text-sm text-gray-400 mb-4">
              Button component with integrated progress bar and skeleton loading
              states
            </p>

            <div className="space-y-6">
              {/* Basic Examples */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Basic Examples
                </h3>
                <div className="space-y-4">
                  <ProgressiveSkeletonButton
                    onClick={() => console.log("Button clicked")}
                    duration={2000}
                  >
                    Click to Load
                  </ProgressiveSkeletonButton>

                  <ProgressiveSkeletonButton
                    onClick={() => console.log("Button clicked")}
                    duration={3000}
                    onProgressComplete={() => alert("Progress complete!")}
                  >
                    Load with Callback
                  </ProgressiveSkeletonButton>
                </div>
              </div>

              {/* Sizes */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Sizes
                </h3>
                <div className="space-y-4">
                  <ProgressiveSkeletonButton size="sm" duration={2000}>
                    Small Button
                  </ProgressiveSkeletonButton>
                  <ProgressiveSkeletonButton size="md" duration={2000}>
                    Medium Button
                  </ProgressiveSkeletonButton>
                  <ProgressiveSkeletonButton size="lg" duration={2000}>
                    Large Button
                  </ProgressiveSkeletonButton>
                </div>
              </div>

              {/* Auto Start */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Auto Start
                </h3>
                <p className="font-mono text-xs text-gray-500 mb-4">
                  Buttons that automatically start loading when mounted
                </p>
                <div className="space-y-4">
                  <ProgressiveSkeletonButton
                    autoStart={true}
                    duration={2500}
                    onProgressComplete={() =>
                      console.log("Auto-start complete")
                    }
                  >
                    Auto Start Button
                  </ProgressiveSkeletonButton>
                </div>
              </div>

              {/* Without Progress Bar */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Without Progress Bar
                </h3>
                <p className="font-mono text-xs text-gray-500 mb-4">
                  Button with skeleton loading but no visible progress bar
                </p>
                <div className="space-y-4">
                  <ProgressiveSkeletonButton
                    showProgressBar={false}
                    duration={2000}
                  >
                    Hidden Progress Bar
                  </ProgressiveSkeletonButton>
                </div>
              </div>

              {/* Disabled State */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  States
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Normal State
                    </p>
                    <ProgressiveSkeletonButton duration={2000}>
                      Normal Button
                    </ProgressiveSkeletonButton>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Disabled State
                    </p>
                    <ProgressiveSkeletonButton disabled={true} duration={2000}>
                      Disabled Button
                    </ProgressiveSkeletonButton>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Use Cases
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      File Upload
                    </p>
                    <ProgressiveSkeletonButton
                      duration={3000}
                      onProgressComplete={() =>
                        alert("File uploaded successfully!")
                      }
                    >
                      Upload File
                    </ProgressiveSkeletonButton>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Data Processing
                    </p>
                    <ProgressiveSkeletonButton
                      duration={4000}
                      onProgressComplete={() => alert("Processing complete!")}
                    >
                      Process Data
                    </ProgressiveSkeletonButton>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Form Submission
                    </p>
                    <ProgressiveSkeletonButton
                      duration={2000}
                      onProgressComplete={() => alert("Form submitted!")}
                    >
                      Submit Form
                    </ProgressiveSkeletonButton>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-3 uppercase">
                  Features
                </h3>
                <ul className="font-mono text-xs text-gray-500 space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>
                      Integrated ProgressBar component showing loading progress
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Terminal aesthetic matching the design system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Three sizes (sm, md, lg)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Configurable duration for progress animation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Optional auto-start for automatic loading</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Progress complete callback support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Optional progress bar visibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Skeleton overlay during loading state</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Disabled state support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* TransitionButton Component */}
        <Section title="TransitionButton Component" defaultExpanded={true}>
          <div className="mb-4">
            <p className="font-mono text-sm text-gray-400 mb-4">
              Button component with smooth left-to-right background transition
              that doesn't affect the text
            </p>

            <div className="space-y-6">
              {/* Basic Examples */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Basic Examples
                </h3>
                <div className="space-y-4">
                  <TransitionButton
                    onClick={() => console.log("Button clicked")}
                  >
                    Hover to See Transition
                  </TransitionButton>

                  <TransitionButton
                    variant="primary"
                    onClick={() => console.log("Primary clicked")}
                  >
                    Primary Variant
                  </TransitionButton>

                  <TransitionButton
                    variant="secondary"
                    onClick={() => console.log("Secondary clicked")}
                  >
                    Secondary Variant
                  </TransitionButton>
                </div>
              </div>

              {/* Sizes */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Sizes
                </h3>
                <div className="space-y-4">
                  <TransitionButton size="sm">Small Button</TransitionButton>
                  <TransitionButton size="md">Medium Button</TransitionButton>
                  <TransitionButton size="lg">Large Button</TransitionButton>
                </div>
              </div>

              {/* Variants */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Variants
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Default
                    </p>
                    <TransitionButton variant="default">
                      Default Button
                    </TransitionButton>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Primary
                    </p>
                    <TransitionButton variant="primary">
                      Primary Button
                    </TransitionButton>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Secondary
                    </p>
                    <TransitionButton variant="secondary">
                      Secondary Button
                    </TransitionButton>
                  </div>
                </div>
              </div>

              {/* States */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  States
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Normal State
                    </p>
                    <TransitionButton>Normal Button</TransitionButton>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Disabled State
                    </p>
                    <TransitionButton disabled={true}>
                      Disabled Button
                    </TransitionButton>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Use Cases
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Action Button
                    </p>
                    <TransitionButton
                      variant="primary"
                      onClick={() => alert("Action executed!")}
                    >
                      Execute Action
                    </TransitionButton>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Submit Button
                    </p>
                    <TransitionButton
                      variant="default"
                      onClick={() => alert("Form submitted!")}
                    >
                      Submit Form
                    </TransitionButton>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Cancel Button
                    </p>
                    <TransitionButton
                      variant="secondary"
                      onClick={() => alert("Action cancelled!")}
                    >
                      Cancel
                    </TransitionButton>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-3 uppercase">
                  Features
                </h3>
                <ul className="font-mono text-xs text-gray-500 space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>
                      Smooth left-to-right background transition on hover
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Text remains unaffected by background animation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Terminal aesthetic matching the design system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Three sizes (sm, md, lg)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Three variants (default, primary, secondary)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Disabled state support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>500ms smooth transition duration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Tabs Component */}
        <Section title="Tabs Component" defaultExpanded={true}>
          <div className="mb-4">
            <p className="font-mono text-sm text-gray-400 mb-4">
              Tab component with tooltips and optional help button (hover for
              tooltip, click for popover)
            </p>

            <div className="space-y-6">
              {/* Basic Tabs with Help */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Tabs with Help Button
                </h3>
                <Tabs
                  items={[
                    {
                      id: "overview",
                      label: "Overview",
                      content: (
                        <div className="space-y-4">
                          <h4 className="text-lg font-mono mb-2">
                            Overview Content
                          </h4>
                          <p className="text-gray-400 font-mono text-sm">
                            This is the overview tab. Hover over the tabs to see
                            tooltips.
                          </p>
                          <div className="border-l-2 border-gray-800 pl-4">
                            <p className="text-sm text-gray-500 font-mono">
                              ├─ System Status: Active
                            </p>
                            <p className="text-sm text-gray-500 font-mono">
                              ├─ Last Updated: 2024-11-21
                            </p>
                          </div>
                        </div>
                      ),
                      tooltip: "View general system information",
                    },
                    {
                      id: "settings",
                      label: "Settings",
                      content: (
                        <div className="space-y-4">
                          <h4 className="text-lg font-mono mb-2">
                            Settings Content
                          </h4>
                          <p className="text-gray-400 font-mono text-sm">
                            Configure your system settings here.
                          </p>
                          <div className="space-y-2">
                            <label className="block text-sm font-mono text-gray-400">
                              Theme:
                            </label>
                            <select className="bg-black border border-gray-800 px-4 py-2 text-sm font-mono text-white">
                              <option>Dark</option>
                              <option>Light</option>
                            </select>
                          </div>
                        </div>
                      ),
                      tooltip: "Configure system settings",
                    },
                    {
                      id: "analytics",
                      label: "Analytics",
                      content: (
                        <div className="space-y-4">
                          <h4 className="text-lg font-mono mb-2">
                            Analytics Content
                          </h4>
                          <p className="text-gray-400 font-mono text-sm">
                            View detailed analytics and metrics.
                          </p>
                          <div className="grid grid-cols-3 gap-4 mt-4">
                            <div className="border border-gray-800 p-4">
                              <p className="text-xs text-gray-500 font-mono mb-2">
                                TOTAL
                              </p>
                              <p className="text-2xl font-mono">1,234</p>
                            </div>
                            <div className="border border-gray-800 p-4">
                              <p className="text-xs text-gray-500 font-mono mb-2">
                                ACTIVE
                              </p>
                              <p className="text-2xl font-mono">567</p>
                            </div>
                            <div className="border border-gray-800 p-4">
                              <p className="text-xs text-gray-500 font-mono mb-2">
                                PENDING
                              </p>
                              <p className="text-2xl font-mono">89</p>
                            </div>
                          </div>
                        </div>
                      ),
                      tooltip: "View analytics and metrics",
                    },
                    {
                      id: "disabled",
                      label: "Disabled",
                      content: (
                        <div className="font-mono text-sm text-gray-500">
                          This tab is disabled
                        </div>
                      ),
                      tooltip: "This tab is currently disabled",
                      disabled: true,
                    },
                  ]}
                  defaultActiveTab="overview"
                  helpContent={
                    <div className="space-y-2">
                      <p className="font-mono text-xs">
                        Use the tabs above to navigate between different
                        sections.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-400 font-mono text-xs">
                        <li>Hover over tabs to see tooltips</li>
                        <li>Click on tabs to switch content</li>
                        <li>Disabled tabs cannot be selected</li>
                        <li>Click the help button for more information</li>
                      </ul>
                    </div>
                  }
                  helpTooltip="Click for help or hover for quick info"
                  helpPopoverTitle="Tab Navigation Help"
                  onTabChange={(tabId) => {
                    console.log("Tab changed to:", tabId);
                  }}
                />
              </div>

              {/* Tabs without Help */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Tabs without Help Button
                </h3>
                <Tabs
                  items={[
                    {
                      id: "tab1",
                      label: "Tab One",
                      content: (
                        <div className="font-mono text-sm text-gray-400">
                          Content for Tab One
                        </div>
                      ),
                      tooltip: "First tab with tooltip",
                    },
                    {
                      id: "tab2",
                      label: "Tab Two",
                      content: (
                        <div className="font-mono text-sm text-gray-400">
                          Content for Tab Two
                        </div>
                      ),
                      tooltip: "Second tab with tooltip",
                    },
                    {
                      id: "tab3",
                      label: "Tab Three",
                      content: (
                        <div className="font-mono text-sm text-gray-400">
                          Content for Tab Three
                        </div>
                      ),
                    },
                  ]}
                  defaultActiveTab="tab1"
                />
              </div>

              {/* Tabs with Only Tooltips */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Tabs with Tooltips Only
                </h3>
                <Tabs
                  items={[
                    {
                      id: "docs",
                      label: "Documentation",
                      content: (
                        <div className="font-mono text-sm text-gray-400">
                          Documentation content here
                        </div>
                      ),
                      tooltip: "View documentation and guides",
                    },
                    {
                      id: "api",
                      label: "API",
                      content: (
                        <div className="font-mono text-sm text-gray-400">
                          API reference content here
                        </div>
                      ),
                      tooltip: "Access API documentation",
                    },
                    {
                      id: "examples",
                      label: "Examples",
                      content: (
                        <div className="font-mono text-sm text-gray-400">
                          Code examples and samples
                        </div>
                      ),
                      tooltip: "Browse code examples",
                    },
                  ]}
                  defaultActiveTab="docs"
                />
              </div>

              {/* Features */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-3 uppercase">
                  Features
                </h3>
                <ul className="font-mono text-xs text-gray-500 space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Tab navigation with active state indicators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Tooltips on tabs - hover to see descriptions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>
                      Optional help button with tooltip (hover) and popover
                      (click)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Disabled tab support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Click outside to close popover</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Terminal/code aesthetic styling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Monospace typography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Smooth transitions and hover effects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Tab change callback support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Breadcrumb Component */}
        <Section title="Breadcrumb Component" defaultExpanded={true}>
          <div className="mb-4">
            <p className="font-mono text-sm text-gray-400 mb-4">
              Terminal-inspired breadcrumb navigation with multiple separator
              styles and sizes
            </p>

            <div className="space-y-6">
              {/* Basic Examples */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Basic Examples
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      With Links
                    </p>
                    <Breadcrumb
                      items={[
                        { label: "Home", href: "/" },
                        { label: "Showcase", href: "/showcase" },
                        { label: "Components" },
                      ]}
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      With Click Handlers
                    </p>
                    <Breadcrumb
                      items={[
                        {
                          label: "Dashboard",
                          onClick: () => console.log("Dashboard clicked"),
                        },
                        {
                          label: "Settings",
                          onClick: () => console.log("Settings clicked"),
                        },
                        { label: "Security" },
                      ]}
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Mixed (Links and Static)
                    </p>
                    <Breadcrumb
                      items={[
                        { label: "Home", href: "/" },
                        { label: "Products" },
                        { label: "Category" },
                        { label: "Current Item" },
                      ]}
                    />
                  </div>
                </div>
              </div>

              {/* Separators */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Separator Styles
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Slash (default)
                    </p>
                    <Breadcrumb
                      items={[
                        { label: "Home", href: "/" },
                        { label: "Section", href: "/section" },
                        { label: "Page" },
                      ]}
                      separator="slash"
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Arrow
                    </p>
                    <Breadcrumb
                      items={[
                        { label: "Home", href: "/" },
                        { label: "Section", href: "/section" },
                        { label: "Page" },
                      ]}
                      separator="arrow"
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Chevron
                    </p>
                    <Breadcrumb
                      items={[
                        { label: "Home", href: "/" },
                        { label: "Section", href: "/section" },
                        { label: "Page" },
                      ]}
                      separator="chevron"
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">Pipe</p>
                    <Breadcrumb
                      items={[
                        { label: "Home", href: "/" },
                        { label: "Section", href: "/section" },
                        { label: "Page" },
                      ]}
                      separator="pipe"
                    />
                  </div>
                </div>
              </div>

              {/* Sizes */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Sizes
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Small
                    </p>
                    <Breadcrumb
                      items={[
                        { label: "Home", href: "/" },
                        { label: "Section", href: "/section" },
                        { label: "Page" },
                      ]}
                      size="sm"
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Medium (default)
                    </p>
                    <Breadcrumb
                      items={[
                        { label: "Home", href: "/" },
                        { label: "Section", href: "/section" },
                        { label: "Page" },
                      ]}
                      size="md"
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Large
                    </p>
                    <Breadcrumb
                      items={[
                        { label: "Home", href: "/" },
                        { label: "Section", href: "/section" },
                        { label: "Page" },
                      ]}
                      size="lg"
                    />
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Use Cases
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      File System Navigation
                    </p>
                    <Breadcrumb
                      items={[
                        { label: "root", href: "/" },
                        { label: "users", href: "/users" },
                        { label: "admin", href: "/users/admin" },
                        { label: "documents" },
                      ]}
                      separator="slash"
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Product Categories
                    </p>
                    <Breadcrumb
                      items={[
                        { label: "Store", href: "/store" },
                        { label: "Electronics", href: "/store/electronics" },
                        {
                          label: "Computers",
                          href: "/store/electronics/computers",
                        },
                        { label: "Laptops" },
                      ]}
                      separator="arrow"
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Documentation Path
                    </p>
                    <Breadcrumb
                      items={[
                        { label: "Docs", href: "/docs" },
                        { label: "API", href: "/docs/api" },
                        { label: "Reference", href: "/docs/api/reference" },
                        { label: "Authentication" },
                      ]}
                      separator="chevron"
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Settings Navigation
                    </p>
                    <Breadcrumb
                      items={[
                        {
                          label: "Settings",
                          onClick: () => console.log("Settings"),
                        },
                        {
                          label: "Security",
                          onClick: () => console.log("Security"),
                        },
                        { label: "Two-Factor Auth" },
                      ]}
                      separator="pipe"
                    />
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-3 uppercase">
                  Features
                </h3>
                <ul className="font-mono text-xs text-gray-500 space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Terminal aesthetic with monospace font</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Support for Next.js Link components</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Optional click handlers for interactive items</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>
                      Four separator styles (slash, arrow, chevron, pipe)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Three sizes (sm, md, lg)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Last item highlighted (current page indicator)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Hover effects on clickable items</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Accessible with proper ARIA labels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Responsive and wraps on smaller screens</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* CodeSnippet Component */}
        <Section title="CodeSnippet Component" defaultExpanded={true}>
          <div className="mb-4">
            <p className="font-mono text-sm text-gray-400 mb-4">
              Terminal-inspired code snippet display with copy functionality and
              optional language labels
            </p>

            <div className="space-y-6">
              {/* Basic Example */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Basic Example
                </h3>
                <CodeSnippet
                  code={`import CodeSnippet from "./components/CodeSnippet";

<CodeSnippet
  code="const greeting = 'Hello, World!';"
  language="typescript"
/>`}
                  language="typescript"
                />
              </div>

              {/* With Hex Display */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  With Hex Display
                </h3>
                <CodeSnippet
                  code={`function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

const total = calculateTotal([
  { price: 10 },
  { price: 20 },
  { price: 30 }
]);

console.log(total); // 60`}
                  language="javascript"
                  hexStrings={[
                    "0xC0D3  01 04 45 54 68 6A 20 5R  69 6D 65 73 20 30 3V 2F  ../CODE_SNIP/",
                    "0xJ4V4  4A 61 6E 2F 32 30 30 39  J0 43 68 61 6E 63 6Z HC  /JAVASCRIPT_01",
                  ]}
                />
              </div>

              {/* Without Copy Button */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Without Copy Button
                </h3>
                <CodeSnippet
                  code={`export default function MyComponent() {
  return (
    <div className="container">
      <h1>Hello World</h1>
    </div>
  );
}`}
                  language="tsx"
                  showCopyButton={false}
                />
              </div>

              {/* Without Language Label */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Without Language Label
                </h3>
                <CodeSnippet
                  code={`# Configuration File
server.port=8080
server.host=localhost
database.url=jdbc:postgresql://localhost:5432/mydb
database.username=admin
database.password=secret`}
                />
              </div>

              {/* Long Code Example */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Long Code Example
                </h3>
                <CodeSnippet
                  code={`interface User {
  id: number;
  username: string;
  email: string;
  role: "admin" | "user" | "guest";
  createdAt: Date;
}

async function fetchUser(id: number): Promise<User> {
  const response = await fetch(\`/api/users/\${id}\`);
  if (!response.ok) {
    throw new Error(\`Failed to fetch user: \${response.statusText}\`);
  }
  return response.json();
}

const user = await fetchUser(123);
console.log(\`User: \${user.username} (\${user.email})\`);`}
                  language="typescript"
                />
              </div>

              {/* Use Cases */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  Use Cases
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      API Example
                    </p>
                    <CodeSnippet
                      code={`curl -X POST https://api.example.com/users \\
  -H "Content-Type: application/json" \\
  -d '{"name": "John", "email": "john@example.com"}'`}
                      language="bash"
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      Configuration
                    </p>
                    <CodeSnippet
                      code={`{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build"
  }
}`}
                      language="json"
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 mb-2">
                      SQL Query
                    </p>
                    <CodeSnippet
                      code={`SELECT u.id, u.username, u.email, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id, u.username, u.email
ORDER BY order_count DESC
LIMIT 10;`}
                      language="sql"
                    />
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-3 uppercase">
                  Features
                </h3>
                <ul className="font-mono text-xs text-gray-500 space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Terminal aesthetic with corner brackets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Optional language label in header</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Copy to clipboard functionality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Visual feedback when code is copied</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Optional hex display header</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Horizontal scroll for long lines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Monospace font for code readability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">▸</span>
                    <span>Consistent with showcase design system</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Icon Components */}
        <Section title="Icon Components" defaultExpanded={true}>
          <div className="mb-4">
            <p className="font-mono text-sm text-gray-400 mb-4">
              Icon-related components including icon buttons and icon content
              switchers
            </p>

            <div className="space-y-6">
              {/* IconButton Component */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  IconButton Component
                </h3>

                {/* Basic Examples */}
                <div className="mb-6">
                  <p className="font-mono text-xs text-gray-500 mb-3">
                    Basic Examples
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <IconButton
                      icon={
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      }
                      tooltip="Arrow Right"
                    />
                    <IconButton
                      icon={
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                      }
                      tooltip="Arrow Left"
                    />
                    <IconButton
                      icon={
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      }
                      tooltip="Close"
                    />
                    <IconButton
                      icon={
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      }
                      tooltip="Check"
                    />
                    <IconButton
                      icon={
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      }
                      tooltip="Plus"
                    />
                  </div>
                </div>

                {/* Sizes */}
                <div className="mb-6">
                  <p className="font-mono text-xs text-gray-500 mb-3">Sizes</p>
                  <div className="flex flex-wrap items-center gap-3">
                    <IconButton
                      size="sm"
                      icon={
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      }
                      tooltip="Small"
                    />
                    <IconButton
                      size="md"
                      icon={
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      }
                      tooltip="Medium"
                    />
                    <IconButton
                      size="lg"
                      icon={
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      }
                      tooltip="Large"
                    />
                  </div>
                </div>

                {/* Variants */}
                <div className="mb-6">
                  <p className="font-mono text-xs text-gray-500 mb-3">
                    Variants
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <IconButton
                      variant="default"
                      icon={
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      }
                      tooltip="Default"
                    />
                    <IconButton
                      variant="primary"
                      icon={
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      }
                      tooltip="Primary"
                    />
                    <IconButton
                      variant="secondary"
                      icon={
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      }
                      tooltip="Secondary"
                    />
                    <IconButton
                      variant="ghost"
                      icon={
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      }
                      tooltip="Ghost"
                    />
                  </div>
                </div>

                {/* States */}
                <div className="mb-6">
                  <p className="font-mono text-xs text-gray-500 mb-3">States</p>
                  <div className="flex flex-wrap gap-3">
                    <div>
                      <p className="font-mono text-xs text-gray-500 mb-2">
                        Normal
                      </p>
                      <IconButton
                        icon={
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        }
                        tooltip="Normal State"
                      />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-gray-500 mb-2">
                        Disabled
                      </p>
                      <IconButton
                        disabled
                        icon={
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        }
                        tooltip="Disabled State"
                      />
                    </div>
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <p className="font-mono text-xs text-gray-500 mb-3">
                    Use Cases
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="font-mono text-xs text-gray-500 mb-2">
                        Action Buttons
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <IconButton
                          icon={
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M3 3h6l2 12h8l4-8H9" />
                            </svg>
                          }
                          tooltip="Add to Cart"
                          onClick={() => console.log("Add to cart")}
                        />
                        <IconButton
                          icon={
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          }
                          tooltip="Delete"
                          onClick={() => console.log("Delete")}
                        />
                        <IconButton
                          icon={
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                          }
                          tooltip="Upload"
                          onClick={() => console.log("Upload")}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-mono text-xs text-gray-500 mb-2">
                        Navigation
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <IconButton
                          icon={
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M3 12h18M3 6h18M3 18h18" />
                            </svg>
                          }
                          tooltip="Menu"
                          onClick={() => console.log("Menu")}
                        />
                        <IconButton
                          icon={
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          }
                          tooltip="Search"
                          onClick={() => console.log("Search")}
                        />
                        <IconButton
                          icon={
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          }
                          tooltip="Settings"
                          onClick={() => console.log("Settings")}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="border border-gray-800 p-4 bg-black">
                  <h4 className="font-mono text-xs text-gray-300 mb-3 uppercase">
                    Features
                  </h4>
                  <ul className="font-mono text-xs text-gray-500 space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Terminal aesthetic with monospace font</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Three sizes (sm, md, lg)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>
                        Four variants (default, primary, secondary, ghost)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Optional tooltip on hover</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Disabled state support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Flexible icon support (ReactNode)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Accessible with ARIA labels</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* IconContentSwitcher Component */}
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <h3 className="font-mono text-sm text-gray-300 mb-4 uppercase">
                  IconContentSwitcher Component
                </h3>

                {/* Basic Example */}
                <div className="mb-6">
                  <p className="font-mono text-xs text-gray-500 mb-3">
                    Basic Example
                  </p>
                  <IconContentSwitcher
                    items={[
                      {
                        id: "overview",
                        icon: (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                            <path d="M9 22V12h6v10" />
                          </svg>
                        ),
                        label: "Overview",
                        tooltip: "View overview",
                        content: (
                          <div className="space-y-2">
                            <p className="font-mono text-sm">System Overview</p>
                            <div className="border-l-2 border-gray-800 pl-4 space-y-1">
                              <p className="text-xs text-gray-500">
                                ├─ Status: Active
                              </p>
                              <p className="text-xs text-gray-500">
                                ├─ Users: 1,234
                              </p>
                              <p className="text-xs text-gray-500">
                                └─ Last Updated: 2024-11-21
                              </p>
                            </div>
                          </div>
                        ),
                      },
                      {
                        id: "analytics",
                        icon: (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M3 3v18h18" />
                            <path d="M18 17V9M12 17V5M6 17v-3" />
                          </svg>
                        ),
                        label: "Analytics",
                        tooltip: "View analytics",
                        content: (
                          <div className="space-y-2">
                            <p className="font-mono text-sm">
                              Analytics Dashboard
                            </p>
                            <div className="grid grid-cols-3 gap-2">
                              <div className="border border-gray-800 p-2">
                                <p className="text-xs text-gray-500">TOTAL</p>
                                <p className="text-lg font-mono">1,234</p>
                              </div>
                              <div className="border border-gray-800 p-2">
                                <p className="text-xs text-gray-500">ACTIVE</p>
                                <p className="text-lg font-mono">567</p>
                              </div>
                              <div className="border border-gray-800 p-2">
                                <p className="text-xs text-gray-500">PENDING</p>
                                <p className="text-lg font-mono">89</p>
                              </div>
                            </div>
                          </div>
                        ),
                      },
                      {
                        id: "settings",
                        icon: (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        ),
                        label: "Settings",
                        tooltip: "Configure settings",
                        content: (
                          <div className="space-y-2">
                            <p className="font-mono text-sm">Settings Panel</p>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                                <span className="text-xs text-gray-400">
                                  Theme
                                </span>
                                <span className="text-xs text-gray-500">
                                  Dark
                                </span>
                              </div>
                              <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                                <span className="text-xs text-gray-400">
                                  Language
                                </span>
                                <span className="text-xs text-gray-500">
                                  English
                                </span>
                              </div>
                            </div>
                          </div>
                        ),
                      },
                      {
                        id: "disabled",
                        icon: (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        ),
                        label: "Disabled",
                        tooltip: "This option is disabled",
                        disabled: true,
                        content: <div>Disabled content</div>,
                      },
                    ]}
                    defaultActiveId="overview"
                    onSwitch={(id) => console.log("Switched to:", id)}
                  />
                </div>

                {/* Variants */}
                <div className="mb-6">
                  <p className="font-mono text-xs text-gray-500 mb-3">
                    Variants
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="font-mono text-xs text-gray-500 mb-2">
                        Default
                      </p>
                      <IconContentSwitcher
                        variant="default"
                        items={[
                          {
                            id: "item1",
                            icon: (
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M12 5v14M5 12h14" />
                              </svg>
                            ),
                            label: "Item 1",
                            content: (
                              <div className="text-sm">
                                Default variant content
                              </div>
                            ),
                          },
                          {
                            id: "item2",
                            icon: (
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                            ),
                            label: "Item 2",
                            content: (
                              <div className="text-sm">Second item content</div>
                            ),
                          },
                        ]}
                      />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-gray-500 mb-2">
                        Bordered
                      </p>
                      <IconContentSwitcher
                        variant="bordered"
                        items={[
                          {
                            id: "item1",
                            icon: (
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M12 5v14M5 12h14" />
                              </svg>
                            ),
                            label: "Item 1",
                            content: (
                              <div className="text-sm">
                                Bordered variant content
                              </div>
                            ),
                          },
                          {
                            id: "item2",
                            icon: (
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                            ),
                            label: "Item 2",
                            content: (
                              <div className="text-sm">Second item content</div>
                            ),
                          },
                        ]}
                      />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-gray-500 mb-2">
                        Minimal
                      </p>
                      <IconContentSwitcher
                        variant="minimal"
                        items={[
                          {
                            id: "item1",
                            icon: (
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M12 5v14M5 12h14" />
                              </svg>
                            ),
                            label: "Item 1",
                            content: (
                              <div className="text-sm">
                                Minimal variant content
                              </div>
                            ),
                          },
                          {
                            id: "item2",
                            icon: (
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                            ),
                            label: "Item 2",
                            content: (
                              <div className="text-sm">Second item content</div>
                            ),
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>

                {/* Sizes */}
                <div className="mb-6">
                  <p className="font-mono text-xs text-gray-500 mb-3">Sizes</p>
                  <div className="space-y-4">
                    <div>
                      <p className="font-mono text-xs text-gray-500 mb-2">
                        Small
                      </p>
                      <IconContentSwitcher
                        size="sm"
                        items={[
                          {
                            id: "item1",
                            icon: (
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M12 5v14M5 12h14" />
                              </svg>
                            ),
                            label: "Small",
                            content: (
                              <div className="text-sm">Small size content</div>
                            ),
                          },
                        ]}
                      />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-gray-500 mb-2">
                        Medium (default)
                      </p>
                      <IconContentSwitcher
                        size="md"
                        items={[
                          {
                            id: "item1",
                            icon: (
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M12 5v14M5 12h14" />
                              </svg>
                            ),
                            label: "Medium",
                            content: (
                              <div className="text-sm">Medium size content</div>
                            ),
                          },
                        ]}
                      />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-gray-500 mb-2">
                        Large
                      </p>
                      <IconContentSwitcher
                        size="lg"
                        items={[
                          {
                            id: "item1",
                            icon: (
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M12 5v14M5 12h14" />
                              </svg>
                            ),
                            label: "Large",
                            content: (
                              <div className="text-sm">Large size content</div>
                            ),
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="border border-gray-800 p-4 bg-black">
                  <h4 className="font-mono text-xs text-gray-300 mb-3 uppercase">
                    Features
                  </h4>
                  <ul className="font-mono text-xs text-gray-500 space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Terminal aesthetic with monospace font</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>
                        Switch between content views using icon buttons
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Three sizes (sm, md, lg)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Three variants (default, bordered, minimal)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Optional tooltips on icon buttons</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Disabled item support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Active state indicators</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Switch callback support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Flexible content rendering (ReactNode)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Section Component */}
        <Section
          title="Section Component (Collapsible)"
          defaultExpanded={false}
        >
          <div className="mb-4">
            <p className="font-mono text-sm text-gray-400 mb-4">
              Expandable/collapsible sections with tree-like indicators
            </p>
            <div className="border border-gray-800 p-4 bg-[#0a0a0a]">
              <Section title="Nested Section Example" defaultExpanded={true}>
                <p className="font-mono text-sm text-gray-400">
                  This is content inside a nested section. You can expand and
                  collapse it.
                </p>
              </Section>
            </div>
          </div>
        </Section>
      </div>

      {/* Terminal Modal Instance */}
      <TerminalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="SELF-CUSTODY"
      >
        <TerminalModalSection title="SELF-CUSTODY">
          <p className="font-mono text-sm text-gray-500 leading-relaxed">
            Our self-custody architecture gives clients full control. Root keys
            are cryptographically split, fully segmented, and physically held by
            clients in locations of their choice.
          </p>
          <p className="font-mono text-sm text-gray-500 leading-relaxed">
            Clients can use this cold storage on their own terms. For specific
            situations, they can authorize Unit 410 software to reconstruct and
            operate on the keys to generate wallets, use digital assets, or
            perform arbitrarily complex operations.
          </p>
        </TerminalModalSection>

        <TerminalModalSection title="APPROVALS">
          <p className="font-mono text-sm text-gray-500 leading-relaxed">
            Before any operation can proceed, it must pass custom approvals
            rules configured to a client's requirements. This ensures a quorum
            of multiple authorized users are always engaged.
          </p>
          <p className="font-mono text-sm text-gray-500 leading-relaxed">
            Approvals are cryptographic and done through an easy and secure
            mobile application.
          </p>
        </TerminalModalSection>

        <TerminalModalSection title="WALLET SUPPORT">
          <p className="font-mono text-sm text-gray-500 leading-relaxed">
            Unit 410 engineers self-custody wallets to support the new and most
            novel content using old (mature) cryptography. This design ensures
            clients are able to secure what the future has in store.
          </p>
        </TerminalModalSection>

        {/* Footer Logo */}
        <div className="flex justify-center mt-16 pt-10 border-t border-gray-800">
          <div className="px-6 py-2 bg-black border border-gray-800 font-mono text-base tracking-[0.3em] text-gray-400">
            U410
          </div>
        </div>
      </TerminalModal>
    </main>
  );
}
