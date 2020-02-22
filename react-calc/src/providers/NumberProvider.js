import React, { useState } from 'react'

export const NumberContext = React.createContext();

const NumberProvider = props => {
  const [number, setNumber] = useState('');
  const [storedNumber, setStoredNumber] = useState('');
  const [operatorType, setOperatorType] = useState('');

const handleSetDisplayValue = num => {
  if (!number.includes('.') || num !== '.') {
    setNumber(`${(number + num).replace(/^0+/, '')}`);
  }
};

const handleClearNumber = () => {
  console.log('eeee')
  setNumber('')
  setNumber('')
}

const handleSetStoredValue = () => {
  console.log('the number is...', number)
  setStoredNumber(number);
  console.log('the stored number is...', storedNumber);
  setNumber('');
  console.log('the fnal number is', number)
}

const handleClearValues = () => {
  console.log('clearr attempt', number);
  setNumber('');
  setStoredNumber('');
}

const handleChooseOperatorType = (opType) => {
  handleSetStoredValue();
  setOperatorType(opType)

}

return (
  <NumberContext.Provider
  value={{
    handleClearValues,
    handleSetDisplayValue,
    handleSetStoredValue,
    handleChooseOperatorType,
    handleClearNumber,
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