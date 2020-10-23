import numeral from "numeral";

const useDollarFilter = (value) => {
  return !value ? "$ 0" : `$ ${numeral(value).format("(# 0.00a)")}`;
};

export default useDollarFilter;
