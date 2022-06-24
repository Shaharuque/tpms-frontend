import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
const BarChart = () => {
  return (
    <div div className="bar">
      {/* <div div className="lg:w-4/12 md:w-6/12"> */}
      <h1 className=" bg-primary py-1 text-center text-white">
        Total Billed vs Total Paid
      </h1>
      <Bar
        className=" chart p-2"
        data={{
          labels: [
            "December",
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
          ],
          datasets: [
            {
              label: "Billed",
              data: [3328, 1800, 940],
              backgroundColor: "#56BBF1",
              barThickness: 25,
            },
            {
              label: "Paid",
              data: [2.24],
              backgroundColor: "#6CC4A1",
              barThickness: 25,
            },
          ],
        }}
        options={{
          tooltips: {
            mode: "index",
            callbacks: {
              label: function (toolTipItem) {
                return "Revenue: $" + toolTipItem.value;
              },
            },
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  color: "cyan",
                },
                scaleLabel: {
                  labelString: "Months",
                  display: true,
                  fontColor: "blue",
                  fontSize: 20,
                },
                ticks: {
                  fontColor: "green",
                },
              },
            ],
            yAxes: [
              {
                suggestedMax: 10000,
                gridLines: {
                  color: "cyan",
                },
                scaleLabel: {
                  labelString: "Revenue",
                  display: true,
                  fontColor: "blue",
                  fontSize: 20,
                },
                ticks: {
                  beginAtZero: true,
                  fontColor: "green",
                },
              },
            ],
          },
        }}
      ></Bar>
    </div>
  );
};

export default BarChart;
