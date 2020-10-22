import React from "react";
import CoinItem from "./CoinItem";
import SkeletonTable from "./SkeletonTable";

const Table = React.memo(({ coin, history, loading }) => {
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
          {coin.map((c) => {
            return <CoinItem c={c} key={c.id + c.symbol} history={history} />;
          })}
          {loading && <SkeletonTable />}
        </tbody>
      </table>
    </>
  );
});

export default Table;
