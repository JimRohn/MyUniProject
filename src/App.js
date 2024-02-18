import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Learning from './pages/Learning';
import People from './pages/People';
import './App.css';



function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/people" element={<People/>} />
     
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
