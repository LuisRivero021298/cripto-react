import React, { Component } from "react";
import api from "../../api";

class CriptoDetails extends Component {
  state = {
    loading: true,
    error: null,
    data: {},
  };

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
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Hello from {this.state.data.id} details</h1>
      </div>
    );
  }
}

export default CriptoDetails;
