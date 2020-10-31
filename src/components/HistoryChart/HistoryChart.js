import React from "react";
import Chart from "chart.js";

const HistoryChart = React.memo(({ optionsChart }) => {
  React.useEffect(() => {
    const container = document.getElementById("chart-history");
    new Chart(container, optionsChart);
  });

  const widthSize = window.screen.width;
  const height = widthSize > 1080 ? "50vh" : "35vh";
  return (
    <>
      <canvas id="chart-history" style={{ height, width: "99%" }}></canvas>
    </>
  );
});

export default HistoryChart;
