import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  const calculateResult = () => {
    try {
      const result = evaluateExpression(input);
      setOutput(result.toString());
    } catch (error) {
      setOutput('Error');
    }
  };

  const evaluateExpression = (expression) => {
    const sanitizedExpression = expression.replace(/\s/g, ''); // Remove whitespaces
    return eval(sanitizedExpression); // Use eval to calculate the expression
  };

  return (
    <div className="container">
      <fieldset id="container">
        <input id="display" type="text" value={input} readOnly />
        <p>{output}</p>

        <div className="button-row">
          <button className="button digits" onClick={() => handleClick('7')}>7</button>
          <button className="button digits" onClick={() => handleClick('8')}>8</button>
          <button className="button digits" onClick={() => handleClick('9')}>9</button>
          <button className="button mathButtons" onClick={() => handleClick(' + ')}>+</button>
        </div>
        <div className="button-row">
          <button className="button digits" onClick={() => handleClick('4')}>4</button>
          <button className="button digits" onClick={() => handleClick('5')}>5</button>
          <button className="button digits" onClick={() => handleClick('6')}>6</button>
          <button className="button mathButtons" onClick={() => handleClick(' - ')}>-</button>
        </div>
        <div className="button-row">
          <button className="button digits" onClick={() => handleClick('1')}>1</button>
          <button className="button digits" onClick={() => handleClick('2')}>2</button>
          <button className="button digits" onClick={() => handleClick('3')}>3</button>
          <button className="button mathButtons" onClick={() => handleClick(' * ')}>*</button>
        </div>
        <div className="button-row">
          <button id="clearButton" className="button" onClick={handleClear}>C</button>
          <button className="button digits" onClick={() => handleClick('0')}>0</button>
          <button className="button mathButtons" onClick={calculateResult}>=</button>
          <button className="button mathButtons" onClick={() => handleClick(' / ')}>/</button>
        </div>
      </fieldset>
    </div>
  );
}

export default Calculator;
