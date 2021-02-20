import React from 'react';
import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

function SelectBuildingButton({ building, selectAction }) {
  const dispatch = useDispatch();
  return (
    <Button
      justifyContent="start"
      colorScheme="teal"
      size="md"
      variant="outline"
      isFullWidth="true"
      onClick={() => dispatch(selectAction())}
    >
      {building.name}
    </Button>
  );
}

SelectBuildingButton.propTypes = {
  building: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    materials: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number,
      }),
    ),
  }).isRequired,
  selectAction: PropTypes.func.isRequired,
};

export default SelectBuildingButton;
