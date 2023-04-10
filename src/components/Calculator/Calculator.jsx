import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div>
    <nav>
                <ul id='mainMenu'>
                  <li><a href="/">Portfolio</a></li>
                  <li><a href="comic">Comic Characters</a></li>
                </ul>
      </nav> 
      <br/>
      <br/>
   
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleInput} />
      
      <div>
              <h1 className='head'>Calculator</h1>
      </div>
      
       
      <div>
        <button type="button" onClick={() => setInput('')}>
          CLEAR
        </button>
        <button type="button" onClick={() => setInput(input + '7')}>
          7
        </button>
        <button type="button" onClick={() => setInput(input + '8')}>
          8
        </button>
        <button type="button" onClick={() => setInput(input + '9')}>
          9
        </button>
        <button type="button" onClick={() => setInput(input + '/')}>
          DIVIDE
        </button>
      </div>
      <div>
        <button type="button" onClick={() => setInput(input + '4')}>
          4
        </button>
        <button type="button" onClick={() => setInput(input + '5')}>
          5
        </button>
        <button type="button" onClick={() => setInput(input + '6')}>
          6
        </button>
        <button type="button" onClick={() => setInput(input + '*')}>
          MULTIPLY
        </button>
      </div>
      <div>
        <button type="button" onClick={() => setInput(input + '1')}>
          1
        </button>
        <button type="button" onClick={() => setInput(input + '2')}>
          2
        </button>
        <button type="button" onClick={() => setInput(input + '3')}>
          3
        </button>
        <button type="button" onClick={() => setInput(input + '-')}>
          SUBTRACT
        </button>
      </div>
      <div>
        <button type="button" onClick={() => setInput(input + '0')}>
          0
        </button>
        <button type="submit">=</button>
        <button type="button" onClick={() => setInput(input + '+')}>
          ADD
        </button>
      </div>
    </form>
    </div>
  );
}

export default Calculator;
