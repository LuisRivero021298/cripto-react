import React, { Component } from "react";

import TableContainer from "../../components/TableContainer";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Header--home">
          <h1 className="Header__text">CriptoStatus</h1>
        </header>
        <TableContainer history={this.props.history} />
        <footer>
          <a href="https://github.com/LuisRivero021298">RiveroCode</a>
        </footer>
      </div>
    );
  }
}

export default Home;
