"use client";

import React from "react";
import DataTable from "./_components/atomic/DataTable";

type Props = {};

export default function Main({}: Props) {
  return (
    <div className="main">
      <h2>공지사항</h2>
      <DataTable />
      <h2>최신 글</h2>
      <DataTable />
      <h2>인기 글</h2>
      <DataTable />
    </div>
  );
}
