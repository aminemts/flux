import React, { Component } from "react";
import CarStore from "../stores/CarStore";

export default class ComparePage extends Component {
  state = {
    listCarsToCompare: CarStore.getListCarsToCompare(),
  };

  render() {
    return (
      <div>
        <div className="card m-12">
          <ul>
            {this.state.listCarsToCompare.map((car) => (
              <li key={car.id}>
                <h1>{car.marque}</h1>
                <p>{car.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
