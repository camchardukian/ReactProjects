import React, { useState } from 'react';
import ClearButton from './ClearButton';
import './style.scss'

const Calculator = () => {
    // let [displayAreaNumber, setRandomNumber] = useState(0);
    // const resetDisplayNumber = () => setState({displayAreaNumber});
    // const [displayAreaNumber] = useState
        return (
            <div className="calculator-page-container">
                <div className="calculator-container">
                <div className="calculator-display-area"></div>
                <div className="calculator-top-flex-container">
                    <ClearButton />
                    <button className="calculator-arithmetic-operator"><span>±</span></button>
                    <button className="calculator-arithmetic-operator"><span>%</span></button>
                    <button className="calculator-arithmetic-operator"><span>÷</span></button>
                </div>
                    <div className="calculator-middle-flex-container">
                    <button className="calculator-arithmetic-operator"><span>x</span></button>
                        <button className="calculator-number-btn"><span>9</span></button>
                        <button className="calculator-number-btn"><span>8</span></button>
                        <button className="calculator-number-btn"><span>7</span></button>
                        <button className="calculator-arithmetic-operator"><span>+</span></button>
                        <button className="calculator-number-btn"><span>6</span></button>
                        <button className="calculator-number-btn"><span>5</span></button>
                        <button className="calculator-number-btn"><span>4</span></button>
                        <button className="calculator-arithmetic-operator"><span>+</span></button>
                        <button className="calculator-number-btn"><span>3</span></button>
                        <button className="calculator-number-btn"><span>2</span></button>
                        <button className="calculator-number-btn"><span>1</span></button>
                    </div>
                    <div className="calculator-bottom-flex-container">
                        <button className="calculator-number-btn"><span>0</span></button>
                        <button className="calculator-arithmetic-operator">
                        <span>random number</span>
                        </button>
                        <button className="calculator-arithmetic-operator"><span>.</span></button>
                        <button className="calculator-arithmetic-operator"><span>=</span></button>
                    </div>
                </div>
            </div>
        )
}

export default Calculator;