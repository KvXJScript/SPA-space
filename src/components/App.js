import React, {lazy, Suspense} from 'react';
import '../styles/_base.scss';
// import Homepage from '../layouts/Header';
import {BrowserRouter as Router} from 'react-router-dom';

const Homepage = lazy(()=>import('../layouts/Header'));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback = {<div>Loading...</div>}>
          <Homepage/>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
