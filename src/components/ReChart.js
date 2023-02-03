import React, { useState, useEffect } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";

const ReChart = ({ data, value }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        borderColor: "#3333ff",
        fill: false,
      },
    ],
  });
  console.log(chartData);
  useEffect(() => {
    const filteredData = data.find((d) => d.name === value);
    if (filteredData) {
      setChartData({
        labels: filteredData.data.map((d) => d.label),
        datasets: [
          {
            label: filteredData.name,
            data: filteredData.data.map((d) => d.value),
            borderColor: "#3333ff",
            fill: false,
          },
        ],
      });
    }
  }, [value]);

  const renderChart = () => {
    if (chartData.labels.length <= 2) {
      return <Pie data={chartData} />;
    } else if (chartData.labels.length >= 3 && chartData.labels.length < 10) {
      return <Bar data={chartData} />;
    } else {
      return <Line data={chartData} />;
    }
  };

  return <div>{renderChart()}</div>;
};

export default ReChart;
