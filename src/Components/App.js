import React from "react";
import Landing from "./Landing/Landing";
import Presale from "./Presale/Presale";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/presale" component={Presale} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
