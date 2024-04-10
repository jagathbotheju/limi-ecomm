import DashboardNavbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/Sidebar";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col dark:bg-slate-900 dark:text-slate-50">
      <DashboardNavbar />

      <main className="grow">{children}</main>
    </div>
  );
};

export default AdminLayout;
