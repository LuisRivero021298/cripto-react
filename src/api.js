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
    list(query) {
      return callApi(`assets?${query}`);
    },
    coinDetail(id) {
      return callApi(`assets/${id}`);
    },
    historyAsset(id) {
      const now = new Date();
      const end = now.getTime();
      now.setDate(now.getDate() - 1);
      const start = now.getTime();

      return callApi(
        `assets/${id}/history?interval=h1&start=${start}&end=${end}`
      );
    },
  },
};

export default api;
