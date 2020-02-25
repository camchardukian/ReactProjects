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
    console.log('number', number, 'storedNumber', storedNumber, 'enteringNumber', enteringNumber)

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
  let copyEnteringNumber = enteringNumber;
  copyEnteringNumber = copyEnteringNumber + '.';
  setEnteringNumber(copyEnteringNumber);
  setNumber(copyEnteringNumber);
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
    // result = Math.round(result*100)/100;
    setStoredNumber(result);
    setEnteringNumber(result);
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