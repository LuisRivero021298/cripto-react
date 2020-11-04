import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import useColorSkeleton from "../../hooks/UseColorSkeleton";
import BtnBack from "../BtnBack/BtnBack";
import CoinImage from "../CoinImage/CoinImage";

function HeaderDetails({ coin, loading }) {
  const root = document.getElementById("root");
  const color = useColorSkeleton(root).color;
  const highlightColor = useColorSkeleton(root).highlightColor;
  return (
    <header className="Header--detail animate__animated animate__fadeInRight">
      <section className="Header__left">
        <BtnBack />
        {loading ? (
          <>
            <br />
            <SkeletonTheme color={color} highlightColor={highlightColor}>
              <Skeleton width={100} height={25} />
            </SkeletonTheme>
          </>
        ) : (
          <h1>
            {coin.id}
            <span>{coin.symbol}</span>
          </h1>
        )}
      </section>
      <section className="Header__right">
        {loading ? (
          <SkeletonTheme color={color} highlightColor={highlightColor}>
            <Skeleton circle={true} height={80} width={80} />
          </SkeletonTheme>
        ) : (
          <CoinImage cripto={coin} />
        )}
      </section>
    </header>
  );
}

export default HeaderDetails;
