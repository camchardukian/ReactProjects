import React
// { useContext } 
from 'react';
// import { NumberContext } from '../../providers/NumberProvider.js'

const ExponentButton = () => {
  // const {  } = useContext(NumberContext);
  return (
  <button className="calculator-arithmetic-operator exponent-button">
    <div>x</div><div>y</div>
  </button>
  );
};

export default ExponentButton;
