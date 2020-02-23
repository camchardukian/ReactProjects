import React from 'react';
import ClearButton from './ClearButton';
import Display from './Display';
import EqualsButton from './EqualsButton';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import RandomButton from './RandomButton';
import './style.scss'

const Calculator = () => {
        return (
            <div className="calculator-page-container">
                <div className="calculator-container">
                    <div className="calculator-display-area">
                        <Display />
                    </div>
                    <div className="calculator-top-flex-container">
                        <ClearButton />
                        <button className="calculator-arithmetic-operator"><span>±</span></button>
                        <button className="calculator-arithmetic-operator"><span>%</span></button>
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
                        <button className="calculator-arithmetic-operator"><span>.</span></button>
                        <EqualsButton />
                    </div>
                </div>
            </div>
        )
}

export default Calculator;