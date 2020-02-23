import React, { useState } from 'react'

export const NumberContext = React.createContext();

const NumberProvider = props => {
  const [number, setNumber] = useState('');
  const [storedNumber, setStoredNumber] = useState('');
  const [operatorType, setOperatorType] = useState('');

const handleSetDisplayValue = num => {
  console.log('display rannnn')
  if (!number.includes('.') || num !== '.') {
    setNumber(`${(number + num).replace(/^0+/, '')}`);
  }
};

const handleClearNumber = () => {
  handleSetStoredValue();
}

const handleSetStoredValue = () => {
  setStoredNumber(number);
  setNumber('');
}

const handleClearValues = () => {
  setNumber('');
  setStoredNumber('');
  setOperatorType('');
}

const handleChooseOperatorType = (opType) => {
  if (number) {
    handleSetStoredValue();
    console.log('11111')
    setOperatorType(opType)
  }
  if (storedNumber) {
    console.log('22222')
    setOperatorType(opType)
  }
}

const handleCalculations = () => {
  console.log('calc number', number, 'calcstored', storedNumber)
  if (number && storedNumber) {
  const myValue = Number(number) + Number(storedNumber)
  setNumber(myValue);
  console.log('rrrr')
  console.log('numbererrrr', number)
  }
  handleSetStoredValue('')
  // I need the above function to reset the stored value
  // but if I call that function it seems the setNumber(myValue) does not work correctly.
  console.log('calc number end', number, 'calcstored end', storedNumber)
}

return (
  <NumberContext.Provider
  value={{
    handleClearValues,
    handleSetDisplayValue,
    handleSetStoredValue,
    handleChooseOperatorType,
    handleClearNumber,
    handleCalculations,
    operatorType,
    number,
    setNumber,
    storedNumber, 
    setStoredNumber
  }}
  >
  {props.children}
  </NumberContext.Provider>
);
};

export default NumberProvider;