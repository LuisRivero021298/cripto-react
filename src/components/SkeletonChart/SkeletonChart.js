import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import useColorSkeleton from "../../hooks/UseColorSkeleton";

const SkeletonChart = () => {
  const root = document.getElementById("root");
  const color = useColorSkeleton(root).color;
  const highlightColor = useColorSkeleton(root).highlightColor;
  return (
    <SkeletonTheme color={color} highlightColor={highlightColor}>
      <Skeleton height={220} width={"100%"} />
    </SkeletonTheme>
  );
}

export default SkeletonChart;
