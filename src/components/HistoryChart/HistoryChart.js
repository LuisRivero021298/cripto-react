import React from "react";
import Chart from "chart.js";

const HistoryChart = React.memo(({ optionsChart }) => {
  React.useEffect(() => {
    const container = document.getElementById("chart-history");
    new Chart(container, optionsChart);
  });
  return (
    <>
      <canvas
        id="chart-history"
        style={{ height: "35vh", width: "99%" }}
      ></canvas>
    </>
  );
});

export default HistoryChart;
