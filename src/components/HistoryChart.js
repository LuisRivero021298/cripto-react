import React from "react";
import Chart from "chart.js";

const HistoryChart = React.memo(({ data }) => {
  React.useEffect(() => {
    const priceList = data
      ? data.map((p) => {
          return p.priceUsd;
        })
      : [];
    const datesList = new Array(24).fill(1).map(() => "");
    const container = document.getElementById("chart-history");

    new Chart(container, {
      type: "line",
      data: {
        labels: datesList,
        datasets: [
          {
            label: "Coin price",
            fill: true,
            backgroundColor: "rgba(129,87,194,.3)",
            borderColor: "#7e57c2",
            borderWidth: 4,
            data: priceList,
            steppedLine: false,
            pointBackgroundColor: "#4d2c91",
            pointBorderColor: "#4d2c91",
            pointRadius: 1,
            pointHoverRadius: 5,
            lineTension: 0.4,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                lineWidth: 2,
              },
            },
          ],
        },
        title: {
          display: true,
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontColor: "#3D3D3D",
          text: "Prices usd in the last 24 h",
          fontSize: 20,
          padding: 10,
        },
        responsive: true,
      },
    });
  });

  return (
    <canvas
      id="chart-history"
      style={{ height: "35vh", width: "99%" }}
    ></canvas>
  );
});

export default HistoryChart;
