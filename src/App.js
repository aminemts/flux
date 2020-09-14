import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ComparePage from "./components/ComparePage";

import CarActions from "./actions/CarActions.js";

import Cars from "./components/cars";
import ListCarsToCompare from "./components/ListCarsToCompare";

import "./App.css";

const HomePage = () => (
  <div className="row">
    <div className="col-md-6">
      <Cars />
    </div>

    <div className="col-md-6">
      <ListCarsToCompare></ListCarsToCompare>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/compare" exact component={ComparePage}></Route>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
