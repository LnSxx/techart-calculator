import {
  Box,
  Button,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetStore, setSizes } from '../../actions/actions';

function SetSizesCard() {
  const [enteredSizeX, setSizeX] = useState(1);
  const [enteredSizeY, setSizeY] = useState(1);
  const dispatch = useDispatch();
  const { stepNumber } = useSelector((state) => state);
  return (
    <>
      <Box className="stepTitle">
        Шаг:
        {stepNumber}
      </Box>
      <Box className="appInnerCard" borderWidth="2px" borderRadius="lg">
        <div className="appInnerCardQuestion">Длина стен (в метрах)</div>
        <Stack
          justifyContent="center"
          alignItems="center"
          direction="row"
        >
          <NumberInput
            size="lg"
            maxW={32}
            defaultValue={1}
            min={1}
            onChange={(valueAsString, valueAsNumber) => { setSizeX(valueAsNumber); }}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Box fontSize="1.2em">X</Box>
          <NumberInput
            size="lg"
            maxW={32}
            defaultValue={1}
            min={1}
            onChange={(valueAsString, valueAsNumber) => { setSizeY(valueAsNumber); }}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
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
          <Button
            colorScheme="teal"
            size="md"
            variant="solid"
            onClick={() => { dispatch(setSizes(enteredSizeX, enteredSizeY)); }}
          >
            Рассчитать
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default SetSizesCard;
