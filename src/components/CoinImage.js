import React from "react";

function CoinImage({ c }) {
  return (
    <>
      <div className="coin_image">
        <img
          src={`https://static.coincap.io/assets/icons/${c.symbol.toLowerCase()}@2x.png`}
          alt=""
        />
      </div>
    </>
  );
}
export default CoinImage;
