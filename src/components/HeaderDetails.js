import React from "react";

import BtnBack from "./BtnBack";
import CoinImage from "./CoinImage";

function HeaderDetails({ coin, loading }) {
  return (
    <header className="Header--detail">
      <section className="Header__left">
        <BtnBack />
        <h1>
          {coin.id}
          <span>{coin.symbol}</span>
        </h1>
      </section>
      <section className="Header__right">
        {loading ? <div>Hola</div> : <CoinImage c={coin} />}
      </section>
    </header>
  );
}

export default HeaderDetails;
