# Terminal-Style UI Showcase

A collection of terminal-inspired UI components and designs, built with a dark, monospace aesthetic inspired by [Unit 410](https://unit410.com/).

## Overview

This project showcases a comprehensive set of UI components styled with a terminal/code aesthetic. Each component is designed to maintain the distinctive look and feel of a command-line interface while providing modern, interactive functionality.

## Design Philosophy

The design follows Unit 410's distinctive terminal-style language:
- **Dark theme** with black background and white/grayscale text
- **Monospace typography** throughout for an authentic terminal feel
- **Hex code displays** and cryptographic-style elements
- **Minimal, clean interface** with structured sections
- **Tree-like navigation** with expandable/collapsible sections
- **Terminal modals** and command-line inspired interactions

## Available Components

### Core Components
- **Navigation** - Minimal navigation bar with menu support
- **Section** - Expandable/collapsible sections with tree indicators
- **HexDisplay** - Terminal-style hex code string displays
- **TerminalModal** - Modal dialogs with terminal aesthetic
- **TerminalModalSection** - Structured sections within terminal modals

### Form Components
- **TextInput** - Terminal-style text input fields
- **TextArea** - Multi-line text input with terminal styling
- **DatePicker** - Date selection component with terminal UI
- **Button** - Various button styles with terminal aesthetic
- **IconButton** - Icon-based buttons with hover effects

### Display Components
- **DataTable** - Terminal-styled data tables
- **CodeSnippet** - Syntax-highlighted code displays
- **ProgressBar** - Progress indicators with terminal styling
- **Pill** - Badge/pill components for tags and labels
- **Spinner** - Loading spinners with terminal aesthetic

### Interactive Components
- **Tabs** - Tab navigation with terminal styling
- **Breadcrumb** - Navigation breadcrumbs
- **IconContentSwitcher** - Content switcher with icons
- **ScrambleText** - Animated text scrambling effects
- **TransitionButton** - Buttons with smooth transitions
- **ProgressiveSkeletonButton** - Loading state buttons

### Specialized Components
- **SecurityAudit** - Security audit information displays
- **BlogPost** - Blog post card components
- **BoxComponent** - Container components with terminal styling
- **Footer** - Footer component with terminal aesthetic

## Project Structure

```
ui-showcase/
├── app/
│   ├── components/       # All reusable UI components
│   ├── showcase/         # Main showcase page
│   ├── skeleton/         # Skeleton loading examples
│   ├── globals.css       # Global styles and design system
│   └── layout.tsx        # Root layout
├── examples/             # Example implementations and demos
└── COMPONENTS.md        # Detailed component documentation
```

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - Latest React features

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Navigate to `/showcase` to see all components in action.

## Design Reference

Inspired by: [https://unit410.com/](https://unit410.com/)

Unit 410 is a leading provider of institutional self-custody solutions for digital assets, known for their distinctive terminal-style interface design.

