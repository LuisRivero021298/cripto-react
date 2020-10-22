const base_url = "https://api.coincap.io/v2/";

async function callApi(endPoint, options = {}) {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const url = base_url + endPoint;
  const response = await fetch(url);
  const data = response.json();

  return data;
}

const api = {
  assets: {
    list(limitCoin) {
      return callApi(`assets?limit=${limitCoin}`);
    },
    coinDetail(id) {
      return callApi(`assets/${id}`);
    },
  },
};

export default api;
