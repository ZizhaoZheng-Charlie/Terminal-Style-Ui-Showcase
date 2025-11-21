# UI Components Guide

This guide documents all the UI components available in this project, styled after Unit 410's design aesthetic.

## Core Components

### Navigation
A minimal navigation bar with menu items and mobile support.

```tsx
import Navigation from "./app/components/Navigation";

<Navigation />
```

### HexDisplay
Displays hex code strings in the terminal/code aesthetic.

```tsx
import HexDisplay from "./app/components/HexDisplay";

const hexStrings = [
  "F5RL3UNT 09 0C 4D 5C 70 6D 6D 28 72 75 75 6B 28 38 3B 37",
  "VVPW5CZZ D2 1E 34 6F 92 B8 0C 47 5D 9A 21 F3 76 4C 50 81",
];

<HexDisplay strings={hexStrings} />
```

### Section
Expandable/collapsible section with tree-like navigation indicators.

```tsx
import Section from "./app/components/Section";

<Section title="Services" defaultExpanded={true}>
  <p>Content goes here</p>
</Section>
```

### SecurityAudit
Displays security audit information in a structured format.

```tsx
import SecurityAudit from "./app/components/SecurityAudit";

const audits = [
  {
    date: "February 2024",
    company: "Bishopfox",
    type: "Application Audit",
    status: "Complete",
  },
];

<SecurityAudit audits={audits} />
```

### BlogPost
Displays blog post entries with date and title.

```tsx
import BlogPost from "./app/components/BlogPost";

<BlogPost 
  date="October 9, 2025" 
  title="Berachain Operators - Stay Frosty"
  isPopular={true}
/>
```

### Spinner
An animated ASCII spinner that cycles through `|`, `/`, `-`, `\` characters to create a 360° rotation effect.

```tsx
import Spinner from "./app/components/Spinner";

<Spinner />
```

### Footer
A footer component with the animated spinner, terms link, and copyright information.

```tsx
import Footer from "./app/components/Footer";

<Footer />
```

### DataTable
A terminal-style data table component with sorting, pagination, and custom cell rendering capabilities.

```tsx
import DataTable, { Column } from "./app/components/DataTable";

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  status: "active" | "inactive" | "pending";
}

const columns: Column<User>[] = [
  {
    key: "username",
    header: "Username",
    sortable: true,
    align: "left", // Optional: defaults to "center"
  },
  {
    key: "status",
    header: "Status",
    sortable: true,
    // align defaults to "center"
    render: (value) => (
      <span className={`px-2 py-1 text-xs border ${
        value === "active" 
          ? "text-green-500 border-green-500/30" 
          : "text-gray-500 border-gray-500/30"
      }`}>
        {value}
      </span>
    ),
  },
];

const data: User[] = [
  { id: 1, username: "alice", email: "alice@example.com", role: "Admin", status: "active" },
  { id: 2, username: "bob", email: "bob@example.com", role: "User", status: "inactive" },
];

// Basic usage
<DataTable
  columns={columns}
  data={data}
  showRowNumbers={true}
/>

// With pagination
<DataTable
  columns={columns}
  data={data}
  enablePagination={true}
  rowsPerPage={10}
/>

// With hex display
<DataTable
  columns={columns}
  data={data}
  hexStrings={["0xD4T4  01 04 45 54 68 6A"]}
/>

// With column reordering callback
<DataTable
  columns={columns}
  data={data}
  enableColumnReorder={true}
  onColumnOrderChange={(newColumns) => {
    console.log("New column order:", newColumns.map(col => col.key));
    // Persist column order to localStorage, database, etc.
  }}
/>

// Disable column reordering
<DataTable
  columns={columns}
  data={data}
  enableColumnReorder={false}
/>
```

**Props:**
- `columns`: Array of column definitions with sorting and custom rendering
- `data`: Array of row data (generic type support)
- `hexStrings?`: Optional hex code strings to display at the top
- `showRowNumbers?`: Show row numbers (default: true)
- `enablePagination?`: Enable pagination controls (default: false)
- `rowsPerPage?`: Number of rows per page (default: 10)
- `enableColumnReorder?`: Enable drag-and-drop column reordering (default: true)
- `onColumnOrderChange?`: Callback when column order changes
- `className?`: Additional CSS classes

**Features:**
- Corner brackets and terminal aesthetic
- **Drag-and-drop column reordering** - Drag column headers to reorder them
- Sortable columns with visual indicators (▲/▼)
- Custom cell rendering with TypeScript support
- Optional pagination with page controls
- **Center-aligned by default** - All columns center-aligned unless specified (supports left/center/right)
- Row numbers and column alignment control
- Hover effects and responsive design
- Empty state handling
- Visual feedback during drag operations (opacity, drop indicators)

### Tabs
A tab component with tooltips and an optional help button that supports both hover tooltips and click popovers.

```tsx
import Tabs, { TabItem } from "./app/components/Tabs";

