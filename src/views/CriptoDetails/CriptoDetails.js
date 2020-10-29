import React, { Component } from "react";
import api from "../../api";

import HeaderDetails from "../../components/HeaderDetails";
import HistoryChartContainer from "../../components/HistoryChartContainer";
import SkeletonExchange from "../../components/SkeletonExchange";
import SkeletonChart from "../../components/SkeletonChart";
import Footer from "../../components/Footer";
import InfoDetails from "../../components/InfoDetails";
import CoinExchange from "../../components/CoinExchange";

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

  handleExchangeCoin = (e) => {
    const value = e.target.value;
    this.setState({ showExchange: value * this.state.data.priceUsd });
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
            {this.state.loading ? (
              <SkeletonChart />
            ) : (
              <HistoryChartContainer
                loading={this.state.loading}
                historic={this.state.historicList}
              />
            )}
          </article>
          <article className="Info__details__container">
            <InfoDetails
              history={this.state.historicList}
              data={this.state.data}
              loading={this.state.loading}
            />
          </article>
          <article className="Coin__exchange__container">
            {!this.state.data.symbol ? (
              <SkeletonExchange />
            ) : (
              <CoinExchange
                coin={this.state.data.symbol}
                priceUsd={this.state.data.priceUsd}
              />
            )}
          </article>
        </section>
        <Footer />
      </div>
    );
  }
}

export default CriptoDetails;
