import React, { Component } from "react";

import TableContainer from "../../components/TableContainer";
import Footer from "../../components/Footer";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Header--home">
          <section>
            <h1 className="Header__text">CriptoStatus</h1>
          </section>
          <section>
            <div className="Switch__theme">
              <span className="Switch__btn"></span>
            </div>
          </section>
        </header>
        <TableContainer history={this.props.history} />
        <Footer />
      </div>
    );
  }
}

export default Home;
