import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import useColorSkeleton from "../../hooks/UseColorSkeleton";

const SkeletonChart = () => {
  const root = document.getElementById("root");
  const color = useColorSkeleton(root).color;
  const highlightColor = useColorSkeleton(root).highlightColor;
  const widthSize = window.screen.width;
  const height = widthSize > 1080 ? "46vh" : "35vh";
  return (
    <SkeletonTheme color={color} highlightColor={highlightColor}>
      <Skeleton height={height} width={"100%"} />
    </SkeletonTheme>
  );
};

export default SkeletonChart;
