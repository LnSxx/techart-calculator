import { Box, Button, Stack } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetStore } from '../../actions/actions';
import SelectMaterialButton from '../SelectMaterialButton/SelectMaterialButton';

function MaterialSelectionCard() {
  const dispatch = useDispatch();
  const { selectedBuilding, stepNumber } = useSelector((state) => state);
  return (
    <>
      <Box className="stepTitle">
        Шаг:
        {stepNumber}
      </Box>
      <Box className="appInnerCard" borderWidth="2px" borderRadius="lg">
        <div className="appInnerCardQuestion">Материал стен:</div>
        <Stack spacing={4} align="start" direction="column">
          {selectedBuilding.materials.map((material) => (
            <SelectMaterialButton
              material={material}
              key={material.id}
            />
          ))}
        </Stack>
        <Stack
          spacing={4}
          align="center"
          direction="row"
          justifyContent="center"
          padding="10px"
        >
          <Button colorScheme="teal" size="md" variant="outline" onClick={() => { dispatch(resetStore()); }}>
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

export default MaterialSelectionCard;
