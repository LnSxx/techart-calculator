import React from 'react';
import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { selectMaterial } from '../../actions/actions';

function SelectMaterialButton({ material }) {
  const dispatch = useDispatch();
  return (
    <Button
      justifyContent="start"
      colorScheme="teal"
      size="md"
      variant="outline"
      isFullWidth="true"
      onClick={() => dispatch(selectMaterial(material.id))}
    >
      {material.name}
    </Button>
  );
}

SelectMaterialButton.propTypes = {
  material: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default SelectMaterialButton;
