import * as React from 'react';
import './app.css';
import { AllBeers } from './components/allBeers';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to Beer Buddy</h1>
    </header>
    <AllBeers />
  </div>
);

export default App;