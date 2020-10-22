import React from "react";
import numeral from "numeral";

function useDollarFilter(value) {
  return !value ? "$ 0" : `$ ${numeral(value).format("(# 0.00a)")}`;
}

function CoinItem({ c }) {
  const priceUsd = useDollarFilter(c.priceUsd);
  return (
    <React.Fragment>
      <tr className="Table__item">
        <td>
          <div className="coin_image">
            <img
              src={`https://static.coincap.io/assets/icons/${c.symbol.toLowerCase()}@2x.png`}
              alt=""
            />
          </div>
        </td>
        <td>#{c.rank}</td>
        <td>{c.symbol}</td>
        <td>{priceUsd}</td>
      </tr>
    </React.Fragment>
  );
}
export default CoinItem;
