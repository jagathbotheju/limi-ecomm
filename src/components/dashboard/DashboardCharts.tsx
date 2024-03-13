import BestSellingChart from "./BestSellingChart";
import WeeklySalesChart from "./WeeklySalesChart";

const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <WeeklySalesChart />
      <BestSellingChart />
    </div>
  );
};

export default DashboardCharts;
