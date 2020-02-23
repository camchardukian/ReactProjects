import React, { useContext } from 'react';
import { NumberContext } from '../../providers/NumberProvider.js'

const EqualsButton = () => {
  const { handleCalculations } = useContext(NumberContext);
  return (
    <button type="button" className="calculator-arithmetic-operator" onClick={() => handleCalculations()}>
      <span>=</span>
    </button>
  )
}

export default EqualsButton;