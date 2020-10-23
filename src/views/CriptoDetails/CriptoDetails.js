import React, { Component } from "react";
import api from "../../api";

import HeaderDetails from "../../components/HeaderDetails";
import HistoryChart from "../../components/HistoryChart";
import Footer from "../../components/Footer";

class CriptoDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: {},
    };
  }
  componentDidMount = () => {
    this.getDataCoin();
  };
  getDataCoin = async () => {
    this.setState({
      loading: true,
      error: null,
    });
    const id = this.props.match.params.idCripto;
    try {
      const { data } = await api.assets.coinDetail(id);
      this.setState({
        loading: false,
        data,
      });
      console.log(this.state.data);
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
  };

  render() {
    return (
      <div className="CriptoDetail">
        <HeaderDetails coin={this.state.data} loading={this.state.loading} />
        <section className="Cripto__container">
          <article>
            {this.state.loading ? (
              <div>Hola</div>
            ) : (
              <HistoryChart id={this.state.data.id} />
            )}
          </article>
        </section>
        <Footer />
      </div>
    );
  }
}

export default CriptoDetails;
