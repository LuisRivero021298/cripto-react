import React from "react";
import noImagen from "../../assets/images/no-imagen.png";

const CoinImage = ({ cripto }) => {
  return (
    <>
      <div className="Coin__image">
        {!cripto.symbol ? 
          <img
            src={noImagen}
            alt="coinimage"
          />
          :
          <img
            src={`https://static.coincap.io/assets/icons/${cripto.symbol.toLowerCase()}@2x.png`}
            alt="coinimage"
          />
        }
      </div>
    </>
  );
}
export default CoinImage;