const tabItems: TabItem[] = [
  {
    id: "overview",
    label: "Overview",
    content: <div>Overview content here</div>,
    tooltip: "View general information",
  },
  {
    id: "settings",
    label: "Settings",
    content: <div>Settings content here</div>,
    tooltip: "Configure system settings",
    disabled: false,
  },
];

// Basic usage
<Tabs items={tabItems} defaultActiveTab="overview" />

// With help button (tooltip on hover, popover on click)
<Tabs
  items={tabItems}
  defaultActiveTab="overview"
  helpContent={<div>Help content here</div>}
  helpTooltip="Click for help or hover for quick info"
  helpPopoverTitle="Help"
  onTabChange={(tabId) => console.log("Tab changed:", tabId)}
/>
```

**Props:**
- `items`: Array of `TabItem` objects with `id`, `label`, `content`, optional `tooltip`, and optional `disabled`
- `defaultActiveTab?`: ID of the tab to show by default (defaults to first tab)
- `onTabChange?`: Callback function when tab changes
- `className?`: Additional CSS classes
- `helpContent?`: ReactNode content to display in the help popover
- `helpTooltip?`: Text to show in tooltip when hovering over help button
- `helpPopoverTitle?`: Title for the help popover (default: "Help")

**Features:**
- Tab navigation with active state indicators
- **Tooltips on tabs** - Hover over tabs to see tooltips
- **Help button** - Optional help button with:
  - Tooltip on hover (if `helpTooltip` is provided)
  - Popover on click (if `helpContent` is provided)
- Disabled tab support
- Click outside to close popover
- Terminal/code aesthetic styling
- Monospace typography
- Smooth transitions and hover effects

### CodeSnippet
A terminal-inspired code snippet display component with copy functionality and optional language labels.

```tsx
import CodeSnippet from "./app/components/CodeSnippet";

// Basic usage
<CodeSnippet
  code="const greeting = 'Hello, World!';"
  language="typescript"
/>

// With hex display
<CodeSnippet
  code="function example() { return true; }"
  language="javascript"
  hexStrings={[
    "0xC0D3  01 04 45 54 68 6A 20 5R  69 6D 65 73 20 30 3V 2F  ../CODE_SNIP/",
  ]}
/>

// Without copy button
<CodeSnippet
  code="export default function App() { return <div>Hello</div>; }"
  language="tsx"
  showCopyButton={false}
/>

// Without language label
<CodeSnippet
  code="# Configuration\nserver.port=8080"
/>
```

**Props:**
- `code`: The code string to display (required)
- `language?`: Optional language label to display in header (e.g., "typescript", "javascript", "bash")
- `showCopyButton?`: Show copy button (default: true)
- `className?`: Additional CSS classes
- `hexStrings?`: Optional hex code strings to display at the top

**Features:**
- Terminal aesthetic with corner brackets
- Optional language label in header
- Copy to clipboard functionality with visual feedback
- Optional hex display header
- Horizontal scroll for long lines
- Monospace font for code readability
- Consistent with showcase design system

### IconButton
A button component that displays an icon with optional tooltip, multiple variants, and sizes.

```tsx
import IconButton from "./app/components/IconButton";

// Basic usage
<IconButton
  icon={
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14M5 12h14" />
    </svg>
  }
  tooltip="Add Item"
  onClick={() => console.log("Clicked")}
/>

// With different variants
<IconButton
  variant="primary"
  icon={<svg>...</svg>}
  tooltip="Primary Button"
/>

<IconButton
  variant="secondary"
  icon={<svg>...</svg>}
  tooltip="Secondary Button"
/>

<IconButton
  variant="ghost"
  icon={<svg>...</svg>}
  tooltip="Ghost Button"
/>

