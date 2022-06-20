import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const TreatmentBarChart = () => {
  return (
    <div>
      <h1 className=" bg-primary py-1 text-center text-white">
        Total Billed vs Total Paid
      </h1>
      <Bar
        className=" chart p-2"
        data={{
          labels: ["April", "May", "June"],
          datasets: [
            {
              label: "2000,3000",
              data: [0.5],
              backgroundColor: "#56BBF1",
              barThickness: 65,
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
                  max: 100,
                },
              },
            ],
          },
        }}
      ></Bar>
    </div>
  );
};

export default TreatmentBarChart;
