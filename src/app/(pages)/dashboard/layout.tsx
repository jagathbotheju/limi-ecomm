import DashboardNavbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/Sidebar";

interface Props {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      {/* side bar */}
      <Sidebar />

      {/* main body */}
      <div className="w-full">
        <DashboardNavbar />

        <main className="p-8 bg-slate-900 text-slate-50 min-h-screen mt-16 ml-60">
          {children}
        </main>
        {/* main */}
      </div>
    </div>
  );
};

export default AdminLayout;
