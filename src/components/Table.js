import React from "react";
import CoinItem from "./CoinItem";
import SkeletonTable from "./SkeletonTable";

function Table({ coin, history, loading }) {
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
            <th className="show-md">Change Avg</th>
          </tr>
        </thead>
        <tbody className="Table__body">
          {loading ? (
            <SkeletonTable />
          ) : (
            coin.map((c) => {
              return <CoinItem c={c} key={c.id + c.symbol} history={history} />;
            })
          )}
        </tbody>
      </table>
    </>
  );
}

export default Table;
