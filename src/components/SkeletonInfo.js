import React from "react";
import Skeleton from "react-loading-skeleton";

function SkeletonInfo({}) {
  return (
    <div className="Info__details--right">
      <Skeleton width={50} />
      <Skeleton width={50} />
      <Skeleton width={50} />
      <Skeleton width={50} />
      <Skeleton width={50} />
      <Skeleton width={50} />
    </div>
  );
}

export default SkeletonInfo;
