import React from "react";
import Chart from "chart.js";

function HistoryChart({ id }) {
  console.log(id);
  React.useEffect(() => {
    const container = document.getElementById("chart-history");
    new Chart(container, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  });

  return <canvas id="chart-history" height="100px" width="100px"></canvas>;
}

export default HistoryChart;
