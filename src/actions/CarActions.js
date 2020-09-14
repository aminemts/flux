import AppConstants from "../constants/CarsConstants";
import { dispatch } from "../dispatchers/AppDispatcher";

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

export const addCarToCompareList = (car) => {
  console.log("from dispatcher", { car });
  dispatch({
    actionType: AppConstants.ADD_CAR_TO_COMPARE_LIST,
    data: car,
  });
};
