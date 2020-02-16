import React, { useContext } from 'react';
import { NumberContext } from '../../providers/NumberProvider.js';

const RandomButton = () => {
  const { handleSetDisplayValue, number } = useContext(NumberContext);
  const randomNumberGenerator = () => {
    if (number) {
      alert('Please clear the calculator before using the random number function.')
      return null;
    }
    handleSetDisplayValue(Math.ceil(Math.random()*Math.random()*100/Math.random()));
  }



  return (
    <button type="button" className="calculator-arithmetic-operator" onClick={randomNumberGenerator}>
    <span>random number</span>
    </button>
  )
}

export default RandomButton;