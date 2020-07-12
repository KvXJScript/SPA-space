import React from 'react';
import '../styles/_base.scss';
import Homepage from '../layouts/Header';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Homepage/>
      </div>
    </Router>
  );
}

export default App;
