import React, { useContext } from 'react';
import { NumberContext } from '../../providers/NumberProvider.js';

const RandomButton = () => {
  const { handleSetRandomValue} = useContext(NumberContext);
  const randomNumberGenerator = () => {
    handleSetRandomValue(Math.ceil(Math.random()*Math.random()*100/Math.random()));
  }

  return (
    <button type="button" className="calculator-arithmetic-operator random-number-operator" onClick={randomNumberGenerator}>
    <span>random number</span>
    </button>
  )
}

export default RandomButton;