import React, { Component } from "react";
import HistoryChart from "./HistoryChart";

class HistoryChartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceList: [],
      datesList: [],
    };
  }
  componentDidMount = () => {
    this.setOptionsCharts();
  };

  setOptionsCharts = () => {
    this.setState({
      priceList: this.props.historic
        ? this.props.historic.map((p) => {
            return p.priceUsd;
          })
        : [],
      datesList: new Array(24).fill(1).map(() => ""),
    });
  };

  render() {
    return (
      <HistoryChart
        datesList={this.state.datesList}
        priceList={this.state.priceList}
      />
    );
  }
}

export default HistoryChartContainer;

