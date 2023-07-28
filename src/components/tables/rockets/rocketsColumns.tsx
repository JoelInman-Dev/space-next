"use client";

import H4 from "@/components/typography/h4";
import { Button } from "@/components/ui/button";
import { RocketsType } from "@/types/rockets-type";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export const rocketsColumns: ColumnDef<RocketsType>[] = [
  {
    accessorKey: "name",
    header: () => {
      return <H4>Name</H4>;
    },
  },
  {
    accessorKey: "type",
    header: () => {
      return <H4>Type</H4>;
    },
  },

  {
    accessorKey: "firstFlight",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <H4>First Flight</H4>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    accessorKey: "country",
    header: () => {
      return <H4>Country</H4>;
    },
  },
  {
    accessorKey: "company",
    header: () => {
      return <H4>Company</H4>;
    },
  },
  {
    accessorKey: "costPerLaunch",
    header: () => {
      return <H4>Cost to Launch</H4>;
    },
  },
  {
    accessorKey: "engine.type",
    header: () => {
      return <H4>Engine Type</H4>;
    },
  },
  {
    accessorKey: "engine.propellant.mix",
    header: () => {
      return <H4>Propellant Mix</H4>;
    },
  },
  {
    accessorKey: "active",
    header: () => {
      return <H4>Active</H4>;
    },
  },
  {
    accessorKey: "height",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <H4>Height(M)</H4>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "diameter",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <H4>Diameter(M)</H4>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "mass",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <H4>Mass(KG)</H4>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
