export default (value) => (!value ? "0%" : `${parseFloat(value).toFixed(2)}%`);
