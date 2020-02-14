import React, { useState } from 'react';
import './style.scss'

const Calculator = () => {
    const [randomNumber, setRandomNumber] = useState(0);
        return (
            <div className="calculator-page-container">
                <div className="calculator-container">
                <div className="calculator-display-area">{randomNumber}</div>
                <div className="calculator-top-flex-container">
                    <button className="calculator-arithmetic-operator"><span>AC</span></button>
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
                        <button className="calculator-arithmetic-operator"
                        onClick={() => setRandomNumber(Math.random()*Math.random()*100/Math.random())}>
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