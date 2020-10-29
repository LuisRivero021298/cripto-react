function useGetAvg(history) {
  let subTotal = 0;
  for (let i = 0; i < history.length; i++) {
    subTotal += parseFloat(history[i].priceUsd);
  }
  return subTotal / history.length;
}

export default useGetAvg;