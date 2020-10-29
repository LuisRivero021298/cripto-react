import React from "react";
import useDollarFilter from "../hooks/UseDollarFilter";
import usePercentFilter from "../hooks/UsePercentFilter";
import useClassPercent from "../hooks/UseClassPercent";
import useGetMin from "../hooks/UseGetMin";
import useGetMax from "../hooks/UseGetMax";
import useGetAvg from "../hooks/UseGetAvg";
import SkeletonInfo from "./SkeletonInfo";

const InfoDetails = ({ data, history, loading }) => {
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
      {loading ? (
        <SkeletonInfo />
      ) : (
        <div className="Info__details--right">
          <span>{data.rank}</span>
          <span>{priceUsd}</span>
          <span>{minPrice}</span>
          <span>{maxPrice}</span>
          <span>{avgPrice}</span>
          <span className={classPercent}>{percentChange}</span>
        </div>
      )}
    </div>
  );
};

export default InfoDetails;
