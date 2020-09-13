import AppConstants from "../constants/CarsConstants";
import { dispatch } from "../dispatchers/AppDispatcher";

export const createCar = (item) => {
  dispatch({
    actionType: AppConstants.CREATE_CAR,
    item,
  });
};
export const updateCar = (item) => {
  dispatch({
    actionType: AppConstants.UPDATE_CAR,
    item,
  });
};

export const deleteCarFromCompareList = (carId) => {
  dispatch({
    actionType: AppConstants.DELETE_CAR_FROM_COMPARE_LIST,
    carId,
  });
};

export const addCarToCompareList = (car) => {
  console.log(car);
  dispatch({
    actionType: AppConstants.ADD_CAR_TO_COMPARE_LIST,
    car,
  });
};
