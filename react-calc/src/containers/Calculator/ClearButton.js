import React, { useContext } from 'react';
import { NumberContext } from '../../providers/NumberProvider.js'

const ClearButton = () => {
  const { handleClearValues } = useContext(NumberContext);
  return (
    <button type="button" className="calculator-arithmetic-operator" onClick={() => handleClearValues()}>
      <span className="clear-text">AC</span>
    </button>
  )
}

export default ClearButton;