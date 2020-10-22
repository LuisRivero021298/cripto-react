import React, { Component } from "react";
//import styles from './TableContainer.css';
import api from "../api";
import Table from "./Table";

class TableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      listCoin: [],
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  getData = async () => {
    this.setState({
      loading: true,
      error: null,
    });
    try {
      const { data } = await api.assets.list();
      this.setState({ listCoin: data, loading: false });
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
      </div>
    );
  }
}

export default TableContainer;
