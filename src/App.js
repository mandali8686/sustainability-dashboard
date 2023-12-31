import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';  // Import the MainPage component
import Electricity from './Electricity';  // Import the Electricity component
import Dining from './Dining';
import CompostToDining from './CompostToDining';
import FCTUC from './FCTUC';
import UC from './UC';
import Individual from './Individual';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/electricity" element={<Electricity />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/compost_to_dining" element={<CompostToDining />} />
          <Route path="/FCTUC" element={<FCTUC />} />
          <Route path="/UC" element={<UC />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/individual" element={<Individual />} />
          
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
