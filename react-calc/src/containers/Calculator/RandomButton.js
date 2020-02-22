import React, { useContext } from 'react';
import { NumberContext } from '../../providers/NumberProvider.js';

const RandomButton = () => {
  const { handleSetDisplayValue, number, handleClearNumber } = useContext(NumberContext);
  const randomNumberGenerator = () => {
    if (number) {
      alert('Please clear the calculator before using the random number function.')
      // handleClearNumber('');
      // NOTE: While I can get the above method to run and access the NumberContext, it seems my setNumber('') isn't working inside of Context for some reason.
      return null;
    }
    handleSetDisplayValue(Math.ceil(Math.random()*Math.random()*100/Math.random()));
  }



  return (
    <button type="button" className="calculator-arithmetic-operator random-number-operator" onClick={randomNumberGenerator}>
    <span>random number</span>
    </button>
  )
}

export default RandomButton;