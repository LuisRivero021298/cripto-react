import React from "react";
import CoinItem from "./CoinItem";

function Table({ coin, history }) {
  return (
    <>
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
            return <CoinItem c={c} key={c.id + c.symbol} history={history} />;
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
