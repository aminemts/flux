import React from "react";
import CarItem from "../components/caritem";
import CarStore from "../stores/CarStore";
import { initCars } from "../actions/CarActions";
function getCars() {
  return { cars: CarStore.getAllCars().toJS() };
}
class cars extends React.Component {
  constructor() {
    super();
    this.state = getCars();
  }
  /**
   * fetch cars from server
   */
  componentDidMount() {
    initCars();
    CarStore.addChangeListener(this.onChange);
  }
  onChange = () => {
    console.log("from onChange");
    this.setState({
      cars: CarStore.getAllCars().toJS(),
    });
  };
  componentWillUnmount() {
    CarStore.removeChangeListener(this.onChange);
  }
  render() {
    let cars = this.state.cars.map((car) => {
      return <CarItem key={car.id} car={car}></CarItem>;
    });
    return <div className="row">{cars}</div>;
  }
}
export default cars;
