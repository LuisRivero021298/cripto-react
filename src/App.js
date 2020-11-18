import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home";
import CriptoDetails from "./views/CriptoDetails/CriptoDetails";
import Error404 from "./views/Errors/Error404";

import "./App.scss";

const App = () => {
  const root = document.getElementById("root");
  const inspectTheme = () => {
    if (localStorage.getItem("theme") === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };
  inspectTheme();

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cripto/:idCripto" component={CriptoDetails} />
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
};

export default App;
