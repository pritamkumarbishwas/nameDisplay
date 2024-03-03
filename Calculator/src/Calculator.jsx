import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const calculateResult = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="container">
      <fieldset id="container">
        <input id="display" type="text" value={display} readOnly />

        <input className="button digits" type="button" value="7" onClick={() => handleClick('7')} />
        <input className="button digits" type="button" value="8" onClick={() => handleClick('8')} />
        <input className="button digits" type="button" value="9" onClick={() => handleClick('9')} />
        <input className="button mathButtons" type="button" value="+" onClick={() => handleClick('+')} />
        <br />
        <input className="button digits" type="button" value="4" onClick={() => handleClick('4')} />
        <input className="button digits" type="button" value="5" onClick={() => handleClick('5')} />
        <input className="button digits" type="button" value="6" onClick={() => handleClick('6')} />
        <input className="button mathButtons" type="button" value="-" onClick={() => handleClick('-')} />
        <br />
        <input className="button digits" type="button" value="1" onClick={() => handleClick('1')} />
        <input className="button digits" type="button" value="2" onClick={() => handleClick('2')} />
        <input className="button digits" type="button" value="3" onClick={() => handleClick('3')} />
        <input className="button mathButtons" type="button" value="*" onClick={() => handleClick('*')} />
        <br />
        <input id="clearButton" className="button" type="button" value="C" onClick={handleClear} />
        <input className="button digits" type="button" value="0" onClick={() => handleClick('0')} />
        <input className="button mathButtons" type="button" value="=" onClick={calculateResult} />
        <input className="button mathButtons" type="button" value="/" onClick={() => handleClick('/')} />
      </fieldset>
    </div>
  );
}

export default Calculator;
