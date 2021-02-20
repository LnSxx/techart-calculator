import { Box, Button, Stack } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetStore, selectGarage, selectLivingHouse } from '../../actions/actions';
import SelectBuildingButton from '../SelectBuildingButton/SelectBuildingButton';
import { buildings } from '../../models';

function BuildingSelection() {
  const dispatch = useDispatch();
  const { stepNumber } = useSelector((state) => state);
  return (
    <>
      <Box className="stepTitle">
        Шаг:
        {stepNumber}
      </Box>
      <Box className="appInnerCard" borderWidth="2px" borderRadius="lg">
        <div className="appInnerCardQuestion">Что будем строить?</div>
        <Stack spacing={4} align="start" direction="column">
          <SelectBuildingButton building={buildings.livingHouse} selectAction={selectLivingHouse} />
          <SelectBuildingButton building={buildings.garage} selectAction={selectGarage} />
        </Stack>
        <Stack
          spacing={4}
          align="center"
          direction="row"
          justifyContent="center"
          padding="10px"
        >
          <Button
            colorScheme="teal"
            size="md"
            variant="outline"
            onClick={() => { dispatch(resetStore()); }}
          >
            Отмена
          </Button>
          <Button colorScheme="teal" size="md" variant="solid" disabled>
            Далее
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default BuildingSelection;
