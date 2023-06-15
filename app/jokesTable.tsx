"use client";

import { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import Link from "next/link";
type Jokes = {
  Title: string;
  Body: string;
  Author: string;
  Views: number;
  createdAt: Date;
};

type Props = {
  data: Jokes[];
};

const Example = ({ data }: Props) => {
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Jokes>[]>(
    () => [
      {
        accessorKey: "Title",
        header: "Title",
        size: 200,
      },
      {
        accessorKey: "Views",
        header: "Views",
        size: 100,
      },
      {
        accessorKey: "Author",
        header: "Author",
        size: 150,
      },
      {
        accessorKey: "createdAt",
        header: "Created At",
        size: 150,
      },
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} />;
};

export default Example;
