import React from "react";

function CoinItem({ c }) {
  return (
    <React.Fragment>
      <tr className="Table__item">
        <td>
          <div className="simule_img"></div>
        </td>
        <td>{c.rank}</td>
        <td>{c.symbol}</td>
        <td>{c.priceUsd}</td>
      </tr>
    </React.Fragment>
  );
}
export default CoinItem;
