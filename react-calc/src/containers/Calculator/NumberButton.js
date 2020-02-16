import React, { useContext } from 'react';
import { NumberContext } from '../../providers/NumberProvider.js'

const NumberButton = ({ buttonNumberValue }) => {
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <button type="button" className="calculator-number-btn" onClick={() => handleSetDisplayValue(buttonNumberValue)}>
    <span>{buttonNumberValue}</span>
    </button>
  );
};

export default NumberButton;
