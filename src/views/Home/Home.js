import React, { Component } from "react";

import TableContainer from "../../components/TableContainer";
import Footer from "../../components/Footer";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Header--home">
          <h1 className="Header__text">CriptoStatus</h1>
        </header>
        <TableContainer history={this.props.history} />
        <Footer />
      </div>
    );
  }
}

export default Home;
