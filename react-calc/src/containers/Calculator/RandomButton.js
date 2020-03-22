import React, { useContext } from 'react';
import { NumberContext } from '../../providers/NumberProvider.js';

const RandomButton = () => {
  const { handleSetRandomValue} = useContext(NumberContext);
  const randomNumberGenerator = () => {
    handleSetRandomValue();
  }

  return (
    <button type="button" className="calculator-arithmetic-operator random-number-operator" onClick={randomNumberGenerator}>
    <span>random number</span>
    </button>
  )
}

export default RandomButton;