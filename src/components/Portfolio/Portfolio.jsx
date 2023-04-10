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