"use client";

import React from "react";
import DataTable from "./_components/atomic/DataTable";

type Props = {};

export default function Main({}: Props) {
  return (
    <div className="main">
      <DataTable />
      <DataTable />
      <DataTable />
    </div>
  );
}
