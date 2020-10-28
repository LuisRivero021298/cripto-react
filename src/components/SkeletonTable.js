import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function SkeletonTable() {
  const root = document.getElementById("root");
  const color = root.classList.contains("dark")
    ? "rgba(255, 255, 255, 0.11)"
    : "rgba(1, 1, 1, 0.11)";
  const highlightColor = root.classList.contains("dark")
    ? "rgba(255, 255, 255, 0.1)"
    : "rgba(255, 255, 255, 0.1)";
  return new Array(10).fill(1).map((_, i) => {
    return (
      <tr key={i}>
        <td>
          <SkeletonTheme color={color} highlightColor={highlightColor}>
            <Skeleton circle={true} height={45} width={45} />
          </SkeletonTheme>
        </td>
        <td>
          <SkeletonTheme color={color} highlightColor={highlightColor}>
            <Skeleton width={40} />
          </SkeletonTheme>
        </td>
        <td>
          <SkeletonTheme color={color} highlightColor={highlightColor}>
            <Skeleton width={50} />
          </SkeletonTheme>
        </td>
        <td>
          <SkeletonTheme color={color} highlightColor={highlightColor}>
            <Skeleton width={70} />
          </SkeletonTheme>
        </td>
        <td className="show-md">
          <SkeletonTheme color={color} highlightColor={highlightColor}>
            <Skeleton width={60} />
          </SkeletonTheme>
        </td>
      </tr>
    );
  });
}

export default SkeletonTable;
