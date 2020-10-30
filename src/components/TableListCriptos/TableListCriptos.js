import React from "react";
import TableItemCripto from "../TableItemCripto/TableItemCripto";
import SkeletonTable from "../SkeletonTable/SkeletonTable";

const TableListCriptos = React.memo(({ coin, history, loading }) => {
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
            return <TableItemCripto c={c} key={c.id + c.symbol} history={history} />;
          })}
          {loading && <SkeletonTable />}
        </tbody>
      </table>
    </>
  );
});

export default TableListCriptos;
