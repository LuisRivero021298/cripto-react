import React from "react";
import CoinItem from "./CoinItem";

function Table({ coin }) {
  return (
    <React.Fragment>
      <table className="Table highlight">
        <thead className="Table__head">
          <tr>
            <th></th>
            <th>
              <span>Ranking</span>
            </th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className="Table__body">
          {coin.map((c) => {
            return <CoinItem c={c} key={c.id + c.symbol} />;
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Table;
