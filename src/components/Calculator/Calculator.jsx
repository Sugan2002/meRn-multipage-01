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
    <div>
              <h1 className='head'>Calculator</h1>
      </div>
      <input type="text" value={input} onChange={handleInput} />
      
      <br/>
      <br/>
      
      <div className='butt'>
      <div>
        
        <button type="button" onClick={() => setInput(input + '+')}>
          ADD
        </button>
        <button type="button" onClick={() => setInput(input + '-')}>
          SUBTRACT
        </button>
        <button type="button" onClick={() => setInput(input + '*')}>
          MULTIPLY
        </button>
        <button type="button" onClick={() => setInput(input + '/')}>
          DIVIDE
        </button>
        
        
      </div>
      <br/>
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
        
      </div>
      <div>
      <button type="button" onClick={() => setInput(input + '7')}>
          7
        </button>
        <button type="button" onClick={() => setInput(input + '8')}>
          8
        </button>
        <button type="button" onClick={() => setInput(input + '9')}>
          9
        </button>
      </div>
      <br/>
      <div>
      <button type="clear" onClick={() => setInput('')}>
          CLEAR
        </button>
        <button type="submit">=</button>
      </div>
      
      </div>
    </form>
    </div>
  );
}

export default Calculator;
