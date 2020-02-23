import React, { useContext } from 'react';
import { NumberContext } from '../../providers/NumberProvider.js'

const Display = () => {
  const { number, storedNumber, operatorType } = useContext(NumberContext);
  console.log('number is', number, 'storedNumber is', storedNumber)
  return (
    <div>
      <h2> {!number.length && !storedNumber ? '0' : number || storedNumber}</h2>
      <p> {!storedNumber ? 'Current numbers will appear here' : `${storedNumber} ${operatorType} ${number}`}</p>
    </div>
  )
}

export default Display;