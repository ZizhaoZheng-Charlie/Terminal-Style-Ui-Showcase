# Terminal-Style UI Showcase

A comprehensive collection of terminal-inspired UI components and designs, built with a dark, monospace aesthetic inspired by [Unit 410](https://unit410.com/).

## Overview

This project showcases a complete set of UI components styled with a terminal/code aesthetic. Each component is designed to maintain the distinctive look and feel of a command-line interface while providing modern, interactive functionality. Perfect for building applications that require a technical, security-focused, or developer-oriented visual identity.

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
- **Footer** - Footer component with terminal aesthetic

### Form Components
- **TextInput** - Terminal-style text input fields
- **TextArea** - Multi-line text input with terminal styling
- **DatePicker** - Date selection component with terminal UI
- **Button** - Various button styles with terminal aesthetic
- **IconButton** - Icon-based buttons with hover effects
- **TransitionButton** - Buttons with smooth transitions
- **ProgressiveSkeletonButton** - Loading state buttons

### Display Components
- **DataTable** - Terminal-styled data tables with sorting and pagination
- **CodeSnippet** - Syntax-highlighted code displays with copy functionality
- **ProgressBar** - Progress indicators with terminal styling
- **Pill** - Badge/pill components for tags and labels
- **Spinner** - Loading spinners with terminal aesthetic
- **BoxComponent** - Container components with terminal styling

### Interactive Components
- **Tabs** - Tab navigation with terminal styling and tooltips
- **Breadcrumb** - Navigation breadcrumbs
- **IconContentSwitcher** - Content switcher with icons
- **ScrambleText** - Animated text scrambling effects

### Specialized Components
- **SecurityAudit** - Security audit information displays
- **BlogPost** - Blog post card components

## Project Structure

```
ui-showcase/
├── app/
│   ├── components/          # All reusable UI components
│   │   ├── BlogPost.tsx
│   │   ├── BoxComponent.tsx
│   │   ├── Breadcrumb.tsx
│   │   ├── Button.tsx
│   │   ├── CodeSnippet.tsx
│   │   ├── DataTable.tsx
│   │   ├── DatePicker.tsx
│   │   ├── Footer.tsx
│   │   ├── HexDisplay.tsx
│   │   ├── IconButton.tsx
│   │   ├── IconContentSwitcher.tsx
│   │   ├── Navigation.tsx
│   │   ├── Pill.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── ProgressiveSkeletonButton.tsx
│   │   ├── ScrambleText.tsx
│   │   ├── Section.tsx
│   │   ├── SecurityAudit.tsx
│   │   ├── Spinner.tsx
│   │   ├── Tabs.tsx
│   │   ├── TerminalModal.tsx
│   │   ├── TerminalModalSection.tsx
│   │   ├── TextArea.tsx
│   │   ├── TextInput.tsx
│   │   └── TransitionButton.tsx
│   ├── showcase/            # Main showcase page with all components
│   │   └── page.tsx
│   ├── skeleton/            # Skeleton loading examples
│   │   └── page.tsx
│   ├── constant.tsx         # Component metadata and sample data
│   ├── globals.css          # Global styles and design system
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── examples/                # Example implementations and demos
│   ├── box-component-example.tsx
│   ├── breadcrumb-example.tsx
│   ├── datatable-example.tsx
│   ├── datepicker-example.tsx
│   ├── security-page.tsx
│   ├── spinner-footer-example.tsx
│   ├── tabs-example.tsx
│   ├── terminal-modal-showcase.tsx
│   └── textinput-textarea-example.tsx
├── package.json
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - Latest React features
- **Geist Font** - Monospace typography

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Explore the showcase:**
   - Visit `/` for the home page with component overview
   - Visit `/showcase` to see all components in action with live examples
   - Visit `/skeleton` to see skeleton loading examples

## Features

- **Fully Typed** - All components are built with TypeScript for type safety
- **Responsive Design** - Components work seamlessly across different screen sizes
- **Accessible** - Built with accessibility best practices in mind
- **Customizable** - Easy to customize colors, spacing, and styling via Tailwind CSS
- **Production Ready** - Components are designed for real-world applications

## Usage Examples

Check the `examples/` directory for detailed usage examples of each component. Each example demonstrates:
- Basic usage
- Props and configuration options
- Styling customization
- Interactive features

## Design Reference

Inspired by: [https://unit410.com/](https://unit410.com/)

Unit 410 is a leading provider of institutional self-custody solutions for digital assets, known for their distinctive terminal-style interface design that combines security-focused aesthetics with modern web functionality.

## License

This project is private and for showcase purposes.

