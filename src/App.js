import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import CriptoDetails from "./views/CriptoDetails";
import Error404 from "./views/Error404";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cripto/:idCripto" component={CriptoDetails} />
        <Route exact path="*" component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;

