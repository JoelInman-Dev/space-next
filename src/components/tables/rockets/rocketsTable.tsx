"use client";
import { rocketsColumns } from "./rocketsColumns";
import { RocketsType } from "@/types/rockets-type";
import { RocketDataTable } from "./rocketsDataTable.structure";

export default function RocketsTable({ rockets }: { rockets: RocketsType[] }) {
  return <RocketDataTable columns={rocketsColumns} data={rockets} />;
}
