import React, { useContext } from 'react';
import { NumberContext } from '../../providers/NumberProvider.js'

const ClearButton = () => {
  const { handleClearValues } = useContext(NumberContext);
  return (
    <button type="button" className="calculator-arithmetic-operator" onClick={() => handleClearValues()}>
    AC
    </button>
  )
}

export default ClearButton;