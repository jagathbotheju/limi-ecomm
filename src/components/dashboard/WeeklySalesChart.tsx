"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
//import {faker }from 'faker';
import { faker } from "@faker-js/faker";
import { useMemo } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  tension: 0.4,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data1 = {
  labels,
  datasets: [
    {
      label: "Sales",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const data2 = {
  labels,
  datasets: [
    {
      label: "Orders",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const WeeklySalesChart = () => {
  return (
    <div className="dark:bg-slate-700 p-8 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-5">Weekly Sales</h2>

      <Tabs defaultValue="sales" className="h-full">
        <TabsList className="bg-white grid w-full grid-cols-2 dark:bg-slate-700 text-slate-300 gap-5">
          <TabsTrigger
            value="sales"
            className="dark:bg-slate-700 dark:border-b-slate-600 border-b-2 data-[state=active]:bg-transparent data-[state=active]:text-orange-600 data-[state=active]:border-b-orange-600"
          >
            Sales
          </TabsTrigger>
          <TabsTrigger
            value="orders"
            className="dark:bg-slate-700 dark:border-b-slate-600 border-b-2 data-[state=active]:bg-transparent data-[state=active]:text-orange-600 data-[state=active]:border-b-orange-600"
          >
            Orders
          </TabsTrigger>
        </TabsList>
        <TabsContent value="sales" className="h-full mt-10">
          {/* sales chart */}
          <Line options={options} data={data1} />
        </TabsContent>
        <TabsContent value="orders" className="h-full mt-10">
          {/* orders chart */}
          <Line options={options} data={data2} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WeeklySalesChart;
