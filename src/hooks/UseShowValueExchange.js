function useShowValueExchange(value, change, coin) {
  let newValue = "";
  if (change === coin) {
    newValue = `$ ${value}`;
  } else {
    newValue = `${coin} ${value}`;
  }
  return newValue;
}

export default useShowValueExchange;
