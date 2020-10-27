import React from "react";

function CoinImage({ c }) {
  return (
    <>
      <div className="coin_image">
        { !c.symbol ? 
          <img
            src="../assets/images/no-imagen.png"
            alt="coinimage"
          />
          :
          <img
            src={`https://static.coincap.io/assets/icons/${c.symbol.toLowerCase()}@2x.png`}
            alt="coinimage"
          />
        }
        
      </div>
    </>
  );
}
export default CoinImage;
