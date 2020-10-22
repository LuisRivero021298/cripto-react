import React from "react";
import Skeleton from "react-loading-skeleton";

function SkeletonTable() {
  return new Array(10).fill(1).map((_, i) => {
    return (
      <tr key={i}>
        <td>
          <Skeleton circle={true} height={45} width={45} />
        </td>
        <td>
          <Skeleton width={40} />
        </td>
        <td>
          <Skeleton width={50} />
        </td>
        <td>
          <Skeleton width={70} />
        </td>
        <td className="show-md">
          <Skeleton width={60} />
        </td>
      </tr>
    );
  });
}

export default SkeletonTable;
