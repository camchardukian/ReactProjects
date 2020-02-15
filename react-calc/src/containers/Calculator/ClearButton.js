import React, { useContext } from 'react';
import { NumberContext } from '../../providers/NumberProvider.js'

const ClearButton = () => {
  const { handleClearValue } = useContext(NumberContext);
  return (
    <button type="button" className="calculator-arithmetic-operator" onClick={() => handleClearValue()}>
    AC
    </button>
  )
}

export default ClearButton;