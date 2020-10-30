import React from "react";
import useShowValueExchange from "../../hooks/UseShowValueExchange";

const CoinExchange = React.memo(
  ({ valueExchange, handleExchangeCoin, coinToUsd, showExchange, coin }) => {
    return (
      <>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="value-exchange"
              type="number"
              value={valueExchange}
              onChange={handleExchangeCoin}
            />
            <label htmlFor="value-exchange"> {coinToUsd} </label>
            <span className="Show__exchange">
              {useShowValueExchange(showExchange, coinToUsd, coin)}
            </span>
          </div>
        </div>
      </>
    );
  }
);

export default CoinExchange;
