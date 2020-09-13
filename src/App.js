import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Route } from "react-router-dom";

import CarActions from "./actions/CarActions.js";

import Cars from "./components/cars";
import ListCarsToCompare from "./components/ListCarsToCompare";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Cars />
        </div>

        <div className="col-md-6">
          <ListCarsToCompare></ListCarsToCompare>
        </div>
      </div>
    </div>
  );
}

export default App;
