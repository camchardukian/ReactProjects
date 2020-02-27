import React, { useContext } from 'react';
import { NumberContext } from '../../providers/NumberProvider.js'

const InvertButton = () => {
  const { handleInvertEnteringNumber } = useContext(NumberContext);
  return (
    <button type="button" className="calculator-arithmetic-operator" onClick={() => handleInvertEnteringNumber()}>
      <span>±</span>
    </button>
  )
}

export default InvertButton;