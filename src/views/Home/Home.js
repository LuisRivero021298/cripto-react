import React, { Component } from "react";

import TableContainer from "../../components/TableContainer";
import Footer from "../../components/Footer";
import BtnSwitchTheme from "../../components/BtnSwitchTheme";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Header--home">
          <section>
            <h1 className="Header__text">CriptoStatus</h1>
          </section>
          <section>
            <BtnSwitchTheme />
          </section>
        </header>
        <TableContainer history={this.props.history} />
        <Footer />
      </div>
    );
  }
}

export default Home;
