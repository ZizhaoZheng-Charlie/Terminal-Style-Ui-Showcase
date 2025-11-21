"use client";

import { useState } from "react";
import Navigation from "../app/components/Navigation";
import BoxComponent from "../app/components/BoxComponent";
import TextInput from "../app/components/TextInput";
import TextArea from "../app/components/TextArea";
import Footer from "../app/components/Footer";

export default function TextInputExample() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <BoxComponent>
          <h1 className="text-4xl md:text-5xl font-mono mb-6 uppercase text-amber-500">
            TEXT INPUT & TEXTAREA
          </h1>
          
          <p className="text-lg font-mono text-gray-400 mb-8 leading-relaxed">
            Terminal-inspired text input and textarea components with corner brackets, character limits, and clean aesthetics.
          </p>

          <div className="space-y-8">
            {/* Text Input Examples */}
            <div>
              <h2 className="font-mono text-xl text-gray-300 mb-4 uppercase">Text Input Variants</h2>
              <div className="space-y-6">
                {/* Basic Input */}
                <div>
                  <TextInput
                    label="Username"
                    placeholder="Enter username"
                    value={username}
                    onChange={setUsername}
                    required
                  />
                  {username && (
                    <p className="font-mono text-xs text-gray-600 mt-2">
                      Current value: {username}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <TextInput
                    type="email"
                    label="Email Address"
                    placeholder="Enter email"
                    value={email}
                    onChange={setEmail}
                  />
                </div>

                {/* Password Input */}
                <div>
                  <TextInput
                    type="password"
                    label="Password"
                    placeholder="Enter password"
                    value={password}
                    onChange={setPassword}
                    required
                  />
                </div>

                {/* Input with Max Length */}
                <div>
                  <TextInput
                    label="Short Description (Max 50 chars)"
                    placeholder="Brief description"
                    value={description}
                    onChange={setDescription}
                    maxLength={50}
                  />
                </div>
              </div>
            </div>

            {/* TextArea Examples */}
            <div className="pt-6 border-t border-gray-800">
              <h2 className="font-mono text-xl text-gray-300 mb-4 uppercase">TextArea Variants</h2>
              <div className="space-y-6">
                {/* Basic TextArea */}
                <div>
                  <TextArea
                    label="Message"
                    placeholder="Enter your message"
                    value={message}
                    onChange={setMessage}
                    rows={4}
                  />
                  {message && (
                    <p className="font-mono text-xs text-gray-600 mt-2">
                      Characters: {message.length} | Words: {message.trim().split(/\s+/).filter(w => w).length}
                    </p>
                  )}
                </div>

                {/* TextArea with Max Length */}
                <div>
                  <TextArea
                    label="Notes (Max 200 chars)"
                    placeholder="Add your notes here"
                    value={notes}
                    onChange={setNotes}
                    maxLength={200}
                    rows={6}
                  />
                </div>

                {/* Resizable TextArea */}
                <div>
                  <TextArea
                    label="Resizable Field"
                    placeholder="This textarea can be resized vertically"
                    rows={3}
                    resize={true}
                  />
                  <p className="font-mono text-xs text-gray-600 mt-2">
                    Drag the bottom-right corner to resize
                  </p>
                </div>
              </div>
            </div>

            {/* Form Example */}
            <div className="pt-6 border-t border-gray-800">
              <h2 className="font-mono text-xl text-gray-300 mb-4 uppercase">Full Form Example</h2>
              <div className="border border-gray-800 p-6 bg-[#0a0a0a]">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextInput
                      label="First Name"
                      placeholder="Enter first name"
                      required
                    />
                    <TextInput
                      label="Last Name"
                      placeholder="Enter last name"
                      required
                    />
                  </div>
                  
                  <TextInput
                    type="email"
                    label="Contact Email"
                    placeholder="your.email@example.com"
                    required
                  />
                  
                  <TextInput
                    type="tel"
                    label="Phone Number"
                    placeholder="+1 (555) 000-0000"
                  />
                  
                  <TextArea
                    label="Additional Information"
                    placeholder="Tell us more..."
                    rows={5}
                    maxLength={500}
                  />
                  
                  <button className="px-6 py-3 bg-black text-white border border-gray-900 font-mono text-sm uppercase tracking-wider hover:bg-gray-950 hover:border-gray-800 transition-colors">
                    Submit Form
                  </button>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="pt-6 border-t border-gray-800">
              <h2 className="font-mono text-xl text-gray-300 mb-4 uppercase">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-mono text-sm text-amber-500 mb-3 uppercase">Input Features</h3>
                  <ul className="font-mono text-sm text-gray-500 space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Terminal-inspired design with corner brackets</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Multiple input types (text, email, password, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Character limit with counter display</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Required field indicators</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Disabled state support</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-sm text-amber-500 mb-3 uppercase">TextArea Features</h3>
                  <ul className="font-mono text-sm text-gray-500 space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Configurable row height</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Optional vertical resizing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Character counting with max length</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Consistent styling with inputs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">▸</span>
                      <span>Hover and focus states</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* States Demo */}
            <div className="pt-6 border-t border-gray-800">
              <h2 className="font-mono text-xl text-gray-300 mb-4 uppercase">States</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-mono text-xs text-gray-500 mb-2 uppercase">Default State</p>
                  <TextInput placeholder="Normal input" />
                </div>
                <div>
                  <p className="font-mono text-xs text-gray-500 mb-2 uppercase">Disabled State</p>
                  <TextInput placeholder="Disabled input" value="Cannot edit this" disabled />
                </div>
                <div>
                  <p className="font-mono text-xs text-gray-500 mb-2 uppercase">With Value</p>
                  <TextInput placeholder="With value" value="Some text here" />
                </div>
              </div>
            </div>
          </div>
        </BoxComponent>

        {/* Code Example */}
        <BoxComponent className="mt-8">
          <h2 className="font-mono text-2xl text-gray-300 mb-4 uppercase">Usage Example</h2>
          <div className="bg-[#050505] p-6 border border-gray-900 overflow-x-auto">
            <pre className="font-mono text-xs text-gray-500">
{`import TextInput from "./components/TextInput";
import TextArea from "./components/TextArea";
import { useState } from "react";

const [text, setText] = useState("");
const [message, setMessage] = useState("");

// Basic Text Input
<TextInput
  label="Username"
  placeholder="Enter username"
  value={text}
  onChange={setText}
  required
/>

// Text Input with max length
<TextInput
  label="Title"
  placeholder="Enter title"
  value={text}
  onChange={setText}
  maxLength={50}
/>

// Email Input
<TextInput
  type="email"
  label="Email"
  placeholder="your@email.com"
  value={text}
  onChange={setText}
/>

// Basic TextArea
<TextArea
  label="Message"
  placeholder="Enter message"
  value={message}
  onChange={setMessage}
  rows={5}
/>

// TextArea with max length
<TextArea
  label="Description"
  placeholder="Enter description"
  value={message}
  onChange={setMessage}
  maxLength={200}
  rows={6}
/>

// Resizable TextArea
<TextArea
  label="Notes"
  placeholder="Enter notes"
  value={message}
  onChange={setMessage}
  resize={true}
/>`}
            </pre>
          </div>
        </BoxComponent>
      </div>

      <Footer />
    </main>
  );
}



