import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import "../../App.css";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const NeoChart = ({ data }) => {
  const labels = data.map((neo) => neo.name);
  const distances = data.map((neo) => parseFloat(neo.close_approach_data[0].miss_distance.kilometers));

  const chartData = {
    labels,
    datasets: [
      {
        label: "Miss Distance (km)",
        data: distances,
        backgroundColor: distances.map((d) => (d < 1000000 ? "rgba(255, 99, 132, 0.7)" : "rgba(0, 191, 255, 0.7)")),
        borderColor: distances.map((d) => (d < 1000000 ? "rgba(255, 0, 0, 1)" : "rgba(0, 191, 255, 1)")),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { labels: { color: "#ffffff" } },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.raw;
            return `${value.toLocaleString()} km`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#ffffff" },
      },
      y: {
        title: {
          display: true,
          text: "Distance (km)",
          color: "#ffffff",
        },
        ticks: {
          color: "#ffffff",
          callback: (value) => value.toLocaleString(),
        },
      },
    },
  };

  return (
    <div className="mt-5 chart-container">
      <h4 className="text-center mb-3">Asteroid Miss Distances</h4>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default NeoChart;
