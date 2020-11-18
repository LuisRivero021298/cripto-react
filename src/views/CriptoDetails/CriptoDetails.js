import React, { useEffect, useState } from "react";
import api from "../../api";

import HeaderDetails from "../../components/HeaderDetails/HeaderDetails";
import HistoryChartContainer from "../../components/HistoryChart/HistoryChartContainer";
import Footer from "../../components/Footer/Footer";
import InfoDetails from "../../components/InfoDetails/InfoDetails";
import CoinExchangeContainer from "../../components/CoinExchange/CoinExchangeContainer";

const CriptoDetails = (props) => {
  const id = props.match.params.idCripto;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});
  const [historicList, setHistoricList] = useState([]);

  useEffect(()=> {
    const getData = async (id) => {
      setLoading(true);
      setError(null);
      try {
        await getDataCoin(id);
        await getHistoric(id);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    getData(id)
  }, [id]);

  const getDataCoin = async (id) => {
    const { data } = await api.assets.coinDetail(id);
    setData(data);

  };
  const getHistoric = async (id) => {
    const { data } = await api.assets.historyAsset(id);
    setHistoricList(data);
  };

  if (error) {
    return <div>Error</div>;
  }
  return (
    <div className="CriptoDetail">
      <HeaderDetails coin={data} loading={loading} />
      <section className="Cripto__container animate__animated animate__fadeInRight">
        <article className="Chart__container">
          <HistoryChartContainer
            loading={loading}
            historic={historicList}
          />
        </article>
        <article className="Info__details__container">
          <InfoDetails
            history={historicList}
            data={data}
            loading={loading}
          />
        </article>
        <article className="Coin__exchange__container">
          <CoinExchangeContainer
            coin={data.symbol}
            priceUsd={data.priceUsd}
          />
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default CriptoDetails;
