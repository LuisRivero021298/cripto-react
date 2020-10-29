function useGetMin(history) {
  return Math.min(...history.map((h) => parseFloat(h.priceUsd).toFixed(2)));
}

export default useGetMin;