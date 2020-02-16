import React, { useContext } from 'react';
import { NumberContext } from '../../providers/NumberProvider.js'

const Display = () => {
  const { number, storedNumber, functionType } = useContext(NumberContext);
  return (
    <div>
      <h2> {!number.length && !storedNumber ? '0' : number || storedNumber}</h2>
      <p> {!storedNumber ? 'Current numbers will appear here' : `${storedNumber} ${functionType} ${number}`}</p>
    </div>
  )
}

export default Display;