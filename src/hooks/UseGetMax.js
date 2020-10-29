function useGetMax(history) {
  return Math.max(...history.map((h) => parseFloat(h.priceUsd).toFixed(2)));
}

export default useGetMax;