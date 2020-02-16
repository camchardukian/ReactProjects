import React, { useState } from 'react';
import ClearButton from './ClearButton';
import Display from './Display';
import NumberButton from './NumberButton';
import RandomButton from './RandomButton';
import './style.scss'

const Calculator = () => {
    // let [displayAreaNumber, setRandomNumber] = useState(0);
    // const resetDisplayNumber = () => setState({displayAreaNumber});
    // const [displayAreaNumber] = useState
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
                    <button className="calculator-arithmetic-operator"><span>÷</span></button>
                </div>
                    <div className="calculator-middle-flex-container">
                    <button className="calculator-arithmetic-operator"><span>x</span></button>
                        <NumberButton buttonNumberValue={9} />
                        <NumberButton buttonNumberValue={8} />
                        <NumberButton buttonNumberValue={7} />
                        <button className="calculator-arithmetic-operator"><span>+</span></button>
                        <NumberButton buttonNumberValue={6} />
                        <NumberButton buttonNumberValue={5} />
                        <NumberButton buttonNumberValue={4} />
                        <button className="calculator-arithmetic-operator"><span>+</span></button>
                        <NumberButton buttonNumberValue={3} />
                        <NumberButton buttonNumberValue={2} />
                        <NumberButton buttonNumberValue={1} />
                    </div>
                    <div className="calculator-bottom-flex-container">
                    <NumberButton buttonNumberValue={0} />
                    <RandomButton />
                    <button className="calculator-arithmetic-operator"><span>.</span></button>
                    <button className="calculator-arithmetic-operator"><span>=</span></button>
                    </div>
                </div>
            </div>
        )
}

export default Calculator;