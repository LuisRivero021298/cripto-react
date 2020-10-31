import React, { Component } from "react";
import api from "../../api";
import Table from "./TableListCriptos";

class TableListCriptosContainer extends Component {
  constructor(props) {
    super(props);
    const heightSize = window.screen.height;
    this.state = {
      loading: true,
      error: null,
      listCoin: [],
      limitCoin: heightSize > 1300 ? 20 : 10,
    };
  }

  handleGetMoreData = () => {
    this.setState({ limitCoin: this.state.limitCoin + 10 });
    const query = `offset=${this.state.limitCoin}&limit=10`;
    this.getData(query);
  };

  componentDidMount = () => {
    this.getData(`limit=${this.state.limitCoin}`);
  };

  getData = async (query) => {
    this.setState({
      loading: true,
      error: null,
    });
    try {
      const { data } = await api.assets.list(query);
      this.setState({
        listCoin: [...this.state.listCoin, ...data],
        loading: false,
      });
      console.log(this.state.listCoin);
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

export default TableListCriptosContainer;
