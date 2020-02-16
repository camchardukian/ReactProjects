import React, { useState } from 'react'

export const NumberContext = React.createContext();

const NumberProvider = props => {
  const [number, setNumber] = useState('');
  const [storedNumber, setStoredNumber] = useState('');

const handleSetDisplayValue = num => {
  if (!number.includes('.') || num !== '.') {
    setNumber(`${(number + num).replace(/^0+/, '')}`);
  }
};

const handleSetStoredValue = () => {
  setStoredNumber(number);
  console.log('sfr');
  setNumber('');
}

const handleClearValues = () => {
  console.log('clearr attempt');
  setNumber('');
  setStoredNumber('');
}

const handleChooseOperatorType = () => {
  // I know this function will set the operator type, but I'm feeling a bit too tired to
  // finish implementing it during this coding session. I'll get to it during my next session.
}

return (
  <NumberContext.Provider
  value={{
    handleClearValues,
    handleSetDisplayValue,
    handleSetStoredValue,
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