import React from "react";
import CoinExchange from "./CoinExchange";

const CoinExchangeContainer = ({ coin, priceUsd }) => {
  const [coinToUsd, setCoinToUsd] = React.useState(coin);
  const [valueExchange, setValueExchange] = React.useState("");
  const [showExchange, setShowExchange] = React.useState(0);

  React.useEffect(() => setCoinToUsd(coin), [coin]);

  const handleChangeCoin = () => {
    setCoinToUsd(() => (coinToUsd === coin ? "USD" : coin));
    setShowExchange(0);
    setValueExchange("");
  };
  const handleExchangeCoin = (e) => {
    const value = e.target.value;
    setValueExchange(value);

    coinToUsd === coin
      ? setShowExchange(() => value * priceUsd)
      : setShowExchange(() => value / priceUsd);
  };

  return (
    <>
      <button className="btn__primary" type="button" onClick={handleChangeCoin}>
        To {coinToUsd}
      </button>
      <CoinExchange
        valueExchange={valueExchange}
        handleExchangeCoin={handleExchangeCoin}
        coinToUsd={coinToUsd}
        showExchange={showExchange}
        coin={coin}
      />
    </>
  );
};

export default CoinExchangeContainer;
