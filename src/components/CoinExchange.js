import React from "react";
import numeral from "numeral";

function useShowValueExchange(value, change, coin) {
  let newValue = "";
  if (change === coin) {
    newValue = `$ ${numeral(value).format("(# 0.00000)")}`;
  } else {
    newValue = `${coin} ${numeral(value).format("(# 0.00000000)")}`;
  }
  return newValue;
}

const CoinExchange = React.memo(({ priceUsd, coin }) => {
  const [coinToUsd, setCoinToUsd] = React.useState(coin);
  const [valueExchange, setValueExchange] = React.useState("");
  const [showExchange, setShowExchange] = React.useState(0);

  console.log(coin);
  console.log(coinToUsd);

  const handleExchangeCoin = (e) => {
    const value = e.target.value;
    setValueExchange(value);

    coinToUsd === coin
      ? setShowExchange(() => {
          return value * priceUsd;
        })
      : setShowExchange(() => {
          return value / priceUsd;
        });
  };

  const handleChange = () => {
    setCoinToUsd(() => {
      return coinToUsd === coin ? "USD" : coin;
    });
  };

  return (
    <>
      <button className="btn__primary" type="button" onClick={handleChange}>
        Change
      </button>
      <div className="row">
        <div className="input-field col s6">
          <input
            id="value-exchange"
            type="number"
            value={valueExchange}
            onChange={handleExchangeCoin}
          />
          <label htmlFor="value-exchange"> {coinToUsd} </label>
        </div>
        <div className="col s6">
          <span className="show__exchange">
            {useShowValueExchange(showExchange, coinToUsd, coin)}
          </span>
        </div>
      </div>
    </>
  );
});

export default CoinExchange;
