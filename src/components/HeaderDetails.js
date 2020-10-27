import React from "react";

import Skeleton from "react-loading-skeleton";
import BtnBack from "./BtnBack";
import CoinImage from "./CoinImage";

function HeaderDetails({ coin, loading }) {
  return (
    <header className="Header--detail">
      <section className="Header__left">
        <BtnBack />
        {loading ? (
          <>
            <br />
            <Skeleton width={100} />
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
          <Skeleton circle={true} height={80} width={80} />
        ) : (
          <CoinImage c={coin} />
        )}
      </section>
    </header>
  );
}

export default HeaderDetails;
