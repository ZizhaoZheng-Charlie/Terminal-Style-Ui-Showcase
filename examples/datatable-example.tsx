import DataTable, { Column } from "../app/components/DataTable";

// Example data types
interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  status: "active" | "inactive" | "pending";
  lastLogin: string;
}

interface Transaction {
  txHash: string;
  from: string;
  to: string;
  amount: number;
  timestamp: string;
  status: "confirmed" | "pending" | "failed";
}

// Sample data
const userData: User[] = [
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

const transactionData: Transaction[] = [
  {
    txHash: "0x7a9f3c2b1d8e4f5a6c7b8d9e0f1a2b3c",
    from: "0x1234...5678",
    to: "0xabcd...ef01",
    amount: 2.5,
    timestamp: "2024-11-21 14:32:15",
    status: "confirmed",
  },
  {
    txHash: "0x8b0e4d3c2f9g5h6i7j8k9l0m1n2o3p4q",
    from: "0x9876...5432",
    to: "0xfedc...ba98",
    amount: 10.75,
    timestamp: "2024-11-21 14:28:03",
    status: "confirmed",
  },
  {
    txHash: "0x9c1f5e4d3a0h6i7j8k9l0m1n2o3p4q5r",
    from: "0x5555...6666",
    to: "0x7777...8888",
    amount: 0.5,
    timestamp: "2024-11-21 14:15:47",
    status: "pending",
  },
  {
    txHash: "0x0d2g6f5e4b1i7j8k9l0m1n2o3p4q5r6s",
    from: "0x2222...3333",
    to: "0x4444...5555",
    amount: 5.0,
    timestamp: "2024-11-21 13:45:22",
    status: "failed",
  },
];

// Column definitions
const userColumns: Column<User>[] = [
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
          className={`px-2 py-1 text-xs border uppercase ${colors[value as keyof typeof colors]}`}
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

const transactionColumns: Column<Transaction>[] = [
  {
    key: "txHash",
    header: "Transaction Hash",
    sortable: false,
    render: (value) => (
      <span className="text-amber-500 hover:text-amber-400 cursor-pointer transition-colors">
        {value.substring(0, 10)}...{value.substring(value.length - 6)}
      </span>
    ),
  },
  {
    key: "from",
    header: "From",
    sortable: false,
  },
  {
    key: "to",
    header: "To",
    sortable: false,
  },
  {
    key: "amount",
    header: "Amount (ETH)",
    sortable: true,
    render: (value) => (
      <span className="text-gray-300 font-semibold">{value.toFixed(2)}</span>
    ),
  },
  {
    key: "timestamp",
    header: "Timestamp",
    sortable: true,
    width: "180px",
  },
  {
    key: "status",
    header: "Status",
    sortable: true,
    render: (value) => {
      const icons = {
        confirmed: "✓",
        pending: "⟳",
        failed: "✗",
      };
      const colors = {
        confirmed: "text-green-500",
        pending: "text-amber-500",
        failed: "text-red-500",
      };
      return (
        <span className={`${colors[value as keyof typeof colors]}`}>
          {icons[value as keyof typeof icons]} {value.toUpperCase()}
        </span>
      );
    },
  },
];

// Example usage components
export function BasicDataTableExample() {
  return (
    <DataTable
      columns={userColumns}
      data={userData}
      showRowNumbers={true}
      enableColumnReorder={true}
    />
  );
}

export function DataTableWithColumnReorderingExample() {
  const handleColumnOrderChange = (newColumns: Column<User>[]) => {
    console.log("Column order changed:", newColumns.map(col => col.key));
  };

  return (
    <DataTable
      columns={userColumns}
      data={userData}
      showRowNumbers={true}
      enableColumnReorder={true}
      onColumnOrderChange={handleColumnOrderChange}
    />
  );
}

export function DataTableWithHexExample() {
  const hexStrings = [
    "0xD4T4  01 04 45 54 68 6A 20 5R  69 6D 65 73 20 30 3V 2F  ../TABLE_DATA/",
    "0xINF0  4A 61 6E 2F 32 30 30 39  J0 43 68 61 6E 63 6Z HC  /USERS_LIST_01",
  ];

  return (
    <DataTable
      columns={userColumns}
      data={userData}
      hexStrings={hexStrings}
      showRowNumbers={true}
    />
  );
}

export function DataTableWithPaginationExample() {
  // Generate more data for pagination demo
  const extendedData = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    username: `user_${String(i + 1).padStart(3, "0")}`,
    email: `user${i + 1}@example.com`,
    role: ["Admin", "User", "Developer", "Analyst", "Validator"][
      Math.floor(Math.random() * 5)
    ],
    status: ["active", "inactive", "pending"][
      Math.floor(Math.random() * 3)
    ] as "active" | "inactive" | "pending",
    lastLogin: `2024-11-${String(Math.floor(Math.random() * 21) + 1).padStart(2, "0")}`,
  }));

  return (
    <DataTable
      columns={userColumns}
      data={extendedData}
      showRowNumbers={true}
      enablePagination={true}
      rowsPerPage={10}
    />
  );
}

export function TransactionTableExample() {
  const hexStrings = [
    "0xBLK  E0 F1 2A 3B 4C 5D 6E 7F  8G 9H 0I 1J 2K 3L 4M 5N  ../BLOCKCHAIN_TX",
  ];

  return (
    <DataTable
      columns={transactionColumns}
      data={transactionData}
      hexStrings={hexStrings}
      showRowNumbers={false}
    />
  );
}

export function EmptyDataTableExample() {
  return (
    <DataTable
      columns={userColumns}
      data={[]}
      showRowNumbers={true}
      enableColumnReorder={true}
    />
  );
}

export function DataTableWithoutReorderingExample() {
  return (
    <DataTable
      columns={userColumns}
      data={userData}
      showRowNumbers={true}
      enableColumnReorder={false}
    />
  );
}

