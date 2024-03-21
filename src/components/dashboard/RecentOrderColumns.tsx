import { ColumnDef } from "@tanstack/react-table"

export type RecentOrderColumnType={
    id: number,
    product: string,
    color: string,
    category: string,
    price: number,
}

export const recentOrderColumns: ColumnDef<RecentOrderColumnType>[] = [
    {
      accessorKey: "id",
      header: 'ID',
    },
    {
      accessorKey: "product",
      header: 'NAME',
    },
    {
      accessorKey: "color",
      header: 'COLOR',
    },
    {
      accessorKey: "category",
      header: 'CATEGORY',
    },
    {
      accessorKey: "price",
      header: 'PRICE',
    },
  ]
  