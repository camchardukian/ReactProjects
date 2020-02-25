import React, { useContext } from 'react';
import { NumberContext } from '../../providers/NumberProvider.js'

const DecimalButton = () => {
  const { handleAddDecimal } = useContext(NumberContext);
  return (
    <button type="button" className="calculator-arithmetic-operator" onClick={() => handleAddDecimal('.')}>
    <span>.</span>
    </button>
  );
};

export default DecimalButton;
