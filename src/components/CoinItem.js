import React from "react";
import numeral from "numeral";

import CoinImage from "./CoinImage";

function useDollarFilter(value) {
  return !value ? "$ 0" : `$ ${numeral(value).format("(# 0.00a)")}`;
}

function usePercentFilter(value) {
  return !value ? "0%" : `${parseFloat(value).toFixed(2)}%`;
}

function useClassPercent(changePercent) {
  return parseFloat(changePercent) > 0 ? " up" : " down";
}

const CoinItem = React.memo(({ c, history }) => {
  const priceUsd = useDollarFilter(c.priceUsd);
  const changePercent = usePercentFilter(c.changePercent24Hr);
  let classPercent = "show-md";
  classPercent += useClassPercent(changePercent);

  const handlePushHistory = () => {
    history.push(`/cripto/${c.id}`);
  };

  return (
    <>
      <tr className="Table__item" onClick={handlePushHistory}>
        <td>
          <CoinImage c={c} />
        </td>
        <td>#{c.rank}</td>
        <td>{c.symbol}</td>
        <td>{priceUsd}</td>
        <td className={classPercent}> {changePercent}</td>
      </tr>
    </>
  );
});
export default CoinItem;
