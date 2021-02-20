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
import { resetStore, setHeight } from '../../actions/actions';

function SetHeightCard() {
  const [entertedHeight, setEntertedHeight] = useState(1);
  const dispatch = useDispatch();
  const { stepNumber } = useSelector((state) => state);
  return (
    <>
      <Box className="stepTitle">
        Шаг:
        {stepNumber}
      </Box>
      <Box className="appInnerCard" borderWidth="2px" borderRadius="lg">
        <div className="appInnerCardQuestion">Количество этажей (число)</div>
        <Stack
          justifyContent="center"
          direction="col"
        >
          <NumberInput
            size="lg"
            maxW={32}
            defaultValue={1}
            min={1}
            onChange={(valueAsString, valueAsNumber) => { setEntertedHeight(valueAsNumber); }}
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
          <Button
            colorScheme="teal"
            size="md"
            variant="outline"
            onClick={() => { dispatch(resetStore()); }}
          >
            Отмена
          </Button>
          <Button
            colorScheme="teal"
            size="md"
            variant="solid"
            onClick={() => { dispatch(setHeight(entertedHeight)); }}
          >
            Далее
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default SetHeightCard;
