import React from "react";
import CoinItem from "./CoinItem";

function Table({ coin }) {
  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>
              <span>Ranking</span>
            </th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {coin.map((c) => {
            return <CoinItem c={c} key={c.id + c.symbol} />;
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Table;
