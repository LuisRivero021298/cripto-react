import React from "react";

function useShowValueExchange(value, change, coin) {
  let newValue = "";
  if (change === coin) {
    newValue = `$ ${value}`;
  } else {
    newValue = `${coin} ${value}`;
  }
  return newValue;
}

const CoinExchange = React.memo(({ priceUsd, coin }) => {
  const [coinToUsd, setCoinToUsd] = React.useState(coin);
  const [valueExchange, setValueExchange] = React.useState("");
  const [showExchange, setShowExchange] = React.useState(0);

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
    setShowExchange(0);
    setValueExchange("");
  };

  return (
    <>
      <button className="btn__primary" type="button" onClick={handleChange}>
        Change
      </button>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="value-exchange"
            type="number"
            value={valueExchange}
            onChange={handleExchangeCoin}
          />
          <label htmlFor="value-exchange"> {coinToUsd} </label>
          <span className="show__exchange">
            {useShowValueExchange(showExchange, coinToUsd, coin)}
          </span>
        </div>
      </div>
    </>
  );
});

export default CoinExchange;
