import AppConstants from "../constants/CarsConstants";
import { dispatch } from "../dispatchers/AppDispatcher";
import cars from "../components/cars";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-type": "application/json",
  },
});

export const createCar = (item) => {
  dispatch({
    actionType: AppConstants.CREATE_CAR,
    data: item,
  });
};
export const updateCar = (item) => {
  dispatch({
    actionType: AppConstants.UPDATE_CAR,
    data: item,
  });
};

export const deleteCarFromCompareList = (carId) => {
  dispatch({
    actionType: AppConstants.DELETE_CAR_FROM_COMPARE_LIST,
    data: carId,
  });
};

export const deleteCarsFromCompareList = () => {
  dispatch({
    actionType: AppConstants.DELETE_CARS_FROM_COMPARE_LIST,
  });
};

export const addCarToCompareList = (car) => {
  console.log("from dispatcher", { car });
  dispatch({
    actionType: AppConstants.ADD_CAR_TO_COMPARE_LIST,
    data: car,
  });
};

export const initCars = async () => {
  //get data from axios
  const cars = await axiosInstance
    .get("/")
    .catch((error) => console.log(error));
  dispatch({
    actionType: AppConstants.INIT_CARS,
    data: cars,
  });
};
