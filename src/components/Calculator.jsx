import React, { useState } from 'react';
import { evaluate } from 'mathjs'; // Install this package using `npm install mathjs`


const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === 'Ans') {
      setInput(input + result);
    } else {
      setInput(input + value);
    }
  };

  const calculateResult = () => {
    try {
      const evaluatedResult = evaluate(input);
      setResult(evaluatedResult);
      setInput(evaluatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const buttons = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['0', 'Ans','clr'],
    ['clearstore', 'view history']
    
  ];

  return (
    <div className="calculator-container">
      <center>
        <input type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <button onClick={calculateResult}>Result</button>
        <h4>Result is here: {result}</h4>
        {buttons.map((row, rowIndex) => (
          <div className="button-row" key={rowIndex}>
            {row.map((btn, index) => (
              <button
                key={index}
                onClick={() => btn === 'clr' ? setInput('') : handleClick(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        ))}
      </center>
    </div>
  );
};

export default Calculator;
