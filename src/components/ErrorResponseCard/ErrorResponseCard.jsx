import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetStore } from '../../actions/actions';

function ErrorResponseCard() {
  const { priceCalculationFail } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <Box className="stepTitle">
        Неудачный запрос
      </Box>
      <Box className="appInnerCard" borderWidth="2px" borderRadius="lg" color="#d43838">
        {priceCalculationFail.message}
      </Box>
      <Button colorScheme="teal" size="md" variant="solid" onClick={() => { dispatch(resetStore()); }}>
        Новый расчет
      </Button>
    </>
  );
}

export default ErrorResponseCard;
