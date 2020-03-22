import React, { useContext} from 'react';
import { NumberContext } from '../../providers/NumberProvider.js';

import ClearButton from './ClearButton';
import Display from './Display';
import DecimalButton from './DecimalButton';
import EqualsButton from './EqualsButton';
import ExponentButton from './ExponentButton';
import InvertButton from './InvertButton';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import RandomButton from './RandomButton';
import './style.scss'

const Calculator = () => {
    console.log('calccc')
        const {
            handleSetRandomValue,
            handleSetDisplayValue,
            handleAddDecimal,
            handleChooseOperatorType,
            handleInvertEnteringNumber,
            handleClearValues,
            handleCalculations
        } = useContext(NumberContext);


document.addEventListener('keyup', function(event) {
    console.log('docccc')

    switch(event.key) {
        case '0':
        handleSetDisplayValue(0)
        break;

        case '1':
        handleSetDisplayValue(1)
        break;

        case '2':
        handleSetDisplayValue(2)
        break;

        case '3':
        handleSetDisplayValue(3)
        break;

        case '4':
        handleSetDisplayValue(4)
        break;

        case '5':
        handleSetDisplayValue(5)
        break;

        case '6':
        handleSetDisplayValue(6)
        break;

        case '7':
        handleSetDisplayValue(7)
        break;

        case '8':
        handleSetDisplayValue(8)
        break;

        case '9':
        handleSetDisplayValue(9)
        break;

        case '.':
        handleAddDecimal('.')
        break;

        case 'r':
        handleSetRandomValue()
        break;

        case '=':
        handleCalculations()
        break;

        case '-':
        handleChooseOperatorType('-')
        break;

        case '+':
        handleChooseOperatorType('+')
        break;

        case '*':
        handleChooseOperatorType('*')
        break;

        case '/':
        handleChooseOperatorType('/')
        break;

        case '^':
        handleChooseOperatorType('to the power of')
        break;

        case 'i':
        handleInvertEnteringNumber()
        break;

        case 'Backspace':
        handleClearValues()
        break;

        default:
        return null;
    }
});

        return (
            <div className="calculator-page-container">
                <div className="calculator-container">
                    <div className="calculator-display-area">
                        <Display />
                    </div>
                    <div className="calculator-top-flex-container">
                        <ClearButton />
                        <InvertButton />
                        <ExponentButton />
                        <OperatorButton opType={'÷'} />
                    </div>

                    <div className="calculator-middle-flex-container">
                        <OperatorButton opType={'x'} />
                        <NumberButton buttonNumberValue={9} />
                        <NumberButton buttonNumberValue={8} />
                        <NumberButton buttonNumberValue={7} />
                        <OperatorButton opType={'+'} />
                        <NumberButton buttonNumberValue={6} />
                        <NumberButton buttonNumberValue={5} />
                        <NumberButton buttonNumberValue={4} />
                        <OperatorButton opType={'-'} />
                        <NumberButton buttonNumberValue={3} />
                        <NumberButton buttonNumberValue={2} />
                        <NumberButton buttonNumberValue={1} />
                    </div>

                    <div className="calculator-bottom-flex-container">
                        <NumberButton buttonNumberValue={0} />
                        <RandomButton />
                        <DecimalButton />
                        <EqualsButton />
                    </div>
                </div>
            </div>
        )
}

export default Calculator;