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
