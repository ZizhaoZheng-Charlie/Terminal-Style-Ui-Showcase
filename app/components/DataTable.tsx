"use client";

import { useState, useMemo } from "react";

export interface Column<T = any> {
  key: string;
  header: string;
  sortable?: boolean;
  render?: (value: any, row: T, index: number) => React.ReactNode;
  width?: string;
  align?: "left" | "center" | "right";
}

interface DataTableProps<T = any> {
  columns: Column<T>[];
  data: T[];
  hexStrings?: string[];
  showRowNumbers?: boolean;
  rowsPerPage?: number;
  enablePagination?: boolean;
  enableColumnReorder?: boolean;
  className?: string;
  onColumnOrderChange?: (columns: Column<T>[]) => void;
}

type SortConfig = {
  key: string;
  direction: "asc" | "desc";
} | null;

export default function DataTable<T extends Record<string, any>>({
  columns: initialColumns,
  data,
  hexStrings,
  showRowNumbers = true,
  rowsPerPage = 10,
  enablePagination = false,
  enableColumnReorder = true,
  className = "",
  onColumnOrderChange,
}: DataTableProps<T>) {
  const [columns, setColumns] = useState<Column<T>[]>(initialColumns);
  const [sortConfig, setSortConfig] = useState<SortConfig>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [draggedColumn, setDraggedColumn] = useState<number | null>(null);
  const [dragOverColumn, setDragOverColumn] = useState<number | null>(null);

  // Sorting logic
  const sortedData = useMemo(() => {
    if (!sortConfig) return data;

    const sorted = [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue === bValue) return 0;

      const comparison = aValue > bValue ? 1 : -1;
      return sortConfig.direction === "asc" ? comparison : -comparison;
    });

    return sorted;
  }, [data, sortConfig]);

  // Pagination logic
  const paginatedData = useMemo(() => {
    if (!enablePagination) return sortedData;

    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return sortedData.slice(startIndex, endIndex);
  }, [sortedData, currentPage, rowsPerPage, enablePagination]);

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  const handleSort = (key: string) => {
    const column = columns.find((col) => col.key === key);
    if (!column?.sortable) return;

    setSortConfig((current) => {
      if (current?.key === key) {
        if (current.direction === "asc") {
          return { key, direction: "desc" };
        }
        return null; // Reset sort
      }
      return { key, direction: "asc" };
    });
  };

  const getSortIndicator = (key: string) => {
    if (sortConfig?.key !== key) return "";
    return sortConfig.direction === "asc" ? " ▲" : " ▼";
  };

  const getAlignmentClass = (align?: "left" | "center" | "right") => {
    switch (align) {
      case "left":
        return "text-left";
      case "right":
        return "text-right";
      case "center":
      default:
        return "text-center";
    }
  };

  const getJustifyClass = (align?: "left" | "center" | "right") => {
    switch (align) {
      case "left":
        return "justify-start";
      case "right":
        return "justify-end";
      case "center":
      default:
        return "justify-center";
    }
  };

  // Drag and drop handlers
  const handleDragStart = (index: number) => {
    if (!enableColumnReorder) return;
    setDraggedColumn(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    if (!enableColumnReorder) return;
    e.preventDefault();
    setDragOverColumn(index);
  };

  const handleDragLeave = () => {
    if (!enableColumnReorder) return;
    setDragOverColumn(null);
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    if (!enableColumnReorder) return;
    e.preventDefault();
    
    if (draggedColumn === null || draggedColumn === dropIndex) {
      setDraggedColumn(null);
      setDragOverColumn(null);
      return;
    }

    const newColumns = [...columns];
    const draggedItem = newColumns[draggedColumn];
    newColumns.splice(draggedColumn, 1);
    newColumns.splice(dropIndex, 0, draggedItem);

    setColumns(newColumns);
    setDraggedColumn(null);
    setDragOverColumn(null);
    
    if (onColumnOrderChange) {
      onColumnOrderChange(newColumns);
    }
  };

  const handleDragEnd = () => {
    if (!enableColumnReorder) return;
    setDraggedColumn(null);
    setDragOverColumn(null);
  };

  return (
    <div className={`relative border border-gray-700/30 bg-[#0a0a0a] ${className}`}>
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-500/40 pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-500/40 pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gray-500/40 pointer-events-none z-10"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-500/40 pointer-events-none z-10"></div>

      {/* Optional Hex Display */}
      {hexStrings && hexStrings.length > 0 && (
        <div className="font-mono text-xs text-gray-500/60 space-y-1 p-6 pb-0">
          {hexStrings.map((str, index) => (
            <div key={index} className="leading-relaxed">
              {str}
            </div>
          ))}
        </div>
      )}

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse font-mono text-sm">
          <thead>
            <tr className="border-b border-gray-800">
              {showRowNumbers && (
                <th className="px-4 py-3 text-center text-gray-500 font-normal text-xs w-16">
                  #
                </th>
              )}
              {columns.map((column, index) => (
                <th
                  key={column.key}
                  draggable={enableColumnReorder}
                  onDragStart={() => handleDragStart(index)}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, index)}
                  onDragEnd={handleDragEnd}
                  className={`px-4 py-3 text-xs font-normal text-gray-400 uppercase tracking-wider ${
                    getAlignmentClass(column.align)
                  } ${column.sortable ? "hover:text-amber-500 transition-colors select-none" : ""} ${
                    enableColumnReorder ? "cursor-move" : column.sortable ? "cursor-pointer" : ""
                  } ${draggedColumn === index ? "opacity-40" : ""} ${
                    dragOverColumn === index ? "bg-gray-800/50" : ""
                  } relative`}
                  onClick={() => handleSort(column.key)}
                  style={{ width: column.width }}
                >
                  <div className={`flex items-center gap-1 ${getJustifyClass(column.align)}`}>
                    {enableColumnReorder && (
                      <span className="text-gray-700 text-[10px]">⋮⋮</span>
                    )}
                    <span>{column.header}</span>
                    {column.sortable && (
                      <span className="text-gray-600">
                        {getSortIndicator(column.key) || "⇅"}
                      </span>
                    )}
                  </div>
                  {dragOverColumn === index && draggedColumn !== null && draggedColumn !== index && (
                    <div
                      className={`absolute top-0 ${
                        draggedColumn < index ? "right-0" : "left-0"
                      } w-0.5 h-full bg-amber-500`}
                    />
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (showRowNumbers ? 1 : 0)}
                  className="px-4 py-8 text-center text-gray-600"
                >
                  NO DATA AVAILABLE
                </td>
              </tr>
            ) : (
              paginatedData.map((row, rowIndex) => {
                const actualRowIndex = enablePagination
                  ? (currentPage - 1) * rowsPerPage + rowIndex
                  : rowIndex;
                
                return (
                  <tr
                    key={actualRowIndex}
                    className="border-b border-gray-900 hover:bg-black/40 transition-colors"
                  >
                    {showRowNumbers && (
                      <td className="px-4 py-3 text-center text-gray-600 text-xs">
                        {String(actualRowIndex + 1).padStart(2, "0")}
                      </td>
                    )}
                    {columns.map((column) => (
                      <td
                        key={column.key}
                        className={`px-4 py-3 text-gray-300 ${getAlignmentClass(
                          column.align
                        )}`}
                      >
                        <div className={getAlignmentClass(column.align)}>
                          {column.render
                            ? column.render(row[column.key], row, actualRowIndex)
                            : row[column.key]}
                        </div>
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {enablePagination && totalPages > 1 && (
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-800">
          <div className="text-xs text-gray-500">
            Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
            {Math.min(currentPage * rowsPerPage, sortedData.length)} of{" "}
            {sortedData.length} entries
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-gray-800 text-xs text-gray-400 hover:bg-black hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              PREV
            </button>
            <div className="flex items-center space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => {
                  // Show first page, last page, current page, and pages around current
                  if (
                    page === 1 ||
                    page === totalPages ||
                    Math.abs(page - currentPage) <= 1
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-1 border text-xs transition-colors ${
                          page === currentPage
                            ? "border-amber-500 bg-amber-500/10 text-amber-500"
                            : "border-gray-800 text-gray-400 hover:bg-black hover:text-white"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return (
                      <span key={page} className="px-2 text-gray-600">
                        ...
                      </span>
                    );
                  }
                  return null;
                }
              )}
            </div>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 border border-gray-800 text-xs text-gray-400 hover:bg-black hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              NEXT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

