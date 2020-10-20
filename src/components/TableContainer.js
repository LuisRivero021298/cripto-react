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
      console.log(data);
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  render() {
    return (
      <div>
        <Table coin={this.state.listCoin} />
      </div>
    );
  }
}

export default TableContainer;
