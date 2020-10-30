import React from "react";
import HistoryChart from "./HistoryChart";
import SkeletonChart from "../SkeletonChart/SkeletonChart";

const HistoryChartContainer = ({historic, loading}) => {
  const [priceList, setPriceList] = React.useState([]);
  const [datesList, setDatesList] = React.useState([]);
  
  React.useEffect(() => setOptionsCharts(), [historic]);

  const setOptionsCharts = () => {
    setPriceList(() => 
      historic ? 
      historic.map((p) => p.priceUsd)
      : []
    )
    setDatesList(new Array(24).fill(1).map(() => ""));
  };

  const optionsChart = {
    type: "line",
    data: {
      labels: datesList, //**
      datasets: [
        {
          label: "Coin price",
          fill: true,
          backgroundColor: "rgba(129,87,194,.15)",
          borderColor: "#b388ff",
          borderWidth: 4,
          data: priceList, //**
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
        xAxes: [{
          gridLines: {
            display: false,
          },
        },],
        yAxes: [{
          gridLines: {
            lineWidth: 2,
          },
        },],
      },
      responsive: true,
    },
   };
  
  return (
    <>
      <span className="Title__chart">Prices usd in the last 24 h</span>
      {loading ?  
        <SkeletonChart />: 
      <HistoryChart
        optionsChart={optionsChart}
      />
      }
    </>
  );
}

export default HistoryChartContainer;

