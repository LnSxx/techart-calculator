import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import calculatePrice from './calculatePrice';
import SuccessCard from './SuccessCard/SuccessCard';
import FailCard from './FailCard/FailCard';
import ResultWaitingCard from './ResultWaitingCard/ResultWaitingCard';

function PriceCalculationResult() {
  const {
    selectedBuilding,
    selectedNumberOfFloors,
    selectedMaterial,
    wallSizeX,
    wallSizeY,
    priceCalculationResult,
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculatePrice(selectedBuilding.id,
      selectedNumberOfFloors,
      selectedMaterial,
      wallSizeX,
      wallSizeY));
  }, []);
  if (priceCalculationResult === null) {
    return <ResultWaitingCard />;
  }
  if (priceCalculationResult.result === 'error') {
    return <FailCard />;
  }
  return <SuccessCard />;
}

export default PriceCalculationResult;
