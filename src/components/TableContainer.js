import React, { Component } from "react";
import api from "../api";
import Table from "./Table";

class TableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      listCoin: [],
      limitCoin: 20,
    };
  }

  handleGetMoreData = () => {
    this.setState({ limitCoin: this.state.limitCoin + 10 });
    this.getData(this.state.limitCoin + 10);
  };

  componentDidMount = () => {
    this.getData(this.state.limitCoin);
  };

  getData = async (limit = null) => {
    this.setState({
      loading: true,
      error: null,
    });
    try {
      const { data } = await api.assets.list(limit);
      this.setState({
        listCoin: data,
        loading: false,
      });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  render() {
    return (
      <div className="Table__container">
        <Table
          loading={this.state.loading}
          coin={this.state.listCoin}
          history={this.props.history}
        />
        <button
          onClick={this.handleGetMoreData}
          type="button"
          className="btn--more__cripto"
        >
          <i className="material-icons md-36">arrow_drop_down</i>
        </button>
      </div>
    );
  }
}

export default TableContainer;
