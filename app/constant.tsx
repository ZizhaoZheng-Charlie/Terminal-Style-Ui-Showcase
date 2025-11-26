import { Column } from "./components/DataTable";

export interface ComponentInfo {
  name: string;
  description: string;
}

export const hexStrings = [
  "0U1490C4  55 49 20 53 48 4F 57 43  41 53 45 20 48 4F 4D 45  UI SHOWCASE HOME",
  "H0000090  54 45 52 4D 49 4E 41 4C  20 44 45 53 49 47 4E 20  TERMINAL DESIGN",
];

export const coreComponents: ComponentInfo[] = [
  {
    name: "Navigation",
    description: "Minimal navigation bar with menu support",
  },
  {
    name: "Section",
    description: "Expandable/collapsible sections with tree indicators",
  },
  {
    name: "HexDisplay",
    description: "Terminal-style hex code string displays",
  },
  {
    name: "TerminalModal",
    description: "Modal dialogs with terminal aesthetic",
  },
  {
    name: "TerminalModalSection",
    description: "Structured sections within terminal modals",
  },
  { name: "Footer", description: "Footer component with terminal aesthetic" },
];

export const formComponents: ComponentInfo[] = [
  { name: "TextInput", description: "Terminal-style text input fields" },
  {
    name: "TextArea",
    description: "Multi-line text input with terminal styling",
  },
  {
    name: "DatePicker",
    description: "Date selection component with terminal UI",
  },
  {
    name: "Button",
    description: "Various button styles with terminal aesthetic",
  },
  {
    name: "IconButton",
    description: "Icon-based buttons with hover effects",
  },
  {
    name: "TransitionButton",
    description: "Buttons with smooth transitions",
  },
  { name: "ProgressiveSkeletonButton", description: "Loading state buttons" },
];

export const displayComponents: ComponentInfo[] = [
  {
    name: "DataTable",
    description: "Terminal-styled data tables with sorting and pagination",
  },
  {
    name: "CodeSnippet",
    description: "Syntax-highlighted code displays with copy functionality",
  },
  {
    name: "ProgressBar",
    description: "Progress indicators with terminal styling",
  },
  { name: "Pill", description: "Badge/pill components for tags and labels" },
  {
    name: "Spinner",
    description: "Loading spinners with terminal aesthetic",
  },
  {
    name: "BoxComponent",
    description: "Container components with terminal styling",
  },
];

export const interactiveComponents: ComponentInfo[] = [
  {
    name: "Tabs",
    description: "Tab navigation with terminal styling and tooltips",
  },
  { name: "Breadcrumb", description: "Navigation breadcrumbs" },
  { name: "IconContentSwitcher", description: "Content switcher with icons" },
  { name: "ScrambleText", description: "Animated text scrambling effects" },
];

export const specializedComponents: ComponentInfo[] = [
  {
    name: "SecurityAudit",
    description: "Security audit information displays",
  },
  { name: "BlogPost", description: "Blog post card components" },
];

// Showcase page constants
export const securityHexStrings = [
  "0M000080  01 04 45 54 68 6A 20 5R  69 6D 65 73 20 30 3V 2F  ../E TIMES 03/",
  "H0000090  4A 61 6N 2F 32 30 30 39  J0 43 68 61 6E 63 6Z HC  /AN 2009 CHANCEL",
];

export const audits = [
  {
    date: "February 2024",
    company: "Bishopfox",
    type: "Application Audit (Bishop Fox)",
    status: "Complete",
  },
  {
    date: "January 2023",
    company: "Bishopfox",
    type: "Cloud Pentest (Bishop Fox)",
    status: "Complete",
  },
];

// DataTable sample data
export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  status: "active" | "inactive" | "pending";
  lastLogin: string;
}

export const userData: User[] = [
  {
    id: 1,
    username: "alice_crypto",
    email: "alice@example.com",
    role: "Admin",
    status: "active",
    lastLogin: "2024-11-21",
  },
  {
    id: 2,
    username: "bob_trader",
    email: "bob@example.com",
    role: "User",
    status: "active",
    lastLogin: "2024-11-20",
  },
  {
    id: 3,
    username: "charlie_dev",
    email: "charlie@example.com",
    role: "Developer",
    status: "inactive",
    lastLogin: "2024-11-15",
  },
  {
    id: 4,
    username: "diana_analyst",
    email: "diana@example.com",
    role: "Analyst",
    status: "active",
    lastLogin: "2024-11-21",
  },
  {
    id: 5,
    username: "eve_validator",
    email: "eve@example.com",
    role: "Validator",
    status: "pending",
    lastLogin: "2024-11-19",
  },
];

export const userColumns: Column<User>[] = [
  {
    key: "username",
    header: "Username",
    sortable: true,
  },
  {
    key: "email",
    header: "Email",
    sortable: true,
  },
  {
    key: "role",
    header: "Role",
    sortable: true,
    render: (value) => (
      <span className="px-2 py-1 bg-gray-900 text-gray-300 text-xs border border-gray-800">
        {value}
      </span>
    ),
  },
  {
    key: "status",
    header: "Status",
    sortable: true,
    render: (value) => {
      const colors = {
        active: "text-green-500 border-green-500/30 bg-green-500/10",
        inactive: "text-gray-500 border-gray-500/30 bg-gray-500/10",
        pending: "text-amber-500 border-amber-500/30 bg-amber-500/10",
      };
      return (
        <span
          className={`px-2 py-1 text-xs border uppercase ${
            colors[value as keyof typeof colors]
          }`}
        >
          {value}
        </span>
      );
    },
  },
  {
    key: "lastLogin",
    header: "Last Login",
    sortable: true,
  },
];

export const tableHexStrings = [
  "0xD4T4  01 04 45 54 68 6A 20 5R  69 6D 65 73 20 30 3V 2F  ../TABLE_DATA/",
  "0xINF0  4A 61 6E 2F 32 30 30 39  J0 43 68 61 6E 63 6Z HC  /USERS_LIST_01",
];
