import React from "react";
import Chart from "chart.js";

const HistoryChart = React.memo(({ datesList, priceList }) => {
  React.useEffect(() => {
    const container = document.getElementById("chart-history");
    const optionsChart = {
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
        responsive: true,
      },
    };
    new Chart(container, optionsChart);
  });
  return (
    <>
      <span className="Title__chart">Prices usd in the last 24 h</span>
      <canvas
        id="chart-history"
        style={{ height: "35vh", width: "99%" }}
      ></canvas>
    </>
  );
});

export default HistoryChart;
