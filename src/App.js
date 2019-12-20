import React from 'react';
import './App.css';
import Home from './views/HomePage/Home.js'
import 'typeface-roboto';

function App() {
  return (
    <div className="App">
      <div class="background-image"></div>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
