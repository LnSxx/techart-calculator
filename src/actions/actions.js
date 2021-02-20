import { buildings } from '../models';

export const ACTION_NAMES = {
  SELECT_LIVING_HOUSE: 'SELECT_LIVING_HOUSE',
  SELECT_GARAGE: 'SELECT_GARAGE',
  SET_HEIGHT: 'SET_HEIGHT',
  SELECT_MATERIAL: 'SELECT_MATERIAL',
  SET_SIZES: 'SET_SIZES',
  PRICE_CALCULATION_SUCCESS: 'PRICE_CALCULATION_SUCCESS',
  PRICE_CALCULATION_FAIL: 'PRICE_CALCULATION_FAIL',
  RESET_STORE: 'RESET_STORE',
};

export const selectLivingHouse = () => ({
  type: ACTION_NAMES.SELECT_LIVING_HOUSE,
  building: buildings.livingHouse,
});

export const selectGarage = () => ({
  type: ACTION_NAMES.SELECT_GARAGE,
  building: buildings.garage,
});

export const setHeight = (data) => ({
  type: ACTION_NAMES.SET_HEIGHT,
  payload: data,
});

export const selectMaterial = (data) => ({
  type: ACTION_NAMES.SELECT_MATERIAL,
  payload: data,
});

export const setSizes = (sizeX, sizeY) => ({
  type: ACTION_NAMES.SET_SIZES,
  sizeX,
  sizeY,
});

export const priceCalculationSuccess = (data) => ({
  type: ACTION_NAMES.PRICE_CALCULATION_SUCCESS,
  payload: data,
});

export const priceCalculationFail = (error) => ({
  type: ACTION_NAMES.PRICE_CALCULATION_FAIL,
  payload: error,
});

export const resetStore = () => ({
  type: ACTION_NAMES.RESET_STORE,
});
