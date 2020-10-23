import React from "react";

function CoinImage({ c }) {
  let image = "";
  if (c.symbol) {
    image = c.symbol.toLowerCase();
  }
  return (
    <>
      <div className="coin_image">
        <img
          src={`https://static.coincap.io/assets/icons/${image}@2x.png`}
          alt="coinimage"
        />
      </div>
    </>
  );
}
export default CoinImage;
