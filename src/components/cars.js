import React from "react";
import CarItem from "../components/caritem";

import CarStore from "../stores/CarStore";

function getCars() {
  return { cars: CarStore.getAllCars() };
}

class cars extends React.Component {
  constructor() {
    super();
    this.state = getCars();
  }
  render() {
    let cars = this.state.cars.map((car) => {
      return <CarItem key={car.id} car={car}></CarItem>;
    });
    return <div className="row">{cars}</div>;
  }
}

export default cars;
