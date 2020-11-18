import React from "react";

import TableContainer from "../../components/TableListCriptos/TableListCriptosContainer";
import Footer from "../../components/Footer/Footer";
import BtnSwitchTheme from "../../components/BtnSwitchTheme/BtnSwitchTheme";

const Home = (props) => {
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
      <TableContainer history={props.history} />
      <Footer />
    </div>
  );
};

export default Home;
