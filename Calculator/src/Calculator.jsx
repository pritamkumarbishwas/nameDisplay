import { useState } from 'react'
import './Calculator.css'

function Calculator() {

  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (value) => {
    setDisplayValue(prevValue => prevValue + value);
  };

  const handleClearButtonClick = () => {
    setDisplayValue('');
  };

  const handleEqualButtonClick = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };


  return (
    <div className="container">
      <fieldset id="container">
        <form name="calculator">
          <input id="display" type="text" name="display" value={displayValue} readOnly />

          <div className="row">
            <button className="button digits" type="button" onClick={() => handleButtonClick('7')}>7</button>
            <button className="button digits" type="button" onClick={() => handleButtonClick('8')}>8</button>
            <button className="button digits" type="button" onClick={() => handleButtonClick('9')}>9</button>
            <button className="button mathButtons" type="button" onClick={() => handleButtonClick(' + ')}>+</button>
          </div>

          <div className="row">
            <button className="button digits" type="button" onClick={() => handleButtonClick('4')}>4</button>
            <button className="button digits" type="button" onClick={() => handleButtonClick('5')}>5</button>
            <button className="button digits" type="button" onClick={() => handleButtonClick('6')}>6</button>
            <button className="button mathButtons" type="button" onClick={() => handleButtonClick(' - ')}>-</button>
          </div>

          <div className="row">
            <button className="button digits" type="button" onClick={() => handleButtonClick('1')}>1</button>
            <button className="button digits" type="button" onClick={() => handleButtonClick('2')}>2</button>
            <button className="button digits" type="button" onClick={() => handleButtonClick('3')}>3</button>
            <button className="button mathButtons" type="button" onClick={() => handleButtonClick(' * ')}>x</button>
          </div>

          <div className="row">
            <button id="clearButton" className="button" type="button" onClick={handleClearButtonClick}>C</button>
            <button className="button digits" type="button" onClick={() => handleButtonClick('0')}>0</button>
            <button className="button mathButtons" type="button" onClick={handleEqualButtonClick}>=</button>
            <button className="button mathButtons" type="button" onClick={() => handleButtonClick(' / ')}>/</button>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

export default Calculator;