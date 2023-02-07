import React, { useState, useEffect } from "react";
import { Line, Bar, Radar } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
import _ from "lodash";

const ReChart = ({ data, valueOne, valueTwo, option, chartType }) => {
  const [chartDataOne, setChartDataOne] = useState({
    label: "",
    data: [],
  });

  const [chartDataTwo, setChartDataTwo] = useState({
    label: "",
    data: [],
  });

  useEffect(() => {
    const filteredData = data.find((d) => d.name === valueOne);
    if (filteredData) {
      setChartDataOne({
        label: _.map(filteredData.data, "year"),
        data: _.map(filteredData.data, option.toLowerCase()),
      });
    }
  }, [valueOne, data, option]);

  useEffect(() => {
    const filteredData = data.find((d) => d.name === valueTwo);

    if (filteredData) {
      setChartDataTwo({
        label: _.map(filteredData.data, "year"),
        data: _.map(filteredData.data, option.toLowerCase()),
      });
    }
  }, [valueTwo, data, option]);

  const preset = {
    labels: chartDataOne.label,
    datasets: [
      {
        label: valueOne,
        data: chartDataOne.data,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 1,
      },
      {
        label: valueTwo,
        data: chartDataTwo.data,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    animation: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Line Chart",
      },
    },
  };

  const renderChart = () => {
    if (chartType === "line") {
      return <Line options={options} data={preset} />;
    } else if (chartType === "bar") {
      return <Bar options={options} data={preset} />;
    } else if (chartType === "radar") {
      return <Radar options={options} data={preset} />;
    }
  };

  return <div>{renderChart()}</div>;
};

export default ReChart;
