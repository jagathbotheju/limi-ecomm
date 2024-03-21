"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const BestSellingChart = () => {
  const data = {
    labels: ["Cabbage", "Watermelon", "Broccoli", "Maize"],
    datasets: [
      {
        label: "# of Votes",
        data: [50, 10, 20, 20],
        backgroundColor: [
          "rgba(245, 40, 145, 0.8)",
          "rgba(39, 95, 245, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
        ],
        borderColor: [
          "rgba(245, 40, 145, 0.4)",
          "rgba(39, 95, 245, 0.4)",
          "rgba(255, 206, 86, 4)",
          "rgba(75, 192, 192, 4)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="dark:bg-slate-700 p-8 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-5">Best Selling Charts</h2>

      <div className="p-4">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default BestSellingChart;
