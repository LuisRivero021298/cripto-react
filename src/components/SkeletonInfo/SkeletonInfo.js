import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import useColorSkeleton from "../../hooks/UseColorSkeleton";

function SkeletonInfo() {
  const root = document.getElementById("root");
  const color = useColorSkeleton(root).color;
  const highlightColor = useColorSkeleton(root).highlightColor;
  return (
    <div className="Info__details--right">
      <SkeletonTheme color={color} highlightColor={highlightColor}>
        <Skeleton width={50} />
      </SkeletonTheme>
      <SkeletonTheme color={color} highlightColor={highlightColor}>
        <Skeleton width={50} />
      </SkeletonTheme>
      <SkeletonTheme color={color} highlightColor={highlightColor}>
        <Skeleton width={50} />
      </SkeletonTheme>
      <SkeletonTheme color={color} highlightColor={highlightColor}>
        <Skeleton width={50} />
      </SkeletonTheme>
      <SkeletonTheme color={color} highlightColor={highlightColor}>
        <Skeleton width={50} />
      </SkeletonTheme>
      <SkeletonTheme color={color} highlightColor={highlightColor}>
        <Skeleton width={50} />
      </SkeletonTheme>
    </div>
  );
}

export default SkeletonInfo;
