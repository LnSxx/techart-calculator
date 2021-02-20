import { ACTION_NAMES } from '../actions/actions';
import { APP_STATES } from '../models';

const initialState = {
  selectedBuilding: null,
  selectedMaterial: null,
  selectedNumberOfFloors: null,
  wallSizeX: null,
  wallSizeY: null,
  priceCalculationResult: null,
  priceCalculationFail: null,
  step: APP_STATES.BUILDING_SELECTION,
  stepNumber: 1,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_NAMES.SELECT_LIVING_HOUSE:
      return {
        ...state,
        selectedBuilding: action.building,
        step: APP_STATES.HEIGHT_SETTING,
        stepNumber: state.stepNumber + 1,
      };
    case ACTION_NAMES.SELECT_GARAGE:
      return {
        ...state,
        selectedBuilding: action.building,
        selectedNumberOfFloors: 1,
        step: APP_STATES.MATERIAL_SELECTION,
        stepNumber: state.stepNumber + 1,
      };
    case ACTION_NAMES.SET_HEIGHT:
      return {
        ...state,
        selectedNumberOfFloors: action.payload,
        step: APP_STATES.MATERIAL_SELECTION,
        stepNumber: state.stepNumber + 1,
      };
    case ACTION_NAMES.SELECT_MATERIAL:
      return {
        ...state,
        selectedMaterial: action.payload,
        step: APP_STATES.SIZES_SETTING,
        stepNumber: state.stepNumber + 1,
      };
    case ACTION_NAMES.SET_SIZES:
      return {
        ...state,
        wallSizeX: action.sizeX,
        wallSizeY: action.sizeY,
        step: APP_STATES.CALCULATION_RESULT,
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
        step: APP_STATES.PRICE_CALCULATION_FAIL,
      };
    case ACTION_NAMES.RESET_STORE:
      return initialState;
    default:
      return state;
  }
}
