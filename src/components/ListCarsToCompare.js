import React, { Component } from "react";
import { deleteCarFromCompareList } from "../actions/CarActions";
import CarStore from "../stores/CarStore";
import { Link } from "react-router-dom";

const handleDelete = (carId) => deleteCarFromCompareList(carId);

class ListCarsToCompare extends Component {
  state = {
    listCarsToCompare: CarStore.getListCarsToCompare().toJS(),
  };

  onChange = () => {
    console.log("from onChange");
    this.setState({
      listCarsToCompare: CarStore.getListCarsToCompare().toJS(),
    });
  };

  componentDidMount() {
    CarStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    CarStore.removeChangeListener(this.onChange);
  }

  render() {
    return (
      <div>
        <h2>Liste des voitures à comparer</h2>
        <div className="card m-4">
          <ul>
            {this.state.listCarsToCompare.map((car) => (
              <li key={car.id}>
                <h1>{car.marque}</h1>
                <button onClick={() => handleDelete(car.id)}>Retirer</button>
              </li>
            ))}
          </ul>
        </div>

        <Link to="/compare">Comparer</Link>
      </div>
    );
  }
}

export default ListCarsToCompare;
