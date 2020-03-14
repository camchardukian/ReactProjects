import React, { useContext } from 'react';
import { NumberContext } from '../../providers/NumberProvider.js'

const ExponentButton = () => {
  const { handleChooseOperatorType } = useContext(NumberContext);
  return (
  <button className="calculator-arithmetic-operator exponent-button" onClick={() => handleChooseOperatorType('to the power of')}>
    <div>x</div><div>y</div>
  </button>
  );
};

export default ExponentButton;
