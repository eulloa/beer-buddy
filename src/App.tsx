import * as React from 'react';
import './App.css';
import { AllBeers } from './components/allBeers';
import { RandomBeer } from './components/randomBeer';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to Beer Buddy</h1>
    </header>
    <section className="beverages">
      <RandomBeer />
      <AllBeers />
    </section>
  </div>
);

export default App;