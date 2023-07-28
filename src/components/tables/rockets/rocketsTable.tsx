"use client";
import { rocketsColumns } from "./rocketsColumns";
import { RocketsType } from "@/types/rockets-type";
import { DataTable } from "./rocketsDataTable.structure";

export default function RocketsTable({ rockets }: { rockets: RocketsType[] }) {
  return <DataTable columns={rocketsColumns} data={rockets} />;
}
