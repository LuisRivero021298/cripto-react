import React from "react";
import Chart from "chart.js";

function HistoryChart({ data }) {
  const labelTimeOptions = {
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  React.useEffect(() => {
    const priceList = data
      ? data.map((p) => {
          return p.priceUsd;
        })
      : [];

    const datesList = data.map((d) =>
      new Intl.DateTimeFormat("es-PE", labelTimeOptions).format(
        new Date(d.date)
      )
    );

    const filterDates = () => {
      let historyDateList = [];
      let acum = 0;
      for (let i = 0; i < data.length; i++) {
        acum = acum + 1;
        if (acum === 5) {
          historyDateList.push(datesList[i]);
          acum = 0;
        } else {
          historyDateList.push("");
        }
      }
      return historyDateList;
    };

    const historyDateList = filterDates();

    const container = document.getElementById("chart-history");

    //const colors = ['#99FE8E', '#6fff5a'];
    new Chart(container, {
      type: "line",
      data: {
        labels: historyDateList,
        datasets: [
          {
            label: "Coin price",
            fill: false,
            borderColor: "#6fff5a",
            borderWidth: 4,
            data: priceList,
            steppedLine: false,
            pointBackgroundColor: "#5CCC4C",
            pointBorderColor: "#5CCC4C",
            pointRadius: 3,
            pointHoverRadius: 5,
            lineTension: 0.2,
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
