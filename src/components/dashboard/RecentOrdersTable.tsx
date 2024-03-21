"use client";

import { data } from "@/lib/data";
import { DataTable } from "../DataTable";
import { recentOrderColumns } from "./RecentOrderColumns";

const RecentOrdersTable = () => {
  const tableData = data;
  
  return (
    <div>
      <h2 className="text-xl font-bold my-5">Recent Orders</h2>

      <div className="mt-10">
        <DataTable columns={recentOrderColumns} data={data}/>
      </div>
    </div>
  );
};

export default RecentOrdersTable;
