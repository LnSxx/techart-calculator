import axios from 'axios';
import { priceCalculationFail, priceCalculationSuccess } from '../../actions/actions';
import settings from '../../settings';

export default function calculatePrice(building, height, material, sizeX, sizeY) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${settings.PRICE_CALCULATION_API}lab/json/?building=${building}&height=${height}&material=${material}&sizex=${sizeX}&sizey=${sizeY}`);
      dispatch(priceCalculationSuccess(response.data));
    } catch (error) {
      dispatch(priceCalculationFail(error));
    }
  };
}
