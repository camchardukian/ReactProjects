import React, { useContext } from 'react';
import { NumberContext } from '../../providers/NumberProvider.js';

const RandomButton = () => {
  const { handleSetDisplayValue } = useContext(NumberContext);
  const randomNumberGenerator = () => {
    return Math.ceil(Math.random()*Math.random()*100/Math.random());
  }
  
  return (
    <button type="button" className="calculator-arithmetic-operator" onClick={ () => handleSetDisplayValue(randomNumberGenerator())}>
    <span>random number</span>
    </button>
  )
}

export default RandomButton;




// import React, { useContext } from 'react';
// import { NumberContext } from '../../providers/NumberProvider.js'

// const NumberButton = ({ buttonNumberValue }) => {
//   const { handleSetDisplayValue } = useContext(NumberContext);
//   return (
//     <button type="button" className="calculator-number-btn" onClick={() => handleSetDisplayValue(buttonNumberValue)}>
//     <span>{buttonNumberValue}</span>
//     </button>
//   );
// };

// export default NumberButton;
