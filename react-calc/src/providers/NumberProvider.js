import React, { useState } from 'react'

export const NumberContext = React.createContext();

const NumberProvider = props => {
  const [number, setNumber] = useState(0);
  const [storedNumber, setStoredNumber] = useState(0);
  const [enteringNumber, setEnteringNumber] = useState(0);
  const [operatorType, setOperatorType] = useState('');

const handleSetDisplayValue = num => {
  if (String(number).length < 12) {
    if(!number){
      setNumber(num);
      setEnteringNumber(num);
    } else {
      setNumber(Number('' + number + num));
      setEnteringNumber(Number('' + number + num ));
    }
  }
  else {
    alert('maximum character limit exceeded')
  }
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
  setEnteringNumber(0);
  setOperatorType('');
}

const handleChooseOperatorType = (opType) => {
  setOperatorType(opType)

  if (number) {
    handleSetStoredValue();
  }
}

const handleAddDecimal = () => {
  let copyEnteringNumber;
  String(enteringNumber).indexOf('.') > -1 ? copyEnteringNumber = enteringNumber : copyEnteringNumber = enteringNumber  + '.';
  if (copyEnteringNumber !== enteringNumber && !storedNumber) {
  setEnteringNumber(copyEnteringNumber);
  setNumber(copyEnteringNumber)
  }
  else if (String(number).indexOf('.') === -1) {
    setNumber('0.')
    setEnteringNumber('0.')
  }
}

const handleInvertEnteringNumber = () => {
  const invertedNumber = enteringNumber * -1;
  if (number !== 0) {
    setEnteringNumber(invertedNumber)
    setNumber(invertedNumber)
  }
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
      default:
      return null;
    }
    result = Math.round(result*10000)/10000;
    setStoredNumber(result);
    setEnteringNumber(0);
    setNumber(0);
  }
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
    handleAddDecimal,
    handleSetRandomValue,
    handleInvertEnteringNumber,
    operatorType,
    number,
    setNumber,
    storedNumber, 
    setStoredNumber,
    enteringNumber,
  }}
  >
  {props.children}
  </NumberContext.Provider>
);
};

export default NumberProvider;