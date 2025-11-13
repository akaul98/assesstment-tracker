"use client"

import { Switch } from "@/components/ui/switch"
import { ColumnDef } from "@tanstack/react-table"
import { UserLegacy } from "../../../components/users/users-data-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export const columns = (onChangeStatus: (id:number, status:boolean) => void): ColumnDef<UserLegacy, unknown>[] => [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
        header: ({ column }) => {
      return (
      <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },

  {
    accessorKey: "email",
      header: ({ column }) => {
      return (
      <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "designation",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Designation
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },

  {
    accessorKey: "department",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Department
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Switch
        checked={row.getValue("status") === "Active"}
        onCheckedChange={value => onChangeStatus(row.original.id, value)}
        className="data-table-switch"
      />
    )
  },
]
