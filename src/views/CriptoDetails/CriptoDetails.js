import React, { Component } from "react";
import api from "../../api";

import HeaderDetails from "../../components/HeaderDetails/HeaderDetails";
import HistoryChartContainer from "../../components/HistoryChart/HistoryChartContainer";
import Footer from "../../components/Footer/Footer";
import InfoDetails from "../../components/InfoDetails/InfoDetails";
import CoinExchangeContainer from "../../components/CoinExchange/CoinExchangeContainer";

class CriptoDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: {},
      historicList: [],
    };
  }
  componentDidMount = async () => {
    const id = this.props.match.params.idCripto;
    this.getData(id);
  };

  getData = async (id) => {
    this.setState({
      loading: true,
      error: null,
    });
    try {
      await this.getDataCoin(id);
      await this.getHistoric(id);
      this.setState({
        loading: false,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
  };

  getDataCoin = async (id) => {
    const { data } = await api.assets.coinDetail(id);
    this.setState({
      data,
    });
  };
  getHistoric = async (id) => {
    const { data } = await api.assets.historyAsset(id);
    this.setState({
      historicList: data,
    });
  };

  render() {
    if (this.state.error) {
      return <div>Error</div>;
    }
    return (
      <div className="CriptoDetail">
        <HeaderDetails coin={this.state.data} loading={this.state.loading} />
        <section className="Cripto__container">
          <article>
            <HistoryChartContainer
              loading={this.state.loading}
              historic={this.state.historicList}
            />
          </article>
          <article className="Info__details__container">
            <InfoDetails
              history={this.state.historicList}
              data={this.state.data}
              loading={this.state.loading}
            />
          </article>
          <article className="Coin__exchange__container">
            <CoinExchangeContainer
              coin={this.state.data.symbol}
              priceUsd={this.state.data.priceUsd}
            />
          </article>
        </section>
        <Footer />
      </div>
    );
  }
}

export default CriptoDetails;
