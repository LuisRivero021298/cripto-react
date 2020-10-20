import React, { Component } from "react";
//import styles from "./Home.css";

import TableContainer from "../../components/TableContainer";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>CriptoStatus</h1>
        </header>
        <TableContainer />
      </React.Fragment>
    );
  }
}

export default Home;
