import React, { Component } from "react";
import api from "../../api";

import HeaderDetails from "../../components/HeaderDetails";
import HistoryChart from "../../components/HistoryChart";
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
      history: [],
      valueExchange: 0,
      showExchange: 0,
    };
  }
  componentDidMount = () => {
    const id = this.props.match.params.idCripto;
    this.getDataCoin(id);
    this.getHistoryCoin(id);
  };

  handleExchangeCoin = (e) => {
    const value = e.target.value;
    this.setState({ showExchange: value * this.state.data.priceUsd });
  };
  getDataCoin = async (id) => {
    this.setState({
      loading: true,
      error: null,
    });
    try {
      const { data } = await api.assets.coinDetail(id);
      this.setState({
        loading: false,
        data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
  };

  getHistoryCoin = async (id) => {
    this.setState({
      loading: true,
      error: null,
    });
    try {
      const { data } = await api.assets.historyAsset(id);
      this.setState({
        loading: false,
        history: data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
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
              <div>Hola</div>
            ) : (
              <HistoryChart data={this.state.history} />
            )}
          </article>
          <article className="Info__details__container">
            <InfoDetails history={this.state.history} data={this.state.data} />
          </article>
          <article className="Coin__exchange__container">
            {!this.state.data.symbol ? (
              <div>Loading...</div>
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
