import React from "react";
import Chart from "chart.js";

function HistoryChart({ data }) {
  const labelTimeOptions = {
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  React.useEffect(() => {
    const price = data
      ? data.map((p) => {
          return p.priceUsd;
        })
      : [];

    const dates = data.map((d) =>
      new Intl.DateTimeFormat("es-PE", labelTimeOptions).format(
        new Date(d.date)
      )
    );

    const container = document.getElementById("chart-history");

    new Chart(container, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            label: "Coin price",
            backgroundColor: "#6fff5a",
            borderColor: "#6fff5a",
            data: price,
            pointBackgroundColor: "#6fff5a",
            pointRadius: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Prices usd in the last 24 h",
          fontSize: 23,
          padding: 10,
          fontColor: "#1E1F1E",
        },
        responsive: true,
      },
    });
  });

  return <canvas id="chart-history" height="80px" width="80px"></canvas>;
}

export default HistoryChart;
