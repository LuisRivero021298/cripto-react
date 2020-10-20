import React, { Component } from "react";
//import "./Home.css";

import TableContainer from "../../components/TableContainer";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="Header">
          <h1 className="Header__text">CriptoStatus</h1>
        </header>
        <TableContainer />
      </React.Fragment>
    );
  }
}

export default Home;
