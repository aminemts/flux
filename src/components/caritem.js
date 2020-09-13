import React from "react";

import { addCarToCompareList } from "../actions/CarActions";

class CarItem extends React.Component {
  handleAdd = () => {
    addCarToCompareList(this.props.car);
  };

  render() {
    return (
      <div className="col-xs-6 col-sm-4">
        <h3>{this.props.car.marque}</h3>
        <img
          alt=""
          src="http://placehold.it/250x250"
          width="100%"
          className="img-responsive"
        />
        <p>{this.props.car.description}</p>
        <button onClick={this.handleAdd}>Ajouter</button>
      </div>
    );
  }
}
export default CarItem;
