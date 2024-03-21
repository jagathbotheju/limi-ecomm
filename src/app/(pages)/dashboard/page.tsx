import DashboardCharts from "@/components/dashboard/DashboardCharts";
import Heading from "@/components/dashboard/Heading";
import LargeCards from "@/components/dashboard/LargeCards";
import RecentOrdersTable from "@/components/dashboard/RecentOrdersTable";
import SmallCards from "@/components/dashboard/SmallCards";

const AdminDashboardPage = () => {
  return (
    <>
      <Heading title="Dashboard Overview" />

      <LargeCards />
      <SmallCards />
      <DashboardCharts />

      {/* recent orders table */}
      <RecentOrdersTable />
    </>
  );
};

export default AdminDashboardPage;
