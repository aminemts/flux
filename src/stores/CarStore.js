import { Map, List } from "immutable";
import baseStore from "../core/baseStore";
import AppDispatcher from "../dispatchers/AppDispatcher";
import ActionTypes from "../constants/CarsConstants";
import immCar from "../entities/Car";
class CarStore extends baseStore {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.cars = new List();
    this.listCarsToCompare = new List();
  }

  /**
   * ajoute les produits passés en argument au store
   * processus d'initialisation
   */
  setCarsInStore(cars) {
    console.log("store", { cars });
    // this.cars = new List(cars);
    // console.log(new immCar(cars));
    // this.cars = new immCar(cars);
    this.cars = new List(cars.map((car) => new immCar(car)));
    this.emitChange();
  }

  /**
   * initialiser les produits qu'on va sauvegarder dans le store sous forme de map (immutable)
   * ou chaque produit sera indexé par une clé unique (id du produit)
   * on utilise map car ca nous permet de gérer les données avec une maniere simple
   * grace aux méthode built-in qu'il nous offre, puisque c'est immutable à chaque opération
   * on obtient une nouvelle copie
   *
   */
  getListCarsToCompare() {
    return this.listCarsToCompare;
  }
  getAllCars() {
    return this.cars;
  }
  /**
   * le store connait bien ces données et connait bien comment y acceder,
   * lorsque le composant React aura besoin d'un produit grace à son id il va lui demander
   * il lui retournera le résultat souhaité
   */
  getCar(id) {
    const car = this.cars.get(id);
    if (!car) {
      console.error("car inexistant pour  id donnée");
    }
    return car;
  }
  /**
   * on met à jour un produit et on notifie le composant React abonné aux changements
   */
  updateCar(car) {
    this.cars = this.cars.set(car.id, car);
    this.emitChange();
  }
  /**
   * un produit a ete cré, on l'ajoute au Map
   * et on notifie le composant React abonné aux changements
   */
  createCar(car) {
    this.cars = this.cars.push(car);
    this.emitChange();
  }

  /**
   * on supprime un produit et on notifie le
   * composant React abonné aux changements
   */
  deleteCar(id) {
    this.cars = this.cars.splice(id, 1);
    this.emitChange();
  }
  addCarToCompareList(car) {
    if (this.listCarsToCompare.map((car) => car.id).includes(car.id)) return;
    this.listCarsToCompare = this.listCarsToCompare.push(car);
    console.log("add car", { listCarsToCompare: this.listCarsToCompare });
    this.emitChange();
  }
  deleteCarFromCompareList(carId) {
    this.listCarsToCompare = this.listCarsToCompare.filter(
      ({ id }) => id !== carId
    );
    this.emitChange();
  }
  deleteCarsFromCompareList() {
    console.log("executed");
    this.listCarsToCompare = new List();
    this.emitChange();
  }
  initCars() {
    console.log("executed");
  }
}
/**
 * on analyse le type de l'action dispatch dans l'application
 * si le store est concerné dans son switch il traite cette action
 * on rentre dedans pour executer l'une de ses methodes
 * evoqué dessus dans le code (create, update, delete)
 */
const storeActions = (store) => {
  return (action) => {
    console.log("from reducer", { action });
    switch (action.actionType) {
      case ActionTypes.INIT_CARS:
        store.setCarsInStore(action.data);
        break;
      case ActionTypes.CREATE_CAR:
        store.createCar(action.data);
        break;
      case ActionTypes.UPDATE_CAR:
        store.updateCar(action.data);
        break;
      case ActionTypes.DELETE_CAR:
        store.deleteCar(action.data.id);
        break;
      case ActionTypes.ADD_CAR_TO_COMPARE_LIST:
        store.addCarToCompareList(action.data);
        break;
      case ActionTypes.DELETE_CAR_FROM_COMPARE_LIST:
        store.deleteCarFromCompareList(action.data);
        break;
      case ActionTypes.DELETE_CARS_FROM_COMPARE_LIST:
        store.deleteCarsFromCompareList();
        break;
      default:
        return;
    }
  };
};
const carStore = new CarStore();
carStore.dispatchToken = AppDispatcher.register(storeActions(carStore));
export default carStore;
