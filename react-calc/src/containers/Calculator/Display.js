import React, { useContext } from 'react';
import { NumberContext } from '../../providers/NumberProvider.js'

const Display = () => {
  const { number, storedNumber, enteringNumber, operatorType } = useContext(NumberContext);
  return (
    <div>
      <h2>{enteringNumber}</h2>
      <p> 
        {(!storedNumber && !number) && 'Current numbers will appear here'}
        {(!storedNumber && number) ? `${number} ${operatorType} ` : ''}
        {(storedNumber) ? `${storedNumber} ${operatorType} ${number}` : ''}
      </p>
    </div>
  )
}

export default Display;