import React, { useState } from 'react'

export const NumberContext = React.createContext();

const NumberProvider = props => {
  const [number, setNumber] = useState(0);
  const [storedNumber, setStoredNumber] = useState(0);
  const [enteringNumber, setEnteringNumber] = useState(0);
  const [operatorType, setOperatorType] = useState('');

const handleSetDisplayValue = num => {
  // if (!number.includes('.') || num !== '.') {
    // setNumber(`${(number + num).replace(/^0+/, '')}`);
    if(!number){
      setNumber(num);
      setEnteringNumber(num);
    } else {
      setNumber(Number('' + number + num));
      setEnteringNumber(Number('' + number + num ));
    }
    
  // }
};
const handleSetRandomValue = num => {
  setNumber(num);
  setEnteringNumber(num);
}

const handleClearNumber = () => {
  handleSetStoredValue();
}

const handleSetStoredValue = () => {
  setStoredNumber(number);
  setNumber(0);
}

const handleClearValues = () => {
  setNumber(0);
  setStoredNumber(0);
  setOperatorType('');
}

const handleChooseOperatorType = (opType) => {
  setOperatorType(opType)

  if (number) {
    handleSetStoredValue();
  }
  // if (storedNumber) {
  //   setOperatorType(opType)
  // }
}

const handleCalculations = () => {
  if (number && storedNumber) {
    let result = 0;
    switch(operatorType) {
      case '+':
        result = Number(storedNumber) + Number(number);
      break;
      case '-':
        result = Number(storedNumber) - Number(number);
      break;
      case 'x':
        result = Number(storedNumber) * Number(number);
      break;
      case '÷':
        result = Number(storedNumber) / Number(number);
      break;
    }
    
    setStoredNumber(result);
    setEnteringNumber(result);
    setNumber(0);
  }
  // handleSetStoredValue('')
  // I need the above function to reset the stored value
  // but if I call that function it seems the setNumber(myValue) does not work correctly.
  // console.log('calc number end', number, 'calcstored end', storedNumber)
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
    setStoredNumber,
    enteringNumber,
    handleSetRandomValue
  }}
  >
  {props.children}
  </NumberContext.Provider>
);
};

export default NumberProvider;