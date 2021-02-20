import {
  Box, Spinner,
} from '@chakra-ui/react';
import React from 'react';

function ResultWaitingCard() {
  return (
    <Box className="appInnerCard" borderWidth="2px" borderRadius="lg">
      Подождите пожалуйста, производится расчет.
      <Spinner size="lg" />
    </Box>
  );
}

export default ResultWaitingCard;
