import React from "react";

function CoinItem({ c }) {
  return (
    <React.Fragment>
      <tr>
        <td></td>
        <td>{c.id}</td>
        <td>{c.symbol}</td>
        <td>{c.priceUsd}</td>
      </tr>
    </React.Fragment>
  );
}
export default CoinItem;
