import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
const LineChart = () => {
  return (
    // <div div className="lg:w-4/12 md:w-6/12">
    <div div className="">
      <h1 className=" bg-primary py-1 text-center text-white">
        Charge Analysis by Service Date
      </h1>
      <Line
        className=" chart p-2"
        data={{
          labels: ["December", "January", "February", "March", "April", "May"],
          datasets: [
            {
              label: "Billed",
              data: [3328, 1800, 940, 0, 0, 0],
              backgroundColor: "#56BBF1",
              barThickness: 35,
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
                  color: "#56BBF1",
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
      ></Line>
    </div>
  );
};

export default LineChart;
