import React from "react";
import useDollarFilter from "../hooks/UseDollarFilter";
import usePercentFilter from "../hooks/UsePercentFilter";
import useClassPercent from "../hooks/UseClassPercent";

function useGetMin(history) {
  return Math.min(...history.map((h) => parseFloat(h.priceUsd).toFixed(2)));
}

function useGetMax(history) {
  return Math.max(...history.map((h) => parseFloat(h.priceUsd).toFixed(2)));
}

function useGetAvg(history) {
  let subTotal = 0;
  for (let i = 0; i < history.length; i++) {
    subTotal += parseFloat(history[i].priceUsd);
  }
  return subTotal / history.length;
}

function InfoDetails({ data, history }) {
  const priceUsd = useDollarFilter(data.priceUsd);
  const percentChange = usePercentFilter(data.changePercent24Hr);
  const classPercent = useClassPercent(percentChange);
  const minPrice = useDollarFilter(useGetMin(history));
  const maxPrice = useDollarFilter(useGetMax(history));
  const avgPrice = useDollarFilter(useGetAvg(history));

  return (
    <div className="Info__details">
      <div className="Info__details--left">
        <span>Ranking</span>
        <span>Actual price</span>
        <span>Low price</span>
        <span>High price</span>
        <span>Avg price</span>
        <span>Variation in 24h</span>
      </div>
      <div className="Info__details--right">
        <span>{data.rank}</span>
        <span>{priceUsd}</span>
        <span>{minPrice}</span>
        <span>{maxPrice}</span>
        <span>{avgPrice}</span>
        <span className={classPercent}>{percentChange}</span>
      </div>
    </div>
  );
}

export default InfoDetails;
