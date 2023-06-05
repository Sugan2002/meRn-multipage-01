### EXPERIMENT - 01

# <p align="center">Multipage React Application</P>

## Aim:
To create multipage react app, which contains the following pages
- First page : A landing page about yourself (portfolio/cv)

- Second page : A calculator (using React forms)

- Third page : Display all the cartoon characters from the "Rick and Morty Comic". API : https://rickandmortyapi.com/.

## Algorithm:

Step-1: Create a folder in cmd and import packages

Step-2: Create a components and create .jsx file folder

Step-3: As per the given task design the style.css

Step-4: Fetch the data by using API

Step-5: Run the program in npm start


## Program

### app.jsx
```javascript
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator/Calculator';
import Portfolio from './components/Portfolio/Portfolio';
import Comic from './components/Comic/Comic'
function App() {
  return (
    <React.Fragment>
        <Router>
          <Routes>
          <Route path="/" element={<Portfolio/>}></Route>
          <Route path="/calculator" element={<Calculator/>}></Route>
          <Route path="/comic" element={<Comic/>}></Route>
          </Routes>
        </Router>
    </React.Fragment>
    
  );
}

export default App;


```

### Components
## calculator.jsx
```
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
```

## comic.jsx
```
import {useEffect, useState} from 'react';
import './Comic.css';
import axios from 'axios';

function App() {
    const [characters, setCharacters] = useState([])
    const [query, setQuery] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
                setCharacters(data.results)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [query])

    return (
        
        <div className="App">
        <div>
        <nav>
                <ul id='mainMenu'>
                  <li><a href="/">Portfolio</a></li>
                  <li><a href="calculator">Calculator</a></li>
                </ul>
      </nav>  
      <br/>
      </div>
      <div className='head'>
      <h1>Rick & Morty Characters</h1>
      </div>
            
            <div className="search">
                <input type="text"
                       placeholder={"Search Character"}
                       className={"input"}
                       onChange={event => setQuery(event.target.value)}
                       value={query}
                />
            </div>
            <div className="results">
                {characters.map(character => (
                    
                    <div>
                        
                        <img src={character.image} alt={character.name}/>
                        {character.name}<br/>
                        {character.status}<br/>
                        {character.species}<br/>
                        <br/>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
```

## portfolio.jsx
```
import React, { Component } from 'react'
import './Portfolio.css';

export class Portfolio extends Component {
  render() {
    return (
        <div>
            <nav>
                <ul id='mainMenu'>
                  <li><a href="calculator">Calculator</a></li>
                  <li><a href="comic">Comic Characters</a></li>
                </ul>
            </nav>
            <br/>
            <header class="head">
            <h1>Suganya Parthiban</h1>
            <p>Pre-final year Student</p>
            </header>
            <div className='edu'>
            <h2>Education</h2>
            <ul>
                <li>
                    <h3>B.Tech - Artificial Intelligence And Data Science</h3>
                    <p>CGPA - 8.5</p>
                    <p>Aug 2020 - Present</p>
                    </li>
                    <li>
                        <h3>HSC - Kendriya Vidhyalaya</h3>
            <p>Percentage - 75%</p>
            <p>Apr 2018 - Mar 2020</p>
          </li>
          <li>
            <h3>SSC - Navy Children School</h3>
            <p>Percentage - 70%</p>
            <p>Apr 2014 - Mar 2018</p>
          </li>
         </ul>
        </div>
        </div>
    )
  }
}

export default Portfolio
```
## Links 

## Vercel Link - https://react-task-one-psi.vercel.app/

## Output

![image](https://github.com/Sugan2002/react-task/assets/77089743/c16c566c-d461-47ef-bbe5-5da94a880600)

![image](https://github.com/Sugan2002/react-task/assets/77089743/35acd1d6-3345-49c1-8433-eb1ec5e9e87c)

![image](https://github.com/Sugan2002/react-task/assets/77089743/a72a7f5a-3a9b-44e2-82fc-133d348fed91)

## Result
Thus, a multipage react application is successfully developed.
