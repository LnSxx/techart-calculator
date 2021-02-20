import { ACTION_NAMES } from '../actions/actions';
import { appStates } from '../models';

const initialState = {
  selectedBuilding: null,
  selectedMaterial: null,
  selectedNumberOfFloors: null,
  wallSizeX: null,
  wallSizeY: null,
  priceCalculationResult: null,
  priceCalculationFail: null,
  step: appStates.BUILDING_SELECTION,
  stepNumber: 1,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_NAMES.SELECT_LIVING_HOUSE:
      return {
        ...state,
        selectedBuilding: action.building,
        step: appStates.HEIGHT_SETTING,
        stepNumber: state.stepNumber + 1,
      };
    case ACTION_NAMES.SELECT_GARAGE:
      return {
        ...state,
        selectedBuilding: action.building,
        selectedNumberOfFloors: 1,
        step: appStates.MATERIAL_SELECTION,
        stepNumber: state.stepNumber + 1,
      };
    case ACTION_NAMES.SET_HEIGHT:
      return {
        ...state,
        selectedNumberOfFloors: action.payload,
        step: appStates.MATERIAL_SELECTION,
        stepNumber: state.stepNumber + 1,
      };
    case ACTION_NAMES.SELECT_MATERIAL:
      return {
        ...state,
        selectedMaterial: action.payload,
        step: appStates.SIZES_SETTING,
        stepNumber: state.stepNumber + 1,
      };
    case ACTION_NAMES.SET_SIZES:
      return {
        ...state,
        wallSizeX: action.sizeX,
        wallSizeY: action.sizeY,
        step: appStates.CALCULATION_RESULT,
      };
    case ACTION_NAMES.PRICE_CALCULATION_SUCCESS:
      return {
        ...state,
        priceCalculationResult: action.payload,
      };
    case ACTION_NAMES.PRICE_CALCULATION_FAIL:
      return {
        ...state,
        priceCalculationFail: action.payload,
        step: appStates.PRICE_CALCULATION_FAIL,
      };
    case ACTION_NAMES.RESET_STORE:
      return initialState;
    default:
      return state;
  }
}
