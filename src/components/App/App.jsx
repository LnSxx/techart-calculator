import {
  Container, Box, Spinner, useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { APP_STATES } from '../../models';

import BuildingSelection from '../BuildingSelection/BuildingSelection';
import SetHeightCard from '../SetHeightCard/SetHeightCard';
import './App.sass';
import SelectMaterialCard from '../SelectMaterialCard/SelectMaterialCard';
import SetSizesCard from '../SetSizesCard/SetSizesCard';
import PriceCalculationResult from '../PriceCalculationResu;t/PriceCalculationResult';
import ErrorResponseCard from '../ErrorResponseCard/ErrorResponseCard';

function getRequiredCard(appStep) {
  switch (appStep) {
    case APP_STATES.BUILDING_SELECTION:
      return <BuildingSelection />;
    case APP_STATES.HEIGHT_SETTING:
      return <SetHeightCard />;
    case APP_STATES.MATERIAL_SELECTION:
      return <SelectMaterialCard />;
    case APP_STATES.SIZES_SETTING:
      return <SetSizesCard />;
    case APP_STATES.CALCULATION_RESULT:
      return <PriceCalculationResult />;
    case APP_STATES.PRICE_CALCULATION_FAIL:
      return <ErrorResponseCard />;
    default:
      return <Spinner />;
  }
}

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { step } = useSelector((state) => state);
  if (colorMode === 'light') {
    toggleColorMode();
  }
  return (
    <div className="App">
      <Container>
        <Box maxW="md" className="appCard" borderWidth="3px" borderRadius="lg">
          <Box className="appCardTitle">
            <b>Калькулятор цены конструкций</b>
          </Box>
          {getRequiredCard(step)}
        </Box>
      </Container>
    </div>
  );
}

export default App;
