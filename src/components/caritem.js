import React from "react";

import { addCarToCompareList } from "../actions/CarActions";

class CarItem extends React.Component {
  handleAdd = () => {
    addCarToCompareList(this.props.car);
  };

  render() {
    return (
      <div className="col-xs-6 col-sm-4">
        <h5>{this.props.car.marque}</h5>
        <img
          alt=""
          src="https://loremflickr.com/g/320/240/bmw"
          width="100%"
          className="img-responsive"
        />
        <p>{this.props.car.description}</p>
        <button className="btn btn-primary btn-md" onClick={this.handleAdd}>
          Ajouter
        </button>
      </div>
    );
  }
}
export default CarItem;
