import React, { useContext } from 'react';
import { NumberContext } from '../../providers/NumberProvider.js'

const OperatorButton = ({ opType }) => {
  const { handleChooseOperatorType } = useContext(NumberContext);
  return (
    <button type="button" className="calculator-arithmetic-operator" onClick={() => handleChooseOperatorType(opType)}>
      <span>{ opType }</span>
    </button>
  )
}

export default OperatorButton;