// Different sizes
<IconButton size="sm" icon={<svg>...</svg>} />
<IconButton size="md" icon={<svg>...</svg>} />
<IconButton size="lg" icon={<svg>...</svg>} />

// Disabled state
<IconButton
  disabled
  icon={<svg>...</svg>}
  tooltip="Disabled Button"
/>
```

**Props:**
- `icon`: ReactNode - The icon to display (required)
- `label?`: string - Accessible label for the button
- `size?`: "sm" | "md" | "lg" - Button size (default: "md")
- `variant?`: "default" | "primary" | "secondary" | "ghost" - Button variant (default: "default")
- `tooltip?`: string - Tooltip text shown on hover
- `disabled?`: boolean - Disable the button
- `className?`: string - Additional CSS classes
- All standard button HTML attributes are supported

**Features:**
- Terminal aesthetic with monospace font
- Three sizes (sm, md, lg)
- Four variants (default, primary, secondary, ghost)
- Optional tooltip on hover
- Disabled state support
- Flexible icon support (any ReactNode)
- Accessible with ARIA labels
- Hover effects and transitions

### IconContentSwitcher
A component that switches between different content views using icon buttons as controls.

```tsx
import IconContentSwitcher, { IconContentItem } from "./app/components/IconContentSwitcher";

const items: IconContentItem[] = [
  {
    id: "overview",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      </svg>
    ),
    label: "Overview",
    tooltip: "View overview",
    content: <div>Overview content here</div>,
  },
  {
    id: "analytics",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18" />
      </svg>
    ),
    label: "Analytics",
    tooltip: "View analytics",
    content: <div>Analytics content here</div>,
  },
  {
    id: "settings",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0" />
      </svg>
    ),
    label: "Settings",
    tooltip: "Configure settings",
    content: <div>Settings content here</div>,
    disabled: false,
  },
];

// Basic usage
<IconContentSwitcher
  items={items}
  defaultActiveId="overview"
  onSwitch={(id) => console.log("Switched to:", id)}
/>

// With different variants
<IconContentSwitcher
  variant="bordered"
  items={items}
/>

<IconContentSwitcher
  variant="minimal"
  items={items}
/>

// Different sizes
<IconContentSwitcher size="sm" items={items} />
<IconContentSwitcher size="md" items={items} />
<IconContentSwitcher size="lg" items={items} />
```

**Props:**
- `items`: IconContentItem[] - Array of items with icon, label, content, and optional tooltip/disabled (required)
- `defaultActiveId?`: string - ID of the item to show by default (defaults to first item)
- `onSwitch?`: (id: string) => void - Callback when switching between items
- `size?`: "sm" | "md" | "lg" - Size of icon buttons (default: "md")
- `variant?`: "default" | "bordered" | "minimal" - Visual variant (default: "default")
- `className?`: string - Additional CSS classes

**IconContentItem Interface:**
- `id`: string - Unique identifier (required)
- `icon`: ReactNode - Icon to display (required)
- `label`: string - Label for the item (required)
- `content`: ReactNode - Content to display when active (required)
- `tooltip?`: string - Tooltip text for the icon button
- `disabled?`: boolean - Disable this item

**Features:**
- Terminal aesthetic with monospace font
- Switch between content views using icon buttons
- Three sizes (sm, md, lg)
- Three variants (default, bordered, minimal)
- Optional tooltips on icon buttons
- Disabled item support
- Active state indicators
- Switch callback support
- Flexible content rendering (any ReactNode)
- Hover effects and smooth transitions

## Design Principles

1. **Dark Theme**: Black background (#000000) with white/grayscale text
2. **Monospace Typography**: All text uses monospace fonts
3. **Minimal Aesthetics**: Clean, uncluttered interface
4. **Tree Navigation**: Use `├─` and `[+]`/`[-]` indicators
5. **Hex Displays**: Cryptographic-style hex code strings
6. **Structured Content**: Clear hierarchy with borders and spacing

## Color Palette

- Background: `#000000` (black)
- Foreground: `#ffffff` (white)
- Gray-400: `#9ca3af` (light gray for secondary text)
- Gray-500: `#6b7280` (medium gray)
- Gray-600: `#4b5563` (darker gray)
- Gray-800: `#1f2937` (borders)

## Typography

All text uses monospace fonts:
- `ui-monospace`
- `SFMono-Regular`
- `Menlo`
- `Monaco`
- `Consolas`
- `monospace` (fallback)

