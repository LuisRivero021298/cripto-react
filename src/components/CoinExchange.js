import React from "react";

//import useDollarFilter from "../hooks/UseDollarFilter";

function useShowValueExchange(value, change) {
  let newValue = "";
  if (change === "BTC") {
    newValue = `$ ${value}`;
  } else {
    newValue = `BTC ${value}`;
  }
  return newValue;
}

function CoinExchange({ priceUsd }) {
  const [coinToUsd, setCoinToUsd] = React.useState("BTC");
  const [valueExchange, setValueExchange] = React.useState(0);
  const [showExchange, setShowExchange] = React.useState(0);

  const handleExchangeCoin = (e) => {
    const value = e.target.value;
    setValueExchange(value);

    coinToUsd === "BTC"
      ? setShowExchange(() => {
          return value * priceUsd;
        })
      : setShowExchange(() => {
          return value / priceUsd;
        });
  };

  const handleChange = () => {
    setCoinToUsd(() => {
      return coinToUsd === "BTC" ? "USD" : "BTC";
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
            placeholder="0 USD"
            value={valueExchange}
            onChange={handleExchangeCoin}
          />
          <label htmlFor="value-exchange"> {coinToUsd} </label>
        </div>
        <div className="col s6">
          <span className="show__exchange">
            {useShowValueExchange(showExchange, coinToUsd)}
          </span>
        </div>
      </div>
    </>
  );
}

export default CoinExchange;
