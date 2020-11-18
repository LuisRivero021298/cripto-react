import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import useColorSkeleton from "../../hooks/UseColorSkeleton";

const SkeletonExchange = () => {
  const root = document.getElementById("root");
  const color = useColorSkeleton(root).color;
  const highlightColor = useColorSkeleton(root).highlightColor;
  return (
    <>
      <SkeletonTheme color={color} highlightColor={highlightColor}>
        <Skeleton width={100} height={40} />
      </SkeletonTheme>
      <br />
      <br />
      <SkeletonTheme color={color} highlightColor={highlightColor}>
        <Skeleton width={200} height={40} />
      </SkeletonTheme>
    </>
  );
}

export default SkeletonExchange;

