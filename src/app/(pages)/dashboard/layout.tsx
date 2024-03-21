import DashboardNavbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/Sidebar";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      {/* side bar */}
      <DashboardNavbar />
      {/* <Sidebar showSidebar={showSidebar} /> */}

      {/* main body */}
      <div className="w-full">
        <main
          className={cn(
            "p-8 dark:bg-slate-900 dark:text-slate-50 min-h-screen mt-16 flex-grow ml-0 z-0"
          )}
        >
          {children}
        </main>
        {/* main */}
      </div>
    </div>
  );
};

export default AdminLayout;
