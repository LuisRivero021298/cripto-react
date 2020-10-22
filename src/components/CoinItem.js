import React from "react";
import numeral from "numeral";

import CoinImage from "./CoinImage";

function useDollarFilter(value) {
  return !value ? "$ 0" : `$ ${numeral(value).format("(# 0.00a)")}`;
}
function CoinItem({ c, history }) {
  const priceUsd = useDollarFilter(c.priceUsd);

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
      </tr>
    </>
  );
}
export default CoinItem;
