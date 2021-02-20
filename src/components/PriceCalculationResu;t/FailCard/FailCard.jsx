import { Box, Button, Stack } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetStore } from '../../../actions/actions';

function SuccessCard() {
  const { priceCalculationResult } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <Box className="stepTitle">
        Результат расчета
      </Box>
      <Box className="appInnerCard" borderWidth="2px" borderRadius="lg" color="#d43838">
        <div className="appInnerCardQuestion">Ошибка</div>
        <Box>{priceCalculationResult.message}</Box>
        <Stack
          spacing={4}
          align="center"
          direction="row"
          justifyContent="center"
          padding="10px"
        >
          <Button colorScheme="teal" size="md" variant="solid" onClick={() => { dispatch(resetStore()); }}>
            Новый расчет
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default SuccessCard;
