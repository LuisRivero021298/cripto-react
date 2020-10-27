import React from "react";
import Chart from "chart.js";

const HistoryChart = React.memo(({ data, history }) => {
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
            backgroundColor: "rgba(129,87,194,.15)",
            borderColor: "#b388ff",
            borderWidth: 4,
            data: priceList,
            steppedLine: false,
            pointBackgroundColor: "#805acb",
            pointBorderColor: "#805acb",
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
          fontFamily: "Montserrat",
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

  if (history) {
    return <div>Loading...</div>;
  }
  return (
    <canvas
      id="chart-history"
      style={{ height: "35vh", width: "99%" }}
    ></canvas>
  );
});

export default HistoryChart;
