import React, { useContext } from 'react';
import { NumberContext } from '../../providers/NumberProvider.js'

const OperatorButton = ({ operatorType }) => {
  const { handleChooseOperatorType } = useContext(NumberContext);
  return (
    <button type="button" className="calculator-arithmetic-operator" onClick={() => console.log('hii', operatorType)}>
      <span>{ operatorType }</span>
    </button>
  )
}

export default OperatorButton;