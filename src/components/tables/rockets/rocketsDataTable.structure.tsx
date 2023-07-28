/**
 * Renders a table with customizable columns and sorting functionality.
 * @param columns - An array of objects defining the columns of the table.
 * @param data - An array of objects containing the data to be displayed in the table.
 * @returns A React component that renders the table.
 */
"use client";

import * as React from "react";
import {
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { DataTableProps } from "@/interfaces/IDataTableProps";

export function RocketDataTable<TData, TValue>({
  columns, // Array of column configurations for the table
  data, // Array of data to be displayed in the table
}: DataTableProps<TData, TValue>) {
  // State for handling sorting of the table
  const [sorting, setSorting] = React.useState<SortingState>([]);

  // State for handling column visibility settings
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  // Initialize the table using the provided data and columns
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnVisibility,
    },
  });

  return (
    <div>
      {/* Dropdown menu for hiding/showing columns */}
      <div className="dropdown flex justify-end m-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="ml-auto">Hide/Show Columns</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* List of columns that can be hidden/shown */}
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Table container with border */}
      <div className="rounded-md border">
        {/* Table Header */}
        <Table className="text-center">
          <TableHeader>
            {/* Loop through header groups */}
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {/* Loop through individual headers */}
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-center">
                      {/* Render the header content */}
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          {/* Table Body */}
          <TableBody>
            {/* Check if there are rows in the table */}
            {table.getRowModel().rows?.length ? (
              // If there are rows, loop through and render them
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {/* Loop through visible cells of each row */}
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="border-r">
                      {/* Render the cell content */}
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              // If there are no rows, display a message
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